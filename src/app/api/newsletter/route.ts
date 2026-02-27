import { NextRequest, NextResponse } from "next/server";
import { rateLimit, getIp } from "@/lib/rateLimit";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req: NextRequest) {
  const ip = getIp(req);
  const { allowed } = rateLimit(`newsletter:${ip}`, 5, 60_000);
  if (!allowed) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const { email, website } = await req.json();

  // Honeypot — bots fill this, humans don't
  if (website) {
    return NextResponse.json({ success: true });
  }

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const DC = API_KEY?.split("-")[1];

  if (!API_KEY || !AUDIENCE_ID || !DC) {
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  const response = await fetch(
    `https://${DC}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    }
  );

  const data = await response.json();

  if (response.status === 200 || response.status === 201) {
    return NextResponse.json({ success: true });
  }

  if (data.title === "Member Exists") {
    return NextResponse.json({ alreadySubscribed: true });
  }

  return NextResponse.json({ error: data.detail || "Something went wrong" }, { status: 400 });
}

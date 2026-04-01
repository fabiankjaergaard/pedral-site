import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { collections } from "@/lib/collections";
import { rateLimit, getIp } from "@/lib/rateLimit";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const ALLOWED_ORIGINS = new Set([
  "https://pedral.eu",
  "https://www.pedral.eu",
  "https://pedral.watch",
  "https://www.pedral.watch",
]);

export async function POST(req: NextRequest) {
  const ip = getIp(req);
  const { allowed } = await rateLimit(`payment-intent:${ip}`, 10, 60_000);
  if (!allowed) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const requestOrigin = req.headers.get("origin") ?? "";
  if (!ALLOWED_ORIGINS.has(requestOrigin)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-01-28.clover",
  });
  const { slug, variantName, email } = await req.json();

  if (email && !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const collection = collections.find((c) => c.slug === slug);
  if (!collection) {
    return NextResponse.json({ error: "Collection not found" }, { status: 404 });
  }

  const variant = collection.variants?.find((v) => v.name === variantName);
  if (!variant) {
    return NextResponse.json({ error: "Variant not found" }, { status: 404 });
  }

  // Find or create Stripe customer
  let customerId: string | undefined;
  if (email) {
    const existing = await stripe.customers.list({ email, limit: 1 });
    if (existing.data.length > 0) {
      customerId = existing.data[0].id;
    } else {
      const customer = await stripe.customers.create({ email });
      customerId = customer.id;
    }
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: collection.price * 100, // cents
    currency: "eur",
    customer: customerId,
    receipt_email: email,
    metadata: {
      product: collection.name,
      variant: variantName,
      slug,
    },
    automatic_payment_methods: { enabled: true },
  });

  return NextResponse.json({ clientSecret: paymentIntent.client_secret });
}

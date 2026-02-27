import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { rateLimit, getIp } from "@/lib/rateLimit";

export async function POST(req: NextRequest) {
  const ip = getIp(req);
  const { allowed } = rateLimit(`preorder:${ip}`, 10, 60_000);
  if (!allowed) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: "Stripe not configured" }, { status: 500 });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2026-01-28.clover",
    });

    const { collectionSlug, collectionName, depositAmount } = await req.json();

    if (!collectionSlug || !collectionName || !depositAmount) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const origin = req.headers.get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL ?? "https://pedral.eu";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      ui_mode: "embedded",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "eur",
            unit_amount: depositAmount * 100,
            product_data: {
              name: `${collectionName} — Reservation Deposit`,
              description:
                "Non-refundable deposit. Secures your place in the production queue. Remaining balance invoiced before shipping.",
            },
          },
        },
      ],
      return_url: `${origin}/order/success?type=preorder&session_id={CHECKOUT_SESSION_ID}`,
      metadata: {
        type: "preorder",
        collection: collectionSlug,
      },
      shipping_address_collection: {
        allowed_countries: [
          "SE", "NO", "DK", "FI", "DE", "NL", "BE", "FR", "IT", "ES",
          "PT", "AT", "CH", "GB", "IE", "PL", "CZ", "SK", "HU", "RO",
          "US", "CA", "AU", "JP", "SG", "AE",
        ],
      },
      billing_address_collection: "required",
      phone_number_collection: { enabled: true },
      custom_text: {
        submit: {
          message: `This €${depositAmount} deposit is non-refundable and secures your place in the ${collectionName} production queue. The remaining balance will be invoiced before shipping.`,
        },
      },
    });

    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Preorder error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

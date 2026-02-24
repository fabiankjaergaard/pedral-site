import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-01-28.clover",
  });
  const { priceId, productName, variantName } = await req.json();

  if (!priceId || !productName) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const origin = req.headers.get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL ?? "https://pedral.eu";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${origin}/order/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/collections`,
    metadata: {
      product: productName,
      variant: variantName ?? "",
    },
    shipping_address_collection: {
      allowed_countries: [
        "SE", "NO", "DK", "FI", "DE", "NL", "BE", "FR", "IT", "ES",
        "PT", "AT", "CH", "GB", "IE", "PL", "CZ", "SK", "HU", "RO",
        "US", "CA", "AU", "JP", "SG", "AE",
      ],
    },
    phone_number_collection: { enabled: true },
    custom_text: {
      submit: {
        message: "Your order is allocation-based. Kevin will confirm your piece within 24 hours.",
      },
    },
  });

  return NextResponse.json({ url: session.url });
}

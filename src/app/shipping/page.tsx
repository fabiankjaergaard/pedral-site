import type { Metadata } from "next";
import LegalPage from "@/components/pages/LegalPage";

export const metadata: Metadata = {
  title: "Shipping & Customs",
  description: "Pedral Watches shipping information, delivery times, and customs duties.",
  alternates: { canonical: "/shipping" },
};

export default function ShippingPage() {
  return (
    <LegalPage eyebrow="Legal" title="Shipping & Customs" updated="International delivery information">
      <h2>Shipping</h2>
      <p>All Pedral watches are shipped from Stockholm, Sweden via insured, tracked courier service.</p>
      <ul>
        <li><strong>Sweden:</strong> 2–4 business days</li>
        <li><strong>EU & EEA:</strong> 3–7 business days</li>
        <li><strong>United Kingdom:</strong> 5–10 business days</li>
        <li><strong>United States & Canada:</strong> 5–10 business days</li>
        <li><strong>Rest of world:</strong> 7–14 business days</li>
      </ul>
      <p>All shipments are insured for the full purchase value. You will receive a tracking number via email.</p>

      <h2>Customs, Duties & Import Taxes</h2>
      <p>
        <strong>Important for customers outside the EU:</strong> Orders shipped outside the European Union
        may be subject to import duties, VAT, or other taxes. These are <strong>not included</strong> in
        the product price and are the buyer&apos;s responsibility.
      </p>
      <ul>
        <li>We are legally required to declare the full value on customs documents</li>
        <li>EU customers: all applicable VAT is included in the displayed price</li>
        <li>UK customers: UK import VAT (20%) and customs duty may apply</li>
      </ul>

      <h2>Delivery Issues</h2>
      <p>
        If your package is lost or damaged in transit, contact us at{" "}
        <a href="mailto:info@pedral.eu">info@pedral.eu</a> with your order number.
      </p>
    </LegalPage>
  );
}

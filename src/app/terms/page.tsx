import type { Metadata } from "next";
import LegalPage from "@/components/pages/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Pedral Watches terms and conditions of sale.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms & Conditions of Sale" updated="Last updated: February 2026">
      <h2>1. About Us</h2>
      <p>
        <strong>[Full Legal Name]</strong><br />
        Organisation number: [XXXXXX-XXXX]<br />
        Stockholm, Sweden<br />
        Email: <a href="mailto:info@pedral.eu">info@pedral.eu</a>
      </p>

      <h2>2. Products & Pricing</h2>
      <p>
        All prices are shown in EUR and include Swedish VAT (25%) where applicable.
        For deliveries outside the EU, VAT is not charged at checkout, but you may be
        liable for import duties in your destination country.
      </p>
      <p>Our watches are produced in limited editions. We reserve the right to cancel an order if a product becomes unavailable, with a full refund within 14 days.</p>

      <h2>3. Right of Withdrawal</h2>
      <p>
        Under EU law, you have the right to withdraw from your purchase within <strong>14 days</strong> of
        receiving the goods, without giving any reason. Exceptions apply to made-to-order items
        (custom Artefact dials, Triomphe Hebrew/Eastern Arabic editions).
      </p>

      <h2>4. Warranty</h2>
      <p>
        All Pedral watches come with a <strong>12-month international warranty</strong> covering
        manufacturing defects. EU consumers also benefit from statutory guarantee of conformity
        (3 years under Swedish law).
      </p>

      <h2>5. Governing Law</h2>
      <p>
        These terms are governed by <strong>Swedish law</strong>. EU consumers may submit disputes to
        the <a href="https://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer">EU Online Dispute Resolution platform</a>.
      </p>
    </LegalPage>
  );
}

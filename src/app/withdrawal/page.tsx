import type { Metadata } from "next";
import LegalPage from "@/components/pages/LegalPage";

export const metadata: Metadata = {
  title: "Right of Withdrawal",
  description: "Pedral Watches right of withdrawal — your 14-day cooling-off period under EU law.",
  alternates: { canonical: "/withdrawal" },
};

export default function WithdrawalPage() {
  return (
    <LegalPage eyebrow="Legal" title="Right of Withdrawal" updated="EU Consumer Rights">
      <h2>Your 14-Day Right</h2>
      <p>
        Under EU consumer law (Directive 2011/83/EU), you have the right to withdraw from a
        distance purchase within <strong>14 days</strong> of receiving the goods, without giving
        any reason.
      </p>

      <h2>How to Exercise Your Right</h2>
      <ol>
        <li>
          Email <a href="mailto:info@pedral.eu">info@pedral.eu</a> with your order number and a
          clear statement that you wish to withdraw.
        </li>
        <li>
          Return the watch in its original packaging, unworn and with all tags attached, within
          14 days of your withdrawal notice.
        </li>
        <li>
          We will issue a full refund, including standard shipping costs, within 14 days of
          receiving the returned item.
        </li>
      </ol>

      <h2>Exceptions</h2>
      <p>The right of withdrawal does not apply to:</p>
      <ul>
        <li>Made-to-order items (custom Artefact dials, Triomphe Hebrew/Eastern Arabic editions)</li>
        <li>Goods that have been worn, damaged, or altered after delivery</li>
      </ul>

      <h2>Return Shipping</h2>
      <p>
        You are responsible for the cost of return shipping. We recommend using a tracked, insured
        service. Pedral is not liable for items lost or damaged during return transit.
      </p>

      <h2>Refund Method</h2>
      <p>
        Refunds are processed to the original payment method. Please allow 5–10 business days for
        the refund to appear on your statement.
      </p>
    </LegalPage>
  );
}

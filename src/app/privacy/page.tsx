import type { Metadata } from "next";
import LegalPage from "@/components/pages/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Pedral Watches privacy policy — how we collect, use, and protect your personal data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" updated="Last updated: February 2026">
      <h2>1. Who We Are</h2>
      <p>
        Pedral Watches is the trading name of <strong>[Legal Entity Name]</strong>, a company
        registered in Sweden. We are the data controller for personal data processed through
        our websites <strong>pedral.eu</strong> and <strong>shop.pedral.eu</strong>.
      </p>

      <h2>2. What Data We Collect & Why</h2>
      <p>We collect only the data necessary to fulfil our stated purposes:</p>
      <ul>
        <li><strong>Orders:</strong> Name, email, address, phone, order details — to process and deliver your order.</li>
        <li><strong>Newsletter:</strong> Email address — to send collection announcements (consent-based).</li>
        <li><strong>Contact forms:</strong> Name, email, message — to respond to enquiries.</li>
        <li><strong>Analytics:</strong> Anonymised IP, pages visited, device type — to improve our site (consent-based).</li>
      </ul>
      <p>We do <strong>not</strong> collect sensitive personal data or engage in automated profiling.</p>

      <h2>3. Your Rights Under GDPR</h2>
      <p>As a data subject within the EEA, you have the right to:</p>
      <ul>
        <li>Access, rectify, or erase your personal data</li>
        <li>Restrict or object to processing</li>
        <li>Data portability</li>
        <li>Withdraw consent at any time</li>
      </ul>
      <p>Email <a href="mailto:privacy@pedral.eu">privacy@pedral.eu</a> to exercise any right. We respond within 30 days.</p>

      <h2>4. Data Retention</h2>
      <ul>
        <li><strong>Order records:</strong> 7 years (Swedish Bookkeeping Act)</li>
        <li><strong>Newsletter:</strong> Until you unsubscribe</li>
        <li><strong>Contact enquiries:</strong> 12 months after resolution</li>
      </ul>

      <h2>5. Security</h2>
      <p>We implement TLS/SSL encryption, access controls, and regular security updates. We never store full card details.</p>

      <h2>6. Contact</h2>
      <p>
        Email: <a href="mailto:privacy@pedral.eu">privacy@pedral.eu</a><br />
        Location: Stockholm, Sweden
      </p>
    </LegalPage>
  );
}

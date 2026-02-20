import type { Metadata } from "next";
import LegalPage from "@/components/pages/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Pedral Watches cookie policy — how we use cookies and similar technologies.",
  alternates: { canonical: "/cookies" },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Cookie Policy" updated="Last updated: February 2026">
      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website.
        They help us understand how you use our site and improve your experience.
      </p>

      <h2>2. Cookies We Use</h2>
      <h3>Essential Cookies</h3>
      <p>Required for the site to function. These cannot be disabled.</p>
      <ul>
        <li>Session management</li>
        <li>Shopping cart functionality (on shop.pedral.eu)</li>
        <li>Security and fraud prevention</li>
      </ul>

      <h3>Analytics Cookies (Consent Required)</h3>
      <p>Help us understand how visitors interact with our site.</p>
      <ul>
        <li>Pages visited and time spent</li>
        <li>Device type and browser</li>
        <li>Anonymised IP address</li>
      </ul>
      <p>We use privacy-respecting analytics. No data is shared with third-party advertisers.</p>

      <h2>3. Managing Cookies</h2>
      <p>
        You can control cookies through our cookie banner or your browser settings.
        Disabling essential cookies may affect site functionality.
      </p>

      <h2>4. Contact</h2>
      <p>
        Questions about our cookie policy? Email{" "}
        <a href="mailto:privacy@pedral.eu">privacy@pedral.eu</a>.
      </p>
    </LegalPage>
  );
}

import type { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact — Pedral",
  description: "Get in touch with Pedral. Based in Stockholm, Sweden.",
};

export default function ContactPage() {
  return <ContactContent />;
}

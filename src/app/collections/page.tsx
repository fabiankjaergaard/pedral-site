import type { Metadata } from "next";
import CollectionsContent from "@/components/pages/CollectionsContent";

export const metadata: Metadata = {
  title: "Collections — Pedral",
  description:
    "Explore all Pedral watch collections — from the iconic Okapi to the Grand Feu One-Eighty. Six collections, one vision.",
};

export default function CollectionsPage() {
  return <CollectionsContent />;
}

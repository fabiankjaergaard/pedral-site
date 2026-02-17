import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { collections, getCollection } from "@/lib/collections";
import CollectionDetail from "@/components/pages/CollectionDetail";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return { title: "Not Found — Pedral" };
  return {
    title: `${collection.name} — Pedral`,
    description: collection.description,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();
  return <CollectionDetail collection={collection} />;
}

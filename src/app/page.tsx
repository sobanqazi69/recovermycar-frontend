import type { Metadata } from "next";
import Header from "@/components/Header";
import QuoteForm from "@/components/QuoteForm";
import ContentSections from "@/components/ContentSections";

export const metadata: Metadata = {
  title: "Cheap Car Recovery UK | 24/7 Breakdown & Recovery Service",
  description:
    "Get instant quotes for cheap car recovery anywhere in the UK. " +
    "Nationwide 24/7 breakdown recovery. Fast, reliable, affordable. Get a quote now.",
  alternates: {
    canonical: "https://cheapcarsrecovery.co.uk",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <QuoteForm />
      <ContentSections />
    </>
  );
}

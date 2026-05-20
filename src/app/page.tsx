import type { Metadata } from "next";
import Header from "@/components/Header";
import QuoteForm from "@/components/QuoteForm";
import ContentSections from "@/components/ContentSections";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  alternates: {
    canonical: siteConfig.url,
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

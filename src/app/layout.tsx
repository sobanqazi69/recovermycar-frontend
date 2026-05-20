import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.defaultDescription,
  keywords: siteConfig.keywords,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.ogTitle,
    description: siteConfig.ogDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.defaultDescription,
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday", "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "£",
  knowsAbout: [
    "Car Recovery",
    "Breakdown Recovery",
    "Vehicle Towing",
    "Accident Recovery",
    "24 Hour Recovery",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

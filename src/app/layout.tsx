import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Cheap Car Recovery UK | 24/7 Breakdown & Recovery Service",
    template: "%s | Cheap Car Recovery UK",
  },
  description:
    "Get instant quotes for cheap car recovery anywhere in the UK. Nationwide 24/7 breakdown recovery. Fast, reliable, affordable. Get a quote now.",
  keywords: [
    "cheap car recovery",
    "cheapest car recovery UK",
    "car breakdown recovery",
    "24 hour car recovery UK",
    "car recovery near me",
    "breakdown recovery service",
  ],
  metadataBase: new URL("https://cheapcarsrecovery.co.uk"),
  alternates: {
    canonical: "https://cheapcarsrecovery.co.uk",
  },
  openGraph: {
    title: "Cheap Car Recovery UK | 24/7 Breakdown Service",
    description:
      "Nationwide cheap car recovery. Get instant fixed-price quotes online.",
    url: "https://cheapcarsrecovery.co.uk",
    siteName: "Cheap Car Recovery",
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
  name: "Cheap Car Recovery",
  url: "https://cheapcarsrecovery.co.uk",
  description:
    "Nationwide cheap car recovery and 24/7 breakdown service across the UK. Instant online quotes with fixed pricing.",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
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

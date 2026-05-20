import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { cities } from "@/lib/cities";
import Header from "@/components/Header";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: `Car Recovery UK — All Areas | ${siteConfig.name}`,
  description: `Find car recovery in your area. ${siteConfig.name} covers ${cities.length}+ UK cities with 24/7 breakdown recovery. Instant fixed-price quotes online.`,
  alternates: { canonical: `${siteConfig.url}/car-recovery` },
  openGraph: {
    title: `Car Recovery UK — All Areas | ${siteConfig.name}`,
    description: `${siteConfig.name} covers ${cities.length}+ UK cities. 24/7 breakdown recovery with instant online quotes.`,
    url: `${siteConfig.url}/car-recovery`,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Car Recovery UK — All Areas | ${siteConfig.name}`,
    description: `${siteConfig.name} covers ${cities.length}+ UK cities. 24/7 breakdown recovery with instant online quotes.`,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Car Recovery", item: `${siteConfig.url}/car-recovery` },
  ],
};

export default function CarRecoveryHubPage() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <QuoteForm />

      <main style={{ background: "#ffffff" }}>
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 0" }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: "#111111", marginBottom: 6, borderBottom: "3px solid #FF8A00", paddingBottom: 12, display: "inline-block" }}>
            Car Recovery UK — Find Recovery Near You
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#444", marginTop: 16 }}>
            {siteConfig.name} covers {cities.length}+ cities and towns across the United Kingdom. Select your city below to see local recovery options, or use the quote form above for an instant fixed-price quote sent straight to your phone.
          </p>
        </section>

        <section style={{ maxWidth: 860, margin: "0 auto", padding: "30px 20px 40px" }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 20 }}>
            Car Recovery by City
          </h2>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
            {cities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/car-recovery/${city.slug}`}
                  style={{
                    display: "block",
                    background: "#fff8f0",
                    border: "1px solid #ffe0b2",
                    borderLeft: "4px solid #FF8A00",
                    padding: "12px 16px",
                    borderRadius: 4,
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#111",
                    textDecoration: "none",
                  }}
                >
                  Car Recovery {city.name}
                  <span style={{ display: "block", fontSize: 12, fontWeight: 400, color: "#666", marginTop: 2 }}>
                    {city.region}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

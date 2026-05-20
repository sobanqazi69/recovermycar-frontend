import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Header from "@/components/Header";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description: `${siteConfig.name} connects drivers with local recovery agents across the UK. Learn about our network, how we work, and why thousands of drivers trust us every year.`,
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: { title: `About ${siteConfig.name}`, description: `Connecting UK drivers with local recovery agents. Instant fixed-price quotes, 24/7.`, url: `${siteConfig.url}/about`, siteName: siteConfig.name, locale: "en_GB", type: "website" },
};

const stats = [
  { value: `${siteConfig.reviewCount}+`, label: "Customer Reviews" },
  { value: siteConfig.ratingValue, label: "Average Rating" },
  { value: "50+", label: "UK Cities Covered" },
  { value: "24/7", label: "Always Available" },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "About", item: `${siteConfig.url}/about` },
  ],
};

export default function Page() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <QuoteForm />
      <main style={{ background: "#ffffff" }}>
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 0" }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: "#111111", marginBottom: 6, borderBottom: "3px solid #FF8A00", paddingBottom: 12, display: "inline-block" }}>
            About {siteConfig.name}
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#444", marginTop: 16 }}>
            {siteConfig.name} connects drivers across the UK with a nationwide network of professional, fully insured recovery agents. Our platform lets you get an instant fixed-price quote online — no phone calls, no waiting on hold, no negotiation. Just enter your details, receive your price by SMS, and your nearest agent is on the way.
          </p>
        </section>

        <section style={{ background: "#f8f8f8", borderTop: "1px solid #eee", borderBottom: "1px solid #eee", padding: "30px 20px", margin: "30px 0" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 20 }}>
              {stats.map(({ value, label }) => (
                <li key={label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 36, fontWeight: 900, color: "#FF8A00" }}>{value}</div>
                  <div style={{ fontSize: 14, color: "#555", marginTop: 4, fontWeight: 600 }}>{label}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px 30px" }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 12 }}>How It Works</h2>
          <ol style={{ paddingLeft: 20, fontSize: 15, lineHeight: 2.2, color: "#444" }}>
            <li>Enter your breakdown location, destination, vehicle registration, and phone number</li>
            <li>Our system calculates the fixed price based on distance and vehicle type</li>
            <li>You receive a quote by free SMS — no commitment required to view it</li>
            <li>Accept the quote and the nearest available agent is dispatched to you</li>
            <li>Pay on completion — card or cash</li>
          </ol>
        </section>

        <section style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px 30px", borderTop: "1px solid #eee", paddingTop: 30 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 12 }}>Our Recovery Network</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#444" }}>
            Our agents operate across 50+ UK cities and towns — covering all major motorways, urban centres, and many rural areas. Every agent in our network is fully insured and operates professional recovery vehicles equipped to handle cars, vans, 4x4s, and electric vehicles. Whether you break down in central London or on a quiet country road in Scotland, there is an agent in our network close to you.
          </p>
        </section>

        <section style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px 30px", borderTop: "1px solid #eee", paddingTop: 30 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 12 }}>Why Fixed Pricing?</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#444" }}>
            Traditional recovery companies often quote vague prices over the phone and add charges at the roadside. We believe you should know exactly what you're paying before an agent even starts their engine. Our transparent fixed-price model means no surprises, no negotiation, and no anxiety about cost when you're already having a stressful day. The price in your SMS is the price you pay — full stop.
          </p>
        </section>
      </main>
    </>
  );
}

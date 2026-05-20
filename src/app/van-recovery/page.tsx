import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Header from "@/components/Header";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: `Van Recovery UK | 24/7 Breakdown & Recovery Service | ${siteConfig.name}`,
  description: `Van broken down? ${siteConfig.name} provides 24/7 van recovery across the UK. All van sizes covered. Instant fixed-price quotes. Nationwide coverage.`,
  alternates: { canonical: `${siteConfig.url}/van-recovery` },
  openGraph: {
    title: `Van Recovery UK | 24/7 Breakdown Service`,
    description: `24/7 van recovery across the UK. All sizes covered. Instant fixed-price quotes.`,
    url: `${siteConfig.url}/van-recovery`,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `Van Recovery UK | ${siteConfig.name}`, description: `24/7 van recovery. All sizes. Instant fixed-price quotes.` },
};

const faqItems = [
  { q: "Do you recover all sizes of van?", a: "We recover small vans (e.g. Ford Transit Connect), medium vans (Ford Transit, Mercedes Sprinter), and large panel vans. When you enter your vehicle registration in the quote form, we automatically check the vehicle weight class and ensure the correct recovery vehicle is dispatched." },
  { q: "Can you recover a van with a load inside?", a: "Yes, our recovery vehicles can transport loaded vans. However, very heavy or oversized loads may require specialist handling — please mention this in your quote request so we can ensure the right equipment is sent." },
  { q: "Is van recovery more expensive than car recovery?", a: "Van recovery prices depend on vehicle weight and distance. Heavier vans typically cost slightly more than cars due to the equipment required. Use our instant quote form for an accurate fixed price based on your specific van and journey." },
  { q: "Do you recover vans on motorways and dual carriageways?", a: "Yes. We recover vans from all road types including motorways, dual carriageways, A-roads, and smaller local roads. Motorway van recovery is treated as our highest priority." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Van Recovery", item: `${siteConfig.url}/van-recovery` },
  ],
};

export default function Page() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <QuoteForm />
      <main style={{ background: "#ffffff" }}>
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 0" }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: "#111111", marginBottom: 6, borderBottom: "3px solid #FF8A00", paddingBottom: 12, display: "inline-block" }}>
            Van Recovery UK
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#444", marginTop: 16 }}>
            A van breakdown can bring your business to a halt — whether you're a sole trader, delivery driver, or fleet operator. Our 24/7 van recovery service covers all van types and sizes across the whole of the UK. From a small Transit Connect to a large Sprinter or Luton van, we have the right recovery vehicle to get you moving again. Use the instant quote form above for a fixed price sent straight to your phone.
          </p>
        </section>
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "30px 20px", borderTop: "1px solid #eee" }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 12 }}>Vans We Recover</h2>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
            {["Ford Transit", "Ford Transit Connect", "Mercedes Sprinter", "Volkswagen Transporter", "Vauxhall Vivaro", "Renault Trafic", "Citroën Dispatch", "Peugeot Expert", "Fiat Ducato", "Luton Box Vans"].map((v) => (
              <li key={v} style={{ background: "#fff8f0", border: "1px solid #ffe0b2", borderLeft: "4px solid #FF8A00", padding: "10px 14px", borderRadius: 4, fontSize: 14, fontWeight: 600, color: "#333" }}>{v}</li>
            ))}
          </ul>
        </section>
        <section style={{ background: "#f8f8f8", borderTop: "1px solid #eee", borderBottom: "1px solid #eee", padding: "30px 20px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 12 }}>Why Van Recovery Matters for Your Business</h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#444" }}>
              Every minute a van is off the road costs your business money. Our instant quote system means no waiting on hold — you get a fixed price by SMS within seconds and your agent is dispatched immediately. We prioritise commercial vehicle breakdowns and aim to minimise your downtime. All agents are fully insured and operate professional equipment suitable for all van classes.
            </p>
          </div>
        </section>
        <section style={{ background: "#f8f8f8", borderTop: "1px solid #eee", padding: "30px 20px 40px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 20 }}>Frequently Asked Questions — Van Recovery</h2>
            {faqItems.map(({ q, a }) => (
              <div key={q} style={{ marginBottom: 20 }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#111", marginBottom: 8 }}>{q}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "#444" }}>{a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Header from "@/components/Header";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: `Cheap Breakdown Recovery UK | 24/7 Roadside Assistance | ${siteConfig.name}`,
  description: `Car broken down? Get cheap breakdown recovery anywhere in the UK. ${siteConfig.name} provides 24/7 roadside assistance — Birmingham, London, Manchester & beyond. Fixed prices, no call-out fees.`,
  keywords: [
    "cheap breakdown recovery",
    "cheap breakdown recovery UK",
    "breakdown recovery UK",
    "breakdown recovery near me",
    "cheap car breakdown recovery",
    "affordable breakdown recovery",
    "cheap breakdown recovery Birmingham",
    "cheap breakdown recovery London",
    "cheap breakdown recovery Manchester",
    "24 hour breakdown recovery",
    "roadside assistance UK",
    "cheap roadside assistance",
    "car breakdown near me",
    "cheap car breakdown near me",
    "vehicle breakdown recovery UK",
  ],
  alternates: { canonical: `${siteConfig.url}/breakdown-recovery` },
  openGraph: {
    title: `Cheap Breakdown Recovery UK | 24/7 Roadside Assistance`,
    description: `Cheap 24/7 breakdown recovery across the UK. Fixed prices, no call-out fees. Instant quotes.`,
    url: `${siteConfig.url}/breakdown-recovery`,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `Cheap Breakdown Recovery UK | ${siteConfig.name}`, description: `Cheap 24/7 breakdown recovery. Fixed prices. Instant SMS quotes.` },
};

const faqItems = [
  { q: "What types of breakdown do you cover?", a: "We cover all common breakdown types including flat batteries, flat tyres, engine failure, overheating, fuel errors (putting the wrong fuel in), mechanical faults, and electrical failures. If your car won't start or can't be driven safely, we can recover it." },
  { q: "Do you offer roadside repair or just towing?", a: "Our service primarily covers recovery and towing. If a simple roadside fix resolves your breakdown (such as a jump start or tyre change), our agent will assist where possible. For complex mechanical repairs, we'll transport your vehicle to your chosen garage." },
  { q: "What if I've put the wrong fuel in my car?", a: "Do not start or attempt to move the vehicle. Contact us immediately. We can arrange recovery to a fuel drain specialist who can drain and flush the tank. The sooner you act, the better — misfuelling causes serious damage if the engine is run." },
  { q: "Is there a call-out fee on top of the recovery price?", a: "No. Our fixed-price quotes include everything — there are no call-out fees, fuel surcharges, or hidden extras. The price you receive by SMS is the price you pay." },
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
    { "@type": "ListItem", position: 2, name: "Breakdown Recovery", item: `${siteConfig.url}/breakdown-recovery` },
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
          <h1 style={{ fontSize: 32, fontWeight: 800, color: "#111111", marginBottom: 6, borderBottom: "3px solid #fe8601", paddingBottom: 12, display: "inline-block" }}>
            Breakdown Recovery UK
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#444", marginTop: 16 }}>
            A car breakdown can happen anywhere, at any time. Our nationwide breakdown recovery service operates 24 hours a day, 365 days a year — covering every UK postcode from the Scottish Highlands to Cornwall. No annual membership, no subscription fees. Just an instant fixed-price quote when you need it, and a professional recovery agent dispatched straight to you.
          </p>
        </section>
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "30px 20px", borderTop: "1px solid #eee" }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 12 }}>Common Breakdown Causes We Cover</h2>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
            {["Flat or Dead Battery", "Flat Tyre", "Engine Failure", "Overheating", "Wrong Fuel / Misfuel", "Electrical Fault", "Clutch Failure", "Gearbox Problem", "Fuel Pump Failure", "Starter Motor Fault"].map((c) => (
              <li key={c} style={{ background: "#fff8f0", border: "1px solid #ffe0b2", borderLeft: "4px solid #fe8601", padding: "10px 14px", borderRadius: 4, fontSize: 14, fontWeight: 600, color: "#333" }}>{c}</li>
            ))}
          </ul>
        </section>
        <section style={{ background: "#f8f8f8", borderTop: "1px solid #eee", borderBottom: "1px solid #eee", padding: "30px 20px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 12 }}>How Our Breakdown Recovery Works</h2>
            <ol style={{ paddingLeft: 20, fontSize: 15, lineHeight: 2.2, color: "#444" }}>
              <li>Enter your collection address, destination, vehicle details, and phone number in the quote form above</li>
              <li>Receive your fixed-price quote by SMS within seconds — no negotiation, no hidden extras</li>
              <li>Confirm the quote and your nearest recovery agent is dispatched immediately</li>
              <li>Your agent arrives, loads your vehicle safely, and transports it to your chosen destination</li>
              <li>Pay on completion — card or cash accepted</li>
            </ol>
          </div>
        </section>
        <section style={{ background: "#f8f8f8", borderTop: "1px solid #eee", padding: "30px 20px 40px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 20 }}>Frequently Asked Questions — Breakdown Recovery</h2>
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

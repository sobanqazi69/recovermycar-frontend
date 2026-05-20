import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Header from "@/components/Header";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: `Motorway Car Recovery UK | 24/7 Emergency Breakdown | ${siteConfig.name}`,
  description: `Broken down on a UK motorway? ${siteConfig.name} provides 24/7 motorway car recovery across all UK motorways. Instant fixed-price quotes, fast response.`,
  alternates: { canonical: `${siteConfig.url}/motorway-recovery` },
  openGraph: {
    title: `Motorway Car Recovery UK | 24/7 Emergency Breakdown`,
    description: `24/7 motorway recovery across all UK motorways. Instant fixed-price quotes, fast response.`,
    url: `${siteConfig.url}/motorway-recovery`,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `Motorway Car Recovery UK | ${siteConfig.name}`, description: `24/7 motorway recovery. Instant fixed-price quotes.` },
};

const faqItems = [
  { q: "What should I do if I break down on a motorway?", a: "Pull onto the hard shoulder as far left as possible with your wheels turned left. Switch on your hazard lights. Exit the vehicle via the passenger-side door and stand behind the Armco barrier, away from live lanes. Call us immediately using the instant quote form or phone number above — do not attempt to fix the vehicle yourself on the motorway." },
  { q: "Is motorway recovery more expensive than normal recovery?", a: "Our fixed-price quotes are based on distance and vehicle type, not road type. You get the same transparent pricing for a motorway breakdown as you would for any other location — no emergency surcharges." },
  { q: "How quickly can you reach me on a motorway?", a: "Motorway breakdowns are treated as our highest priority. Response times vary by location and time of day, but our nationwide network means an agent is always close by. Once your quote is confirmed, your agent is dispatched immediately." },
  { q: "Can you recover my car from a smart motorway with no hard shoulder?", a: "Yes. On smart motorways, pull into an Emergency Refuge Area (ERA) if available. Activate your hazard lights and use the SOS phone in the ERA, or contact us immediately. Stay in the ERA until help arrives." },
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
    { "@type": "ListItem", position: 2, name: "Motorway Recovery", item: `${siteConfig.url}/motorway-recovery` },
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
            Motorway Car Recovery UK
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#444", marginTop: 16 }}>
            Breaking down on a UK motorway is one of the most stressful driving situations you can face. Our nationwide recovery network covers every UK motorway — from the M1 and M6 to the M25 and M90 in Scotland — providing rapid professional recovery 24 hours a day, every day of the year. Get your instant fixed-price quote above and we'll dispatch the nearest available agent to you.
          </p>
        </section>
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "30px 20px", borderTop: "1px solid #eee" }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 12 }}>Motorways We Cover</h2>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: 10 }}>
            {["M1","M2","M3","M4","M5","M6","M6 Toll","M8","M9","M11","M18","M20","M23","M25","M27","M40","M42","M56","M60","M62","M74","M77","M90","A1(M)","A3(M)","A74(M)"].map((m) => (
              <li key={m} style={{ background: "#fff8f0", border: "1px solid #ffe0b2", borderLeft: "4px solid #FF8A00", padding: "8px 12px", borderRadius: 4, fontSize: 14, fontWeight: 700, color: "#333" }}>{m}</li>
            ))}
          </ul>
        </section>
        <section style={{ background: "#f8f8f8", borderTop: "1px solid #eee", borderBottom: "1px solid #eee", padding: "30px 20px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 12 }}>Motorway Safety — What to Do</h2>
            <ol style={{ paddingLeft: 20, fontSize: 15, lineHeight: 2, color: "#444" }}>
              <li>Pull onto the hard shoulder as far left as possible, wheels turned left</li>
              <li>Switch on your hazard warning lights immediately</li>
              <li>Exit the vehicle via the passenger-side door only</li>
              <li>Stand behind the Armco safety barrier, away from live lanes</li>
              <li>Keep pets in the vehicle and do not attempt repairs yourself</li>
              <li>Call us using the form above or our phone number — we'll dispatch help immediately</li>
            </ol>
          </div>
        </section>
        <section style={{ background: "#f8f8f8", borderTop: "1px solid #eee", padding: "30px 20px 40px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 20 }}>Frequently Asked Questions — Motorway Recovery</h2>
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

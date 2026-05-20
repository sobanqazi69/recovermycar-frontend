import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Header from "@/components/Header";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: siteConfig.hour24Title,
  description: siteConfig.hour24Desc,
  alternates: { canonical: `${siteConfig.url}/24-hour-car-recovery` },
  openGraph: {
    title: siteConfig.hour24Title,
    description: siteConfig.hour24Desc,
    url: `${siteConfig.url}/24-hour-car-recovery`,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.hour24Title,
    description: siteConfig.hour24Desc,
  },
};

const faqItems = [
  {
    q: "Is car recovery really available 24 hours a day?",
    a: "Yes. Our network of recovery agents operates around the clock — including weekends and bank holidays. Whether it's 2am on a Sunday or rush hour on a Friday, you can get an instant quote and have a recovery agent dispatched to you.",
  },
  {
    q: "How do I get emergency 24 hour car recovery?",
    a: "Use the instant quote form at the top of this page. Enter your location, destination, and vehicle details. Your fixed price is sent by free SMS and a local agent is dispatched — no waiting on hold, no call centres.",
  },
  {
    q: "Is overnight car recovery more expensive?",
    a: "Our fixed-price quotes are based on distance and vehicle type, not time of day. You'll see your exact price before you commit — so there are no overnight surcharges or hidden fees.",
  },
  {
    q: "What if I break down on a motorway at night?",
    a: "Move to the hard shoulder if safe to do so, exit the vehicle via the passenger side, stand behind the barrier, and use our quote form or call us. We cover all UK motorways 24/7 and treat motorway breakdowns as highest priority.",
  },
];

const jsonLd = {
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
    { "@type": "ListItem", position: 2, name: "24 Hour Car Recovery", item: `${siteConfig.url}/24-hour-car-recovery` },
  ],
};

export default function Page() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <QuoteForm />

      <main style={{ background: "#ffffff" }}>
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 0" }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: "#111111", marginBottom: 6, borderBottom: "3px solid #FF8A00", paddingBottom: 12, display: "inline-block" }}>
            24 Hour Car Recovery UK
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#444", marginTop: 16 }}>
            Breaking down is never convenient — but it's even worse at night, on a weekend, or during a bank holiday when most services are closed. Our 24 hour car recovery network operates across the whole of the UK, every single day of the year. Get an instant fixed-price quote any time using the form above, and a local recovery agent will be dispatched directly to you.
          </p>
        </section>

        <section style={{ maxWidth: 860, margin: "0 auto", padding: "30px 20px", borderTop: "1px solid #eee" }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 12 }}>
            Why Our 24/7 Service Stands Out
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#444" }}>
            Most recovery companies operate during business hours and charge a premium for out-of-hours call-outs. We don't. Our fixed pricing applies 24 hours a day, 7 days a week — no overnight surcharges, no weekend fees. Our nationwide agent network means there's always someone close to you, whether you're in central London at midnight or on a rural road in Scotland at 4am.
          </p>
        </section>

        <section style={{ background: "#f8f8f8", borderTop: "1px solid #eee", borderBottom: "1px solid #eee", padding: "30px 20px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 12 }}>
              24/7 Recovery Services We Offer
            </h2>
            <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
              {[
                "Emergency Breakdown Recovery",
                "Motorway & Dual Carriageway Recovery",
                "Accident Recovery",
                "A to B Transportation",
                "Jump Start Service",
                "Tyre Change Assistance",
                "Mobile EV Charging",
                "Auction & Dealership Collection",
              ].map((service) => (
                <li key={service} style={{ background: "#fff8f0", border: "1px solid #ffe0b2", borderLeft: "4px solid #FF8A00", padding: "10px 14px", borderRadius: 4, fontSize: 14, fontWeight: 600, color: "#333" }}>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section style={{ maxWidth: 860, margin: "0 auto", padding: "30px 20px" }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 12 }}>
            Staying Safe When You Break Down at Night
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#444" }}>
            If you break down after dark, keep your hazard lights on at all times. On a motorway, pull onto the hard shoulder, exit via the passenger door, and stand well behind the barrier — never stand between your vehicle and live lanes. If it's safe to do so, use the emergency phones on the hard shoulder, or use our online quote form to dispatch a recovery agent immediately. Keep warm, keep your phone charged, and wait in a safe position away from traffic.
          </p>
        </section>

        <section style={{ background: "#f8f8f8", borderTop: "1px solid #eee", padding: "30px 20px 40px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 20 }}>
              Frequently Asked Questions — 24 Hour Car Recovery
            </h2>
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

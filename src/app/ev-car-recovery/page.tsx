import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Header from "@/components/Header";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: `Electric Car Recovery UK | EV Breakdown Service | ${siteConfig.name}`,
  description: `Electric car broken down or out of charge? ${siteConfig.name} provides specialist EV recovery across the UK. Safe flatbed towing, mobile charging. Instant quotes.`,
  alternates: { canonical: `${siteConfig.url}/ev-car-recovery` },
  openGraph: {
    title: `Electric Car Recovery UK | EV Breakdown Service`,
    description: `Specialist EV recovery across the UK. Safe flatbed towing, mobile charging. Instant fixed-price quotes.`,
    url: `${siteConfig.url}/ev-car-recovery`,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `Electric Car Recovery UK | ${siteConfig.name}`, description: `Specialist EV recovery. Safe flatbed towing. Instant quotes.` },
};

const faqItems = [
  { q: "Can electric cars be towed like normal cars?", a: "Most electric vehicles cannot be towed with their wheels on the ground as this can damage the electric motor and regenerative braking system. EVs should always be transported on a flatbed truck or low-loader. Our agents use flatbed vehicles for all EV recoveries." },
  { q: "What happens if my electric car runs out of charge?", a: "If you run out of charge and cannot reach a charging point, we can recover your EV to the nearest compatible charging location or to your home or garage. We also offer mobile EV charging for supported vehicles — ask about this option when getting your quote." },
  { q: "Do you recover all electric vehicle brands?", a: "Yes. We recover all major EV brands including Tesla, Nissan Leaf, BMW i-series, Volkswagen ID range, Audi e-tron, Hyundai Ioniq, Kia EV range, MG ZS EV, Renault Zoe, and all other passenger EVs sold in the UK." },
  { q: "Is EV recovery more expensive than petrol/diesel recovery?", a: "EV recovery prices are based on distance and vehicle weight — the same factors as any other vehicle. The flatbed requirement is standard for most EVs. Use our instant quote form for an accurate fixed price for your specific vehicle." },
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
    { "@type": "ListItem", position: 2, name: "EV Car Recovery", item: `${siteConfig.url}/ev-car-recovery` },
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
            Electric Car Recovery UK
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#444", marginTop: 16 }}>
            Electric vehicles require specialist recovery — most EVs cannot be towed with wheels on the ground without risking serious damage to the motor or battery system. Our EV-capable recovery agents use flatbed trucks and low-loaders to safely transport electric cars to your chosen destination. Whether your battery is flat, your EV has developed a fault, or you've been in an accident, we provide professional EV recovery across the whole of the UK.
          </p>
        </section>
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "30px 20px", borderTop: "1px solid #eee" }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 12 }}>EVs We Recover</h2>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
            {["Tesla Model 3/Y/S/X", "Nissan Leaf", "BMW i3/i4/iX", "VW ID.3/ID.4", "Audi e-tron/Q4", "Hyundai Ioniq 5/6", "Kia EV6/EV9", "MG ZS EV", "Renault Zoe", "Polestar 2/3", "Ford Mustang Mach-E", "Vauxhall Mokka-e"].map((v) => (
              <li key={v} style={{ background: "#fff8f0", border: "1px solid #ffe0b2", borderLeft: "4px solid #FF8A00", padding: "10px 14px", borderRadius: 4, fontSize: 14, fontWeight: 600, color: "#333" }}>{v}</li>
            ))}
          </ul>
        </section>
        <section style={{ background: "#f8f8f8", borderTop: "1px solid #eee", borderBottom: "1px solid #eee", padding: "30px 20px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 12 }}>EV Recovery vs Standard Recovery</h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#444" }}>
              Unlike petrol and diesel cars which can often be wheel-lifted for short distances, electric vehicles with permanent-magnet motors generate electricity when the wheels turn — meaning towing with wheels down can feed voltage back into the system and cause damage. All our EV recoveries use flatbed transport. If your EV is recovered to a location without a charger, let us know and we can advise on the nearest compatible charging point for your vehicle.
            </p>
          </div>
        </section>
        <section style={{ background: "#f8f8f8", borderTop: "1px solid #eee", padding: "30px 20px 40px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 20 }}>Frequently Asked Questions — EV Recovery</h2>
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

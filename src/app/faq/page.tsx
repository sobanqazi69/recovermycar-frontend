import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: `Frequently Asked Questions | ${siteConfig.name}`,
  description: `Common questions about ${siteConfig.name}'s car recovery service — pricing, coverage, response times, payment, and more. Get answers instantly.`,
  alternates: { canonical: `${siteConfig.url}/faq` },
  openGraph: { title: `FAQ | ${siteConfig.name}`, description: `Common questions about our UK car recovery service.`, url: `${siteConfig.url}/faq`, siteName: siteConfig.name, locale: "en_GB", type: "website" },
};

const faqs = [
  { q: "How do I get a car recovery quote?", a: "Use the instant quote form on our homepage. Enter your collection address, delivery address, recovery type, vehicle registration, and mobile number. Your fixed-price quote is sent by free SMS within seconds — no phone calls, no waiting on hold." },
  { q: "How much does car recovery cost?", a: "Our prices are based on distance and vehicle type. There are no call-out fees, no hidden charges, and no overnight surcharges. The fixed price you receive by SMS is exactly what you pay." },
  { q: "How quickly will you arrive?", a: "Response times depend on your exact location and current agent availability. Our nationwide network means there is usually an agent close by. Once you accept your SMS quote, your agent is dispatched immediately." },
  { q: "Do you cover the whole UK?", a: "Yes. We cover England, Scotland, Wales, and Northern Ireland. Our agent network spans all major cities and most rural areas. Use the quote form to check coverage at your exact location." },
  { q: "Are you available 24 hours a day?", a: "Yes, 24 hours a day, 7 days a week, including weekends and bank holidays. There are no out-of-hours surcharges — you get the same fixed price whatever time of day you break down." },
  { q: "What types of vehicles do you recover?", a: "We recover cars, vans, 4x4s, and most light vehicles. Van and 4x4 recovery may cost slightly more due to vehicle weight. Enter your vehicle registration when quoting and we'll match you with the right recovery vehicle." },
  { q: "Do you recover electric vehicles (EVs)?", a: "Yes. We use flatbed trucks for all EV recoveries as most electric cars cannot be towed with wheels on the ground. Enter your EV registration in the quote form for accurate pricing." },
  { q: "Can you recover my car on a motorway?", a: "Yes. Motorway breakdowns are treated as our highest priority. Pull onto the hard shoulder if safe to do so, exit via the passenger side, and stand behind the Armco barrier while you contact us." },
  { q: "Do you recover vehicles after accidents?", a: "Yes. Our agents have flatbed and wheel-lift trucks capable of recovering accident-damaged vehicles that cannot be driven. Please ensure the scene is safe and any injuries have been reported to emergency services before arranging recovery." },
  { q: "Where can you take my car?", a: "Anywhere you choose — your home, a specific garage, a bodyshop, a dealership, or any other address in the UK. Just enter your preferred delivery address in the quote form." },
  { q: "How do I pay?", a: "Payment is made on completion of the recovery. Most agents accept both card and cash payment. Your fixed price is confirmed before the agent is dispatched, so there are no surprises." },
  { q: "Is there a call-out fee?", a: "No. Our quoted price is fully inclusive — no call-out fee, no fuel surcharge, no mileage extras. What you see in your SMS is what you pay." },
  { q: "What if I put the wrong fuel in my car?", a: "Do not start the engine. Contact us immediately to arrange recovery to a fuel drain specialist. Acting quickly minimises the risk of engine damage from misfuelling." },
  { q: "Can you recover a van with a load in it?", a: "Yes, within standard weight limits. If your van is carrying a particularly heavy or oversized load, please mention this when requesting your quote so we can send the appropriate vehicle." },
  { q: "Do all your agents have insurance?", a: "Yes. All recovery agents in our network are fully insured to recover your vehicle. Your car is in safe, professional hands throughout the recovery process." },
  { q: "What if I break down abroad or in Northern Ireland?", a: "Our primary coverage area is Great Britain. For Northern Ireland coverage please confirm when requesting your quote. We do not currently cover European breakdowns." },
  { q: "Can I book a recovery in advance for a non-urgent vehicle move?", a: "Yes. Our A-to-B transportation service is available for pre-planned vehicle moves — such as auction collections, dealership deliveries, or transporting a non-running vehicle. Use the quote form with your preferred date and time." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
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
    { "@type": "ListItem", position: 2, name: "FAQ", item: `${siteConfig.url}/faq` },
  ],
};

export default function Page() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <main style={{ background: "#ffffff" }}>
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 60px" }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: "#111111", marginBottom: 6, borderBottom: "3px solid #fe8601", paddingBottom: 12, display: "inline-block" }}>
            Frequently Asked Questions
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#444", marginTop: 16, marginBottom: 40 }}>
            Everything you need to know about {siteConfig.name}'s car recovery service.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {faqs.map(({ q, a }) => (
              <div key={q} style={{ borderBottom: "1px solid #eee", paddingBottom: 24 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111", marginBottom: 10 }}>{q}</h2>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "#444", margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

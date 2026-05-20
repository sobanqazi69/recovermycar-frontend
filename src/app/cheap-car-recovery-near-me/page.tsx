import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Header from "@/components/Header";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: siteConfig.cheapNearMeTitle,
  description: siteConfig.cheapNearMeDesc,
  alternates: { canonical: `${siteConfig.url}/cheap-car-recovery-near-me` },
  openGraph: {
    title: siteConfig.cheapNearMeTitle,
    description: siteConfig.cheapNearMeDesc,
    url: `${siteConfig.url}/cheap-car-recovery-near-me`,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.cheapNearMeTitle,
    description: siteConfig.cheapNearMeDesc,
  },
};

const faqItems = [
  {
    q: "How do I find cheap car recovery near me?",
    a: "Use the quote form at the top of this page. Enter your current location, your destination, and vehicle details. Our system matches you with the nearest available recovery agent and sends you a fixed price by SMS — no negotiating, no hidden charges.",
  },
  {
    q: "Why are some local recovery companies expensive?",
    a: "Roadside recovery companies with physical call centres and large overhead costs typically charge more. Our model connects you directly with local independent recovery agents, cutting out the middleman and keeping prices low while maintaining professional standards.",
  },
  {
    q: "Is cheap car recovery reliable?",
    a: "Yes. All agents in our network are fully insured and operate professional recovery vehicles. Cheap doesn't mean low quality — it means we've optimised our process so you get competitive fixed prices without hidden fees.",
  },
  {
    q: "How long will a local recovery agent take to reach me?",
    a: "Response times depend on your exact location and current agent availability. Our nationwide network means there's usually a local agent close by. Once you get your SMS quote, your agent is dispatched immediately.",
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
    { "@type": "ListItem", position: 2, name: "Cheap Car Recovery Near Me", item: `${siteConfig.url}/cheap-car-recovery-near-me` },
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
            Cheap Car Recovery Near Me
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#444", marginTop: 16 }}>
            Broken down and searching for affordable car recovery close to you? Our nationwide network of independent recovery agents covers every corner of the UK — from major cities to rural towns. Use the instant quote form above to see your fixed price in seconds, with no call centres and no haggling. The cheapest quote for your exact location, sent straight to your phone.
          </p>
        </section>

        <section style={{ maxWidth: 860, margin: "0 auto", padding: "30px 20px", borderTop: "1px solid #eee" }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 12 }}>
            How We Find Local Recovery Near You
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#444" }}>
            When you enter your collection address, our system identifies the nearest available agents in our network and returns the most competitive fixed price for your journey. Because agents are local to your area, they reach you faster — and because they're independent operators, their prices are lower than national breakdown clubs or large recovery firms. You get the best of both worlds: fast local response at a low fixed price.
          </p>
        </section>

        <section style={{ background: "#f8f8f8", borderTop: "1px solid #eee", borderBottom: "1px solid #eee", padding: "30px 20px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 12 }}>
              Recovery Services Near You
            </h2>
            <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
              {[
                "Local Breakdown Recovery",
                "Accident Recovery",
                "A to B Transportation",
                "Jump Start Service",
                "Tyre Change Assistance",
                "Mobile EV Charging",
                "Motorway Recovery",
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
            Why Fixed Pricing Beats Calling Around
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#444" }}>
            When you're stranded, the last thing you want to do is ring multiple recovery companies and negotiate prices. Our instant quote system gives you a fixed, transparent price immediately — no call centres, no upselling, no waiting on hold. The price you see is the price you pay. If you're happy with the quote, your local agent is dispatched straight away.
          </p>
        </section>

        <section style={{ background: "#f8f8f8", borderTop: "1px solid #eee", padding: "30px 20px 40px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 20 }}>
              Frequently Asked Questions
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

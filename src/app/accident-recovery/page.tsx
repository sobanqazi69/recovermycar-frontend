import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Header from "@/components/Header";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: `Accident Recovery UK | Vehicle Recovery After Collision | ${siteConfig.name}`,
  description: `Involved in a road accident? ${siteConfig.name} provides professional accident and collision vehicle recovery across the UK. 24/7, instant quotes, fixed prices.`,
  alternates: { canonical: `${siteConfig.url}/accident-recovery` },
  openGraph: {
    title: `Accident Recovery UK | Vehicle Recovery After Collision`,
    description: `Professional accident vehicle recovery across the UK. 24/7, instant fixed-price quotes.`,
    url: `${siteConfig.url}/accident-recovery`,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `Accident Recovery UK | ${siteConfig.name}`, description: `Professional accident vehicle recovery. Instant fixed-price quotes.` },
};

const faqItems = [
  { q: "Do I need to wait for the police before calling a recovery company?", a: "You do not need police attendance before arranging recovery unless there are injuries or a disputed liability situation requiring a police report. If the road is blocked or there are injuries, call 999 first. Once the immediate situation is safe, you can arrange recovery of your vehicle." },
  { q: "Can you recover a car that has been in an accident and is not driveable?", a: "Yes. Our recovery vehicles are equipped to handle accident-damaged vehicles that cannot be driven. We use flatbed and wheel-lift trucks suitable for vehicles in various states — including those with airbag deployment, front-end damage, or damaged wheels." },
  { q: "Will my insurance company pay for accident recovery?", a: "Most comprehensive insurance policies cover accident recovery. Check your policy or call your insurer before arranging recovery if you want to claim the cost back. If you need to act quickly, you can pay directly and claim reimbursement from your insurer later." },
  { q: "Can you take my car to a specific bodyshop or garage after an accident?", a: "Yes. We offer A-to-B transportation to any destination you choose — your preferred bodyshop, insurer's approved repairer, or home. Just enter your delivery address when getting your quote." },
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
    { "@type": "ListItem", position: 2, name: "Accident Recovery", item: `${siteConfig.url}/accident-recovery` },
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
            Accident Recovery UK
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#444", marginTop: 16 }}>
            Being involved in a road accident is frightening enough without the added stress of not knowing how to get your vehicle recovered. Our professional accident recovery service operates 24/7 across the UK — we have the specialist vehicles and trained operators to recover damaged cars from any location, safely and efficiently. Use the instant quote form above to arrange recovery immediately.
          </p>
        </section>
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "30px 20px", borderTop: "1px solid #eee" }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 12 }}>What to Do After a Road Accident</h2>
          <ol style={{ paddingLeft: 20, fontSize: 15, lineHeight: 2, color: "#444" }}>
            <li>Check for injuries — call 999 if anyone is hurt</li>
            <li>Move to safety if possible — switch on hazard lights</li>
            <li>Do not admit liability at the scene</li>
            <li>Exchange insurance details, registration numbers, and contact information</li>
            <li>Take photos of the scene, damage, and any relevant road markings</li>
            <li>Contact your insurer to report the incident</li>
            <li>Arrange recovery of your vehicle using the form above</li>
          </ol>
        </section>
        <section style={{ background: "#f8f8f8", borderTop: "1px solid #eee", borderBottom: "1px solid #eee", padding: "30px 20px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 12 }}>Our Accident Recovery Vehicles</h2>
            <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
              {["Flatbed Tow Trucks", "Wheel-Lift Recovery Vehicles", "Low-Loader Transporters", "Heavy Recovery Trucks", "Motorcycle Recovery", "4x4 & SUV Recovery"].map((v) => (
                <li key={v} style={{ background: "#fff8f0", border: "1px solid #ffe0b2", borderLeft: "4px solid #FF8A00", padding: "10px 14px", borderRadius: 4, fontSize: 14, fontWeight: 600, color: "#333" }}>{v}</li>
              ))}
            </ul>
          </div>
        </section>
        <section style={{ background: "#f8f8f8", borderTop: "1px solid #eee", padding: "30px 20px 40px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 20 }}>Frequently Asked Questions — Accident Recovery</h2>
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

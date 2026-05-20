import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cities, getCityBySlug } from "@/lib/cities";
import Header from "@/components/Header";
import QuoteForm from "@/components/QuoteForm";

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  return {
    title: `Cheap Car Recovery ${city.name} | 24/7 Breakdown Service`,
    description: `Need cheap car recovery in ${city.name}? We cover all of ${city.name} & ${city.region} 24/7. Instant quotes, fixed prices, fast response.`,
    alternates: {
      canonical: `https://cheapcarsrecovery.co.uk/car-recovery-${city.slug}`,
    },
    openGraph: {
      title: `Cheap Car Recovery ${city.name} | 24/7 Breakdown Service`,
      description: `Affordable car recovery in ${city.name} & ${city.region}. Fixed prices, 24/7 availability, instant quotes online.`,
      url: `https://cheapcarsrecovery.co.uk/car-recovery-${city.slug}`,
      siteName: "Cheap Car Recovery",
      locale: "en_GB",
      type: "website",
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Cheap Car Recovery ${city.name}`,
    serviceType: "Car Recovery",
    description: city.description,
    areaServed: {
      "@type": "City",
      name: city.name,
      addressCountry: "GB",
    },
    provider: {
      "@type": "AutoRepair",
      name: "Cheap Car Recovery",
      url: "https://cheapcarsrecovery.co.uk",
    },
  };

  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <QuoteForm />

      <main style={{ background: "#ffffff" }}>
        {/* H1 */}
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 0" }}>
          <h1
            style={{
              fontSize: 32,
              fontWeight: 800,
              color: "#111111",
              marginBottom: 6,
              borderBottom: "3px solid #FF8A00",
              paddingBottom: 12,
              display: "inline-block",
            }}
          >
            Cheap Car Recovery in {city.name}
          </h1>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: "#444",
              marginTop: 16,
            }}
          >
            {city.intro}
          </p>
        </section>

        {/* Why Choose Us */}
        <section
          style={{
            maxWidth: 860,
            margin: "0 auto",
            padding: "30px 20px",
            borderTop: "1px solid #eee",
          }}
        >
          <h2
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#111",
              marginBottom: 12,
            }}
          >
            Why Choose Our {city.name} Recovery Service?
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#444" }}>
            {city.whyUs}
          </p>
        </section>

        {/* Areas Covered */}
        <section
          style={{
            background: "#f8f8f8",
            borderTop: "1px solid #eee",
            borderBottom: "1px solid #eee",
            padding: "30px 20px",
          }}
        >
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#111",
                marginBottom: 12,
              }}
            >
              Areas We Cover in {city.name}
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#444", marginBottom: 10 }}>
              We cover all {city.name} postcodes including{" "}
              <strong>{city.postcodes}</strong> and surrounding areas including{" "}
              {city.areas}.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#444" }}>
              Whether you break down in the city centre or on a quieter residential
              street on the outskirts, our network of local agents in {city.region}{" "}
              will reach you. All agents are fully insured and operate professional
              recovery vehicles suitable for cars, vans, and 4x4s.
            </p>
          </div>
        </section>

        {/* Services */}
        <section
          style={{
            maxWidth: 860,
            margin: "0 auto",
            padding: "30px 20px",
          }}
        >
          <h2
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#111",
              marginBottom: 16,
            }}
          >
            Car Recovery Services in {city.name}
          </h2>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 12,
            }}
          >
            {[
              "Breakdown Assistance",
              "Accident Recovery",
              "A to B Transportation",
              "Jump Start Service",
              "Tyre Change Assistance",
              "Mobile EV Charging",
              "Motorway Recovery",
              "Auction & Dealership Collection",
            ].map((service) => (
              <li
                key={service}
                style={{
                  background: "#fff8f0",
                  border: "1px solid #ffe0b2",
                  borderLeft: "4px solid #FF8A00",
                  padding: "10px 14px",
                  borderRadius: 4,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#333",
                }}
              >
                {service}
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section
          style={{
            background: "#f8f8f8",
            borderTop: "1px solid #eee",
            padding: "30px 20px 40px",
          }}
        >
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#111",
                marginBottom: 20,
              }}
            >
              Frequently Asked Questions — {city.name} Car Recovery
            </h2>

            <div style={{ marginBottom: 20 }}>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#111",
                  marginBottom: 8,
                }}
              >
                {city.faq1Q}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "#444" }}>
                {city.faq1A}
              </p>
            </div>

            <div style={{ marginBottom: 20 }}>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#111",
                  marginBottom: 8,
                }}
              >
                {city.faq2Q}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "#444" }}>
                {city.faq2A}
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#111",
                  marginBottom: 8,
                }}
              >
                How do I get a cheap car recovery quote in {city.name}?
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "#444" }}>
                Use the instant quote form at the top of this page. Enter your
                collection address in {city.name}, your destination, select your
                recovery type, add your vehicle registration and phone number.
                Your fixed price will be sent by free SMS — no phone calls needed.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

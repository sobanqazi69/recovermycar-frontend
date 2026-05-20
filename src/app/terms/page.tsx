import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description: `Terms and conditions for using ${siteConfig.name}'s car recovery service.`,
  alternates: { canonical: `${siteConfig.url}/terms` },
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <>
      <Header />
      <main style={{ background: "#ffffff" }}>
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 60px", fontSize: 15, lineHeight: 1.8, color: "#444" }}>
          <h1 style={{ fontSize: 30, fontWeight: 800, color: "#111", marginBottom: 6, borderBottom: "3px solid #FF8A00", paddingBottom: 12, display: "inline-block" }}>Terms of Service</h1>
          <p style={{ marginTop: 16, color: "#666" }}>Last updated: May 2025</p>

          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111", marginTop: 32, marginBottom: 8 }}>1. Service Description</h2>
          <p>{siteConfig.name} is an online platform that connects drivers requiring car recovery with independent recovery agents across the United Kingdom. We act as an intermediary — the recovery service itself is provided by independent operators in our agent network.</p>

          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111", marginTop: 32, marginBottom: 8 }}>2. Quotes and Pricing</h2>
          <p>Quotes provided via our platform are fixed-price and based on the information you supply (collection address, delivery address, vehicle type). Quotes are valid for 30 minutes. If your circumstances change after accepting a quote (e.g. different vehicle, different destination), additional charges may apply. We reserve the right to withdraw a quote if the information provided was materially inaccurate.</p>

          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111", marginTop: 32, marginBottom: 8 }}>3. Your Responsibilities</h2>
          <ul style={{ paddingLeft: 20 }}>
            <li>Provide accurate information when requesting a quote</li>
            <li>Ensure the vehicle to be recovered is accessible to the recovery agent</li>
            <li>Be present at the collection location or make alternative arrangements</li>
            <li>Notify us promptly if you no longer require recovery after accepting a quote</li>
            <li>Ensure vehicle keys and any necessary documentation are available</li>
          </ul>

          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111", marginTop: 32, marginBottom: 8 }}>4. Recovery Agent Conduct</h2>
          <p>Recovery agents in our network are independent contractors. While we require all agents to maintain appropriate insurance and professional standards, {siteConfig.name} is not liable for the actions or omissions of individual recovery agents. Any complaints about agent conduct should be directed to us and we will investigate promptly.</p>

          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111", marginTop: 32, marginBottom: 8 }}>5. Liability</h2>
          <p>To the fullest extent permitted by law, {siteConfig.name}'s liability for any claim arising from use of our service is limited to the amount paid for the specific recovery job in question. We are not liable for indirect, consequential, or economic losses. Nothing in these terms limits our liability for death or personal injury caused by negligence, or for fraudulent misrepresentation.</p>

          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111", marginTop: 32, marginBottom: 8 }}>6. Cancellation</h2>
          <p>You may cancel a recovery job after accepting a quote, but cancellation fees may apply if the agent has already been dispatched and is en route. Cancellation before dispatch is free of charge.</p>

          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111", marginTop: 32, marginBottom: 8 }}>7. Payment</h2>
          <p>Payment is due on completion of the recovery to the recovery agent directly. Accepted payment methods vary by agent and are typically card or cash. The fixed-price quote does not include any toll charges, ferry crossings, or other third-party costs that may be necessary to complete the recovery.</p>

          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111", marginTop: 32, marginBottom: 8 }}>8. Governing Law</h2>
          <p>These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>

          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111", marginTop: 32, marginBottom: 8 }}>9. Contact</h2>
          <p>Questions about these terms? Contact us at <a href={`tel:${siteConfig.phone}`} style={{ color: "#FF8A00" }}>{siteConfig.phoneDisplay}</a> or via the quote form on our homepage.</p>
        </section>
      </main>
    </>
  );
}

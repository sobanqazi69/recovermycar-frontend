import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `Privacy policy for ${siteConfig.name}. How we collect, use, and protect your personal data in accordance with UK GDPR and the Data Protection Act 2018.`,
  alternates: { canonical: `${siteConfig.url}/privacy-policy` },
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <>
      <Header />
      <main style={{ background: "#ffffff" }}>
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 60px", fontSize: 15, lineHeight: 1.8, color: "#444" }}>
          <h1 style={{ fontSize: 30, fontWeight: 800, color: "#111", marginBottom: 6, borderBottom: "3px solid #fe8601", paddingBottom: 12, display: "inline-block" }}>Privacy Policy</h1>
          <p style={{ marginTop: 16, color: "#666" }}>Last updated: May 2025</p>

          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111", marginTop: 32, marginBottom: 8 }}>1. Who We Are</h2>
          <p>{siteConfig.name} operates the website at {siteConfig.url}. We connect drivers with independent car recovery agents across the United Kingdom. References to "we", "us", or "our" in this policy refer to {siteConfig.name}.</p>

          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111", marginTop: 32, marginBottom: 8 }}>2. Data We Collect</h2>
          <p>When you request a recovery quote we collect:</p>
          <ul style={{ paddingLeft: 20, marginTop: 8 }}>
            <li>Your mobile telephone number (to send your SMS quote)</li>
            <li>Your collection and delivery addresses (to calculate your quote)</li>
            <li>Your vehicle registration number (to check vehicle class and weight)</li>
            <li>Recovery type selected</li>
          </ul>
          <p style={{ marginTop: 12 }}>We may also collect standard website analytics data including IP address, browser type, pages visited, and referral source through analytics tools.</p>

          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111", marginTop: 32, marginBottom: 8 }}>3. How We Use Your Data</h2>
          <p>We use the data you provide to:</p>
          <ul style={{ paddingLeft: 20, marginTop: 8 }}>
            <li>Calculate and send you a recovery quote by SMS</li>
            <li>Dispatch a recovery agent to your location</li>
            <li>Communicate with you about your recovery job</li>
            <li>Improve our service and website</li>
          </ul>

          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111", marginTop: 32, marginBottom: 8 }}>4. Legal Basis for Processing</h2>
          <p>We process your data on the basis of contract performance (to fulfil the recovery service you have requested) and, where applicable, legitimate interests (to improve our service).</p>

          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111", marginTop: 32, marginBottom: 8 }}>5. Data Sharing</h2>
          <p>We share your collection address, delivery address, vehicle registration, and telephone number with the recovery agent dispatched to assist you. This is necessary to perform the service. We do not sell your data to third parties for marketing purposes.</p>

          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111", marginTop: 32, marginBottom: 8 }}>6. Data Retention</h2>
          <p>We retain your quote and job data for up to 12 months for operational purposes (resolving disputes, improving service quality). Analytics data is retained in accordance with our analytics provider's standard retention policies.</p>

          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111", marginTop: 32, marginBottom: 8 }}>7. Your Rights</h2>
          <p>Under UK GDPR you have the right to:</p>
          <ul style={{ paddingLeft: 20, marginTop: 8 }}>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Request restriction of processing</li>
            <li>Data portability</li>
          </ul>
          <p style={{ marginTop: 12 }}>To exercise these rights, contact us at the address below. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.</p>

          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111", marginTop: 32, marginBottom: 8 }}>8. Cookies</h2>
          <p>Our website may use cookies for analytics purposes (such as Google Analytics). You can control cookie settings in your browser. Essential cookies required for the website to function are always active.</p>

          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111", marginTop: 32, marginBottom: 8 }}>9. Changes to This Policy</h2>
          <p>We may update this policy from time to time. The date at the top of this page shows when it was last revised. Continued use of our service after changes constitutes acceptance of the updated policy.</p>

          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111", marginTop: 32, marginBottom: 8 }}>10. Contact Us</h2>
          <p>For any privacy-related enquiries, contact us at: <a href={`tel:${siteConfig.phone}`} style={{ color: "#fe8601" }}>{siteConfig.phoneDisplay}</a> or via the quote form on our homepage.</p>
        </section>
      </main>
    </>
  );
}

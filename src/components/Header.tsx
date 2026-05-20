import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

export default function Header() {
  return (
    <header style={{ background: "#ffffff", borderBottom: "1px solid #e0e0e0" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontSize: 26, fontWeight: 900, letterSpacing: "-0.5px" }}>
            <span style={{ color: "#111111" }}>{siteConfig.logoWords[0]}</span>
            <span style={{ color: "#FF8A00" }}>{siteConfig.logoWords[1]}</span>
            <span style={{ color: "#111111" }}>{siteConfig.logoWords[2]}</span>
          </span>
        </Link>

        <a
          href={`tel:${siteConfig.phone}`}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "#FF8A00",
            color: "#ffffff",
            padding: "10px 18px",
            borderRadius: 6,
            textDecoration: "none",
            fontWeight: 700,
            fontSize: 15,
          }}
        >
          <PhoneIcon />
          {siteConfig.phoneDisplay}
        </a>
      </div>
    </header>
  );
}

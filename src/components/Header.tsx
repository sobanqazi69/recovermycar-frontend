import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Header() {
  return (
    <header style={{ background: "#ffffff", borderBottom: "1px solid #e0e0e0" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "14px 20px",
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontSize: 26, fontWeight: 900, letterSpacing: "-0.5px" }}>
            <span style={{ color: "#111111" }}>{siteConfig.logoWords[0]}</span>
            <span style={{ color: "#FF8A00" }}>{siteConfig.logoWords[1]}</span>
            <span style={{ color: "#111111" }}>{siteConfig.logoWords[2]}</span>
          </span>
        </Link>
      </div>
    </header>
  );
}

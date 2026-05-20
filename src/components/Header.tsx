import Link from "next/link";
import Image from "next/image";
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
        <Link href="/" style={{ textDecoration: "none", display: "inline-block" }}>
          <span style={{ fontSize: 26, fontWeight: 900, letterSpacing: "-0.5px", display: "block" }}>
            <span style={{ color: "#111111" }}>{siteConfig.logoWords[0]}</span>
            <span style={{ color: "#fe8601" }}>{siteConfig.logoWords[1]}</span>
            <span style={{ color: "#111111" }}>{siteConfig.logoWords[2]}</span>
          </span>
          <Image
            src="/favicon_new.png"
            alt="DRS Logo"
            width={90}
            height={90}
            style={{ marginTop: 4, objectFit: "contain", objectPosition: "left" }}
          />
        </Link>
      </div>
    </header>
  );
}

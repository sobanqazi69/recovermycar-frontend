import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Car Salvage Buyer", href: "#" },
  { label: "Garage Services", href: "#" },
  { label: "Car Parts", href: "#" },
  { label: "Car Breakers", href: "#" },
  { label: "Used Engines", href: "#" },
  { label: "Used Gearbox", href: "#" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#1a1a1a", color: "#cccccc", padding: "30px 20px 20px" }}>
      <style>{`
        .footer-link { color: #cccccc; text-decoration: none; font-size: 13px; transition: color 0.15s; }
        .footer-link:hover { color: #fe8601; }
      `}</style>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px 24px",
            marginBottom: 20,
            paddingBottom: 20,
            borderBottom: "1px solid #333",
          }}
        >
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href} className="footer-link">
              {link.label}
            </Link>
          ))}
        </nav>
        <p style={{ fontSize: 12, color: "#888888", textAlign: "center" }}>
          © {new Date().getFullYear()} Cheap Car Recovery. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

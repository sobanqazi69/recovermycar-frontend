"use client";

import { useState } from "react";
import Link from "next/link";

const otherServices = [
  { label: "Sell/Salvage Your Vehicle", href: "#" },
  { label: "Vehicle Repairs/Servicing", href: "#" },
  { label: "Used Engine Supplier", href: "#" },
  { label: "Used Gearbox Supplier", href: "#" },
  { label: "Used Vehicle Parts", href: "#" },
  { label: "Car Breakers Stock", href: "#" },
  { label: "Buy Used Vehicles", href: "#" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header style={{ background: "#ffffff", borderBottom: "1px solid #e0e0e0" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ fontSize: 26, fontWeight: 900, letterSpacing: "-0.5px" }}>
              <span style={{ color: "#111111" }}>Cheap</span>
              <span style={{ color: "#FF8A00" }}>Car</span>
              <span style={{ color: "#111111" }}>Recovery</span>
            </span>
            <span style={{ fontSize: 10, color: "#888", marginTop: 2, letterSpacing: 1 }}>
              PART OF MAKEMEBUSY.COM
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* Other Services Dropdown */}
          <div
            className="nav-dropdown"
            style={{ position: "relative" }}
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <button
              style={{
                background: "none",
                border: "1px solid #ddd",
                padding: "8px 14px",
                borderRadius: 4,
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
                color: "#111111",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              Other Services
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 4l4 4 4-4" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            {menuOpen && (
              <div className="dropdown-menu">
                {otherServices.map((s) => (
                  <a key={s.label} href={s.href}>
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Become An Agent */}
          <Link
            href="#"
            style={{
              background: "#FF8A00",
              color: "#ffffff",
              padding: "8px 16px",
              borderRadius: 4,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 14,
              whiteSpace: "nowrap",
            }}
          >
            Become An Agent
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="#111" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div style={{ borderTop: "1px solid #eee", padding: "12px 20px", background: "#fff" }}>
          <div style={{ marginBottom: 12, fontWeight: 700, fontSize: 14 }}>Other Services</div>
          {otherServices.map((s) => (
            <a
              key={s.label}
              href={s.href}
              style={{
                display: "block",
                padding: "8px 0",
                color: "#333",
                textDecoration: "none",
                fontSize: 14,
                borderBottom: "1px solid #f0f0f0",
              }}
            >
              {s.label}
            </a>
          ))}
          <Link
            href="#"
            style={{
              display: "inline-block",
              marginTop: 12,
              background: "#FF8A00",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: 4,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            Become An Agent
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .mobile-menu-btn { display: block !important; }
          nav { display: none !important; }
        }
      `}</style>
    </header>
  );
}

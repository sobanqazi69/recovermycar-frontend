"use client";

import { useState } from "react";

const recoveryTypes = [
  "Breakdown (Assistance now)",
  "Accident (Assistance now)",
  "A to B Transportation",
  "Jump Start / Tyre Change",
  "Mobile EV Charging",
  "Auction Collection",
];

const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#444" style={{ flexShrink: 0 }}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const Required = () => (
  <span style={{ color: "#e53e3e", fontWeight: 700, marginLeft: 3 }}>*</span>
);

const labelStyle: React.CSSProperties = {
  fontSize: 15,
  fontWeight: 700,
  color: "#ffffff",
  marginBottom: 7,
  display: "flex",
  alignItems: "center",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  border: "none",
  borderRadius: 6,
  fontSize: 14,
  outline: "none",
  background: "#ffffff",
  color: "#333",
};

export default function QuoteForm() {
  const [form, setForm] = useState({
    recoveryType: "Breakdown (Assistance now)",
    collectionAddress: "",
    deliveryAddress: "",
    telephone: "",
    vehicleReg: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://recovermycar.uk/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      role="img"
      aria-label="Tow truck recovering a broken down car on a UK road"
      style={{
        minHeight: 680,
        backgroundImage:
          "url('https://images.pexels.com/photos/8931963/pexels-photo-8931963.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px 48px 52px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      {/* Heading above the card */}
      <h2
        style={{
          fontSize: 26,
          fontWeight: 700,
          color: "#111111",
          marginBottom: 20,
          background: "rgba(255,255,255,0.75)",
          padding: "4px 10px",
          borderRadius: 4,
        }}
      >
        New Instant Quote
      </h2>

      {/* Dark card with orange border */}
      <div
        style={{
          background: "#3a3a3a",
          border: "2px solid #fe8601",
          borderRadius: 8,
          padding: "22px 20px 26px",
          width: 400,
          maxWidth: "100%",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {/* Recovery Type */}
            <div>
              <label style={labelStyle}>
                Recovery Type <Required />
              </label>
              <select
                name="recoveryType"
                value={form.recoveryType}
                onChange={handleChange}
                style={inputStyle}
                required
              >
                {recoveryTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Collection Address */}
            <div>
              <label style={labelStyle}>
                Collection Address <Required />
              </label>
              <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                <span style={{ position: "absolute", left: 12, display: "flex", pointerEvents: "none" }}>
                  <PinIcon />
                </span>
                <input
                  type="text"
                  name="collectionAddress"
                  value={form.collectionAddress}
                  onChange={handleChange}
                  placeholder="Enter a location"
                  style={{ ...inputStyle, paddingLeft: 38 }}
                  required
                />
              </div>
            </div>

            {/* Delivery Address */}
            <div>
              <label style={labelStyle}>
                Delivery Address <Required />
              </label>
              <input
                type="text"
                name="deliveryAddress"
                value={form.deliveryAddress}
                onChange={handleChange}
                placeholder="Enter a location"
                style={inputStyle}
                required
              />
            </div>

            {/* Telephone */}
            <div>
              <label style={labelStyle}>
                Telephone (Quotes sent by free sms) <Required />
              </label>
              <input
                type="tel"
                name="telephone"
                value={form.telephone}
                onChange={handleChange}
                style={{ ...inputStyle, minHeight: 48 }}
                required
              />
            </div>

            {/* Vehicle Reg */}
            <div>
              <label style={labelStyle}>
                Vehicle Reg (To check weight) <Required />
              </label>
              <input
                type="text"
                name="vehicleReg"
                value={form.vehicleReg}
                onChange={handleChange}
                style={{ ...inputStyle, textTransform: "uppercase", minHeight: 48 }}
                required
              />
            </div>

            {/* Submit button */}
            <div style={{ marginTop: 10 }}>
              {status === "success" ? (
                <div style={{ background: "#22c55e", color: "#fff", padding: "14px", borderRadius: 6, fontSize: 14, fontWeight: 700, textAlign: "center" }}>
                  Quote request sent! We will be in touch shortly.
                </div>
              ) : status === "error" ? (
                <div style={{ background: "#ef4444", color: "#fff", padding: "14px", borderRadius: 6, fontSize: 14, fontWeight: 700, textAlign: "center" }}>
                  Something went wrong. Please call us directly.
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    width: "100%",
                    padding: "14px",
                    background: status === "sending" ? "#999" : "#f0f0f0",
                    color: "#222222",
                    border: "none",
                    borderRadius: 6,
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => { if (status === "idle") e.currentTarget.style.background = "#fe8601"; }}
                  onMouseLeave={(e) => { if (status === "idle") e.currentTarget.style.background = "#f0f0f0"; }}
                >
                  {status === "sending" ? "Sending..." : "Get My Quote!"}
                </button>
              )}
            </div>

          </div>
        </form>
      </div>
    </section>
  );
}

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

const LocationIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    style={{ flexShrink: 0, color: "#FF8A00" }}
  >
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
      fill="currentColor"
    />
  </svg>
);

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  border: "1px solid #ddd",
  borderRadius: 4,
  fontSize: 14,
  outline: "none",
  background: "#fff",
  color: "#111",
};

const labelStyle: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: "#333",
  marginBottom: 4,
  display: "block",
};

export default function QuoteForm() {
  const [form, setForm] = useState({
    recoveryType: "",
    collectionAddress: "",
    deliveryAddress: "",
    telephone: "",
    vehicleReg: "",
    collectionDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Quote request submitted! You will receive your quote via SMS shortly.");
  };

  return (
    <section
      style={{
        background: "#1a1a1a",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        {/* Form header */}
        <div
          style={{
            background: "#FF8A00",
            borderRadius: "6px 6px 0 0",
            padding: "14px 20px",
          }}
        >
          <h2
            style={{
              color: "#ffffff",
              fontSize: 20,
              fontWeight: 700,
              margin: 0,
              letterSpacing: 0.3,
            }}
          >
            New Instant Quote
          </h2>
        </div>

        {/* Form body */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "0 0 6px 6px",
            padding: "24px 24px 28px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div style={{ display: "grid", gap: 16 }}>
              {/* Recovery Type */}
              <div>
                <label style={labelStyle}>Recovery Type</label>
                <select
                  name="recoveryType"
                  value={form.recoveryType}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                >
                  <option value="">Select recovery type...</option>
                  {recoveryTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Collection Address */}
              <div>
                <label style={labelStyle}>Collection Address</label>
                <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                  <input
                    type="text"
                    name="collectionAddress"
                    value={form.collectionAddress}
                    onChange={handleChange}
                    placeholder="Enter collection address or postcode"
                    style={{ ...inputStyle, paddingRight: 36 }}
                    required
                  />
                  <span style={{ position: "absolute", right: 10 }}>
                    <LocationIcon />
                  </span>
                </div>
              </div>

              {/* Delivery Address */}
              <div>
                <label style={labelStyle}>Delivery Address</label>
                <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                  <input
                    type="text"
                    name="deliveryAddress"
                    value={form.deliveryAddress}
                    onChange={handleChange}
                    placeholder="Enter delivery address or postcode"
                    style={{ ...inputStyle, paddingRight: 36 }}
                    required
                  />
                  <span style={{ position: "absolute", right: 10 }}>
                    <LocationIcon />
                  </span>
                </div>
              </div>

              {/* Telephone + Vehicle Reg side by side */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label style={labelStyle}>
                    Telephone{" "}
                    <span style={{ fontWeight: 400, color: "#888", fontSize: 11 }}>
                      (Quotes sent by free SMS)
                    </span>
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={form.telephone}
                    onChange={handleChange}
                    placeholder="e.g. 07700 900000"
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>
                    Vehicle Reg{" "}
                    <span style={{ fontWeight: 400, color: "#888", fontSize: 11 }}>
                      (To check weight)
                    </span>
                  </label>
                  <input
                    type="text"
                    name="vehicleReg"
                    value={form.vehicleReg}
                    onChange={handleChange}
                    placeholder="e.g. AB12 CDE"
                    style={{ ...inputStyle, textTransform: "uppercase" }}
                    required
                  />
                </div>
              </div>

              {/* Collection Date */}
              <div>
                <label style={labelStyle}>Collection Date</label>
                <input
                  type="date"
                  name="collectionDate"
                  value={form.collectionDate}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </div>

              {/* Submit */}
              <div style={{ marginTop: 4 }}>
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "13px",
                    background: "#FF8A00",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: 4,
                    fontSize: 16,
                    fontWeight: 700,
                    cursor: "pointer",
                    letterSpacing: 0.5,
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#E07800")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#FF8A00")}
                >
                  Get Instant Quote
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

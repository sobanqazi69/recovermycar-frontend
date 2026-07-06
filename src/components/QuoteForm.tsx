"use client";

import { useState, useRef, useEffect } from "react";
import { siteConfig } from "@/lib/siteConfig";

const recoveryTypes = [
  "Breakdown (Assistance now)",
  "Accident (Assistance now)",
  "A to B Transportation",
  "Jump Start / Tyre Change",
  "Mobile EV Charging",
  "Auction Collection",
];

interface GooglePrediction {
  description: string;
  place_id: string;
}

const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0, opacity: 0.5 }}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const Required = () => (
  <span style={{ color: "#e53e3e", fontWeight: 700, marginLeft: 3 }}>*</span>
);

const getLabelStyle = (noBackground?: boolean): React.CSSProperties => ({
  fontSize: 15,
  fontWeight: 700,
  color: "#ffffff",
  marginBottom: 7,
  display: "flex",
  alignItems: "center",
});

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px 12px 38px",
  border: "none",
  borderRadius: 6,
  fontSize: 14,
  outline: "none",
  background: "#ffffff",
  color: "#333",
  boxSizing: "border-box",
};

const dropdownStyle: React.CSSProperties = {
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  background: "#fff",
  border: "1px solid #ddd",
  borderTop: "none",
  borderRadius: "0 0 6px 6px",
  zIndex: 9999,
  boxShadow: "0 6px 16px rgba(0,0,0,0.18)",
  overflow: "hidden",
};

const suggestionStyle: React.CSSProperties = {
  padding: "10px 12px 10px 14px",
  cursor: "pointer",
  fontSize: 13,
  color: "#333",
  display: "flex",
  alignItems: "center",
  gap: 8,
  borderBottom: "1px solid #f0f0f0",
};

function loadGoogleMapsScript(callback: () => void) {
  if (typeof window === "undefined") return;
  if ((window as any).google?.maps?.places) {
    callback();
    return;
  }

  const existingScript = document.getElementById("google-maps-script");
  if (existingScript) {
    existingScript.addEventListener("load", callback);
    return;
  }

  const script = document.createElement("script");
  script.id = "google-maps-script";
  script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
  script.async = true;
  script.defer = true;
  script.addEventListener("load", callback);
  document.head.appendChild(script);
}

export default function QuoteForm({ noBackground }: { noBackground?: boolean }) {
  const [form, setForm] = useState({
    recoveryType: "Breakdown (Assistance now)",
    collectionAddress: "",
    collectionPostcode: "",
    deliveryAddress: "",
    deliveryPostcode: "",
    telephone: "",
    vehicleReg: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [collSuggestions, setCollSuggestions] = useState<GooglePrediction[]>([]);
  const [delivSuggestions, setDelivSuggestions] = useState<GooglePrediction[]>([]);
  const collTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const delivTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const autocompleteService = useRef<any>(null);
  const placesService = useRef<any>(null);

  useEffect(() => {
    loadGoogleMapsScript(() => {
      const maps = (window as any).google?.maps;
      if (maps?.places) {
        autocompleteService.current = new maps.places.AutocompleteService();
        const dummyDiv = document.createElement("div");
        placesService.current = new maps.places.PlacesService(dummyDiv);
      }
    });
  }, []);

  const handleCollectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm(prev => ({ ...prev, collectionAddress: value, collectionPostcode: "" }));
    if (collTimer.current) clearTimeout(collTimer.current);
    if (value.length < 3) { setCollSuggestions([]); return; }
    collTimer.current = setTimeout(() => {
      const maps = (window as any).google?.maps;
      if (maps?.places) {
        if (!autocompleteService.current) {
          autocompleteService.current = new maps.places.AutocompleteService();
        }
        if (!placesService.current) {
          const dummyDiv = document.createElement("div");
          placesService.current = new maps.places.PlacesService(dummyDiv);
        }
      }

      if (autocompleteService.current) {
        autocompleteService.current.getPlacePredictions(
          {
            input: value,
            componentRestrictions: { country: "gb" },
          },
          (predictions: any, status: any) => {
            if (status === "OK" && predictions) {
              setCollSuggestions(predictions.map((p: any) => ({
                description: p.description,
                place_id: p.place_id,
              })));
            } else {
              setCollSuggestions([]);
            }
          }
        );
      }
    }, 400);
  };

  const handleDeliveryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm(prev => ({ ...prev, deliveryAddress: value, deliveryPostcode: "" }));
    if (delivTimer.current) clearTimeout(delivTimer.current);
    if (value.length < 3) { setDelivSuggestions([]); return; }
    delivTimer.current = setTimeout(() => {
      const maps = (window as any).google?.maps;
      if (maps?.places) {
        if (!autocompleteService.current) {
          autocompleteService.current = new maps.places.AutocompleteService();
        }
        if (!placesService.current) {
          const dummyDiv = document.createElement("div");
          placesService.current = new maps.places.PlacesService(dummyDiv);
        }
      }

      if (autocompleteService.current) {
        autocompleteService.current.getPlacePredictions(
          {
            input: value,
            componentRestrictions: { country: "gb" },
          },
          (predictions: any, status: any) => {
            if (status === "OK" && predictions) {
              setDelivSuggestions(predictions.map((p: any) => ({
                description: p.description,
                place_id: p.place_id,
              })));
            } else {
              setDelivSuggestions([]);
            }
          }
        );
      }
    }, 400);
  };

  const geocodeToPostcode = async (address: string): Promise<string> => {
    try {
      const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
      const r = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${key}&region=uk`
      );
      const data = await r.json();
      const result = data.results?.[0];
      if (!result) return "";

      let postcode = "";
      if (result.address_components) {
        const postalCodeComponent = result.address_components.find((c: any) =>
          c.types.includes("postal_code")
        );
        if (postalCodeComponent) {
          postcode = postalCodeComponent.long_name;
        }
      }
      if (!postcode && result.geometry?.location) {
        const { lat, lng } = result.geometry.location;
        const r2 = await fetch(`https://api.postcodes.io/postcodes?lon=${lng}&lat=${lat}&limit=1`);
        const d2 = await r2.json();
        postcode = d2?.result?.[0]?.postcode || "";
      }
      return postcode;
    } catch {
      return "";
    }
  };

  const selectCollection = async (suggestion: GooglePrediction) => {
    const address = suggestion.description;
    setForm(prev => ({ ...prev, collectionAddress: address }));
    setCollSuggestions([]);

    if (placesService.current && suggestion.place_id) {
      placesService.current.getDetails(
        {
          placeId: suggestion.place_id,
          fields: ["address_components", "geometry"],
        },
        async (place: any, status: any) => {
          if (status === "OK" && place) {
            let postcode = "";
            if (place.address_components) {
              const postalCodeComponent = place.address_components.find((c: any) =>
                c.types.includes("postal_code")
              );
              if (postalCodeComponent) {
                postcode = postalCodeComponent.long_name;
              }
            }

            if (!postcode && place.geometry?.location) {
              const lat = place.geometry.location.lat();
              const lng = place.geometry.location.lng();
              try {
                const r = await fetch(`https://api.postcodes.io/postcodes?lon=${lng}&lat=${lat}&limit=1`);
                const data = await r.json();
                postcode = data?.result?.[0]?.postcode || "";
              } catch (err) {
                console.warn("Postcode fallback failed:", err);
              }
            }

            setForm(prev => ({ ...prev, collectionPostcode: postcode }));
          }
        }
      );
    }
  };

  const selectDelivery = async (suggestion: GooglePrediction) => {
    const address = suggestion.description;
    setForm(prev => ({ ...prev, deliveryAddress: address }));
    setDelivSuggestions([]);

    if (placesService.current && suggestion.place_id) {
      placesService.current.getDetails(
        {
          placeId: suggestion.place_id,
          fields: ["address_components", "geometry"],
        },
        async (place: any, status: any) => {
          if (status === "OK" && place) {
            let postcode = "";
            if (place.address_components) {
              const postalCodeComponent = place.address_components.find((c: any) =>
                c.types.includes("postal_code")
              );
              if (postalCodeComponent) {
                postcode = postalCodeComponent.long_name;
              }
            }

            if (!postcode && place.geometry?.location) {
              const lat = place.geometry.location.lat();
              const lng = place.geometry.location.lng();
              try {
                const r = await fetch(`https://api.postcodes.io/postcodes?lon=${lng}&lat=${lat}&limit=1`);
                const data = await r.json();
                postcode = data?.result?.[0]?.postcode || "";
              } catch (err) {
                console.warn("Postcode fallback failed:", err);
              }
            }

            setForm(prev => ({ ...prev, deliveryPostcode: postcode }));
          }
        }
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    let collPostcode = form.collectionPostcode;
    let delivPostcode = form.deliveryPostcode;
    if (!collPostcode && form.collectionAddress) collPostcode = await geocodeToPostcode(form.collectionAddress);
    if (!delivPostcode && form.deliveryAddress) delivPostcode = await geocodeToPostcode(form.deliveryAddress);
    try {
      const res = await fetch("https://recovermycar.uk/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recoveryType: form.recoveryType,
          collectionAddress: form.collectionAddress,
          deliveryAddress: form.deliveryAddress,
          collectionPostcode: collPostcode,
          deliveryPostcode: delivPostcode,
          telephone: form.telephone,
          vehicleReg: form.vehicleReg,
          site: siteConfig.name,
        }),
      });
      if (res.ok) {
        // Form is embedded as an iframe in WordPress — redirect the TOP-level tab,
        // not just the iframe, so the user lands on the real thank-you page.
        const thankYouUrl = "https://cheapcarsrecovery.co.uk/thankyou/";
        try {
          // window.top navigation is allowed cross-origin off a user gesture (form submit).
          (window.top ?? window).location.href = thankYouUrl;
        } catch {
          // Sandbox/cross-origin fallback: navigate within the iframe.
          window.location.href = thankYouUrl;
        }
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section
        style={{
          minHeight: 680,
          ...(noBackground ? { background: "transparent" } : {
            backgroundImage: "url('https://images.pexels.com/photos/8931963/pexels-photo-8931963.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }),
          padding: "40px 48px 52px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.97)",
            borderRadius: 12,
            padding: "40px 36px",
            width: 420,
            maxWidth: "100%",
            boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
          }}
        >
          <div style={{ marginBottom: 18 }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#22c55e", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>
          <h2 style={{ fontSize: 34, fontWeight: 800, color: "#111", marginBottom: 10 }}>Thank You</h2>
          <p style={{ fontSize: 16, fontWeight: 700, color: "#111", marginBottom: 14 }}>Quote Complete.</p>
          <p style={{ fontSize: 15, color: "#555", lineHeight: 1.6, marginBottom: 12 }}>
            You will now receive a free text message with your estimated price. Our representative will call you shortly to confirm.
          </p>
          <p style={{ fontSize: 14, color: "#888", marginBottom: 28 }}>Thank you for using {siteConfig.name}.</p>
          <button
            onClick={() => {
              setStatus("idle");
              setForm({ recoveryType: "Breakdown (Assistance now)", collectionAddress: "", collectionPostcode: "", deliveryAddress: "", deliveryPostcode: "", telephone: "", vehicleReg: "" });
            }}
            style={{ width: "100%", padding: "14px", background: "#fe8601", color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 700, cursor: "pointer", letterSpacing: 1, textTransform: "uppercase" }}
          >
            Get Another Quote
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      role="img"
      aria-label="Tow truck recovering a broken down car on a UK road"
      style={{
        ...(noBackground ? { background: "transparent" } : {
          minHeight: 680,
          backgroundImage: "url('https://images.pexels.com/photos/8931963/pexels-photo-8931963.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }),
        padding: noBackground ? "0" : "40px 48px 52px",
        display: "flex",
        flexDirection: "column",
        alignItems: noBackground ? "center" : "flex-start",
        justifyContent: noBackground ? "center" : undefined,
      }}
    >
      {!noBackground && (
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
      )}

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
              <label style={getLabelStyle(noBackground)}>Recovery Type <Required /></label>
              <select name="recoveryType" value={form.recoveryType} onChange={handleChange} style={{ ...inputStyle, paddingLeft: 14 }} required>
                {recoveryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            {/* Collection Address */}
            <div>
              <label style={getLabelStyle(noBackground)}>Collection Address <Required /></label>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", display: "flex", pointerEvents: "none", color: "#444" }}>
                  <PinIcon />
                </span>
                <input
                  type="text"
                  value={form.collectionAddress}
                  onChange={handleCollectionChange}
                  onBlur={() => setTimeout(() => setCollSuggestions([]), 200)}
                  placeholder="Start typing your address..."
                  style={inputStyle}
                  autoComplete="off"
                  required
                />
                {collSuggestions.length > 0 && (
                  <div style={dropdownStyle}>
                    {collSuggestions.map((f, i) => (
                      <div
                        key={i}
                        onMouseDown={() => selectCollection(f)}
                        style={suggestionStyle}
                        onMouseEnter={e => (e.currentTarget.style.background = "#f5f5f5")}
                        onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
                      >
                        <PinIcon />
                        <span>{f.description}</span>
                      </div>
                    ))}
                    <div style={{ padding: "4px 12px", fontSize: 10, color: "#aaa", textAlign: "right" }}>
                      Powered by Google
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Delivery Address */}
            <div>
              <label style={getLabelStyle(noBackground)}>Delivery Address <Required /></label>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", display: "flex", pointerEvents: "none", color: "#444" }}>
                  <PinIcon />
                </span>
                <input
                  type="text"
                  value={form.deliveryAddress}
                  onChange={handleDeliveryChange}
                  onBlur={() => setTimeout(() => setDelivSuggestions([]), 200)}
                  placeholder="Start typing destination..."
                  style={inputStyle}
                  autoComplete="off"
                  required
                />
                {delivSuggestions.length > 0 && (
                  <div style={dropdownStyle}>
                    {delivSuggestions.map((f, i) => (
                      <div
                        key={i}
                        onMouseDown={() => selectDelivery(f)}
                        style={suggestionStyle}
                        onMouseEnter={e => (e.currentTarget.style.background = "#f5f5f5")}
                        onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
                      >
                        <PinIcon />
                        <span>{f.description}</span>
                      </div>
                    ))}
                    <div style={{ padding: "4px 12px", fontSize: 10, color: "#aaa", textAlign: "right" }}>
                      Powered by Google
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Telephone */}
            <div>
              <label style={getLabelStyle(noBackground)}>Telephone (Quotes sent by free sms) <Required /></label>
              <input type="tel" name="telephone" value={form.telephone} onChange={handleChange} style={{ ...inputStyle, paddingLeft: 14, minHeight: 48 }} required />
            </div>

            {/* Vehicle Reg */}
            <div>
              <label style={getLabelStyle(noBackground)}>Vehicle Reg (To check weight) <Required /></label>
              <input type="text" name="vehicleReg" value={form.vehicleReg} onChange={handleChange} style={{ ...inputStyle, paddingLeft: 14, textTransform: "uppercase", minHeight: 48 }} required />
            </div>

            {/* Submit */}
            <div style={{ marginTop: 10 }}>
              {status === "error" ? (
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
                  onMouseEnter={e => { if (status === "idle") e.currentTarget.style.background = "#fe8601"; }}
                  onMouseLeave={e => { if (status === "idle") e.currentTarget.style.background = "#f0f0f0"; }}
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

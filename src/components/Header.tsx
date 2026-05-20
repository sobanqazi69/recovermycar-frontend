import Link from "next/link";

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
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontSize: 26, fontWeight: 900, letterSpacing: "-0.5px" }}>
            <span style={{ color: "#111111" }}>Cheap</span>
            <span style={{ color: "#FF8A00" }}>Car</span>
            <span style={{ color: "#111111" }}>Recovery</span>
          </span>
        </Link>
      </div>
    </header>
  );
}

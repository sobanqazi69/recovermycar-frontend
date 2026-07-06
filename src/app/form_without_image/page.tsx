import QuoteForm from "@/components/QuoteForm";

export const metadata = {
  robots: { index: false, follow: false },
};

export default function FormWithoutImagePage() {
  return (
    <>
      <style>{`html, body { background: transparent !important; margin: 0; padding: 0; }`}</style>
      <main style={{ background: "transparent" }}>
        <QuoteForm noBackground />
      </main>
    </>
  );
}

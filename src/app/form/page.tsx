import QuoteForm from "@/components/QuoteForm";

export const metadata = {
  robots: { index: false, follow: false },
};

export default function FormPage() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <QuoteForm />
    </main>
  );
}

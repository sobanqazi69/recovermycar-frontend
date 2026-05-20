import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cheap Car Recovery - Cheap recovery quotes for your car",
  description:
    "Looking for reliable and affordable National Breakdown services? Get an instant quote from our nationwide team of recovery agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wiz — Cloud & AI Security",
  description: "Reconstruction workspace based on public Wiz site observations.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Fraunces, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const body = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const num = IBM_Plex_Mono({
  variable: "--font-num",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pro-accounting.nl"),
  title: {
    default: "Professional Accounting — Boekhouding & belastingadvies IJmuiden",
    template: "%s — Professional Accounting",
  },
  description:
    "Professional Accounting verzorgt boekhouding, BTW- en IB-aangifte, jaarrekeningen, salarisadministratie en belastingadvies voor ondernemers in IJmuiden en omstreken.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl" className={`${display.variable} ${body.variable} ${num.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

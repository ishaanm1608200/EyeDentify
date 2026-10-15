import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "EYEDENTIFY — AI Smart Glasses for the Visually Impaired",
  description: "Next-generation spatial intelligence and acoustic bionics engineered to provide independence without visual boundaries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#0b0f12] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}

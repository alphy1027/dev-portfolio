import type { Metadata } from "next";
import { Oswald, Afacad } from "next/font/google";
import "./globals.css";
import { siteInfo } from "@/content/siteInfo";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const primary = Afacad({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const secondary = Oswald({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteInfo.siteURL),
  title: "Alphy1027",
  description: "Web developer, software developer in Nairobi, Kenya",
  openGraph: {
    title: {
      default: "Airstream cooling systems Kenya",
      template: "%s | AirStream cooling systems Kenya",
    },
    description:
      "From installation and repair to maintenance and genuine spare parts, AirStream keeps your spaces cool, efficient, and reliable. Trusted HVAC and refrigeration solutions for homes and businesses in Kenya.",
    siteName: siteInfo.siteName,
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "AirStream HVAC & Refrigeration Experts in Kenya",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airstream HVAC & Refrigeration Experts in Kenya",
    description:
      "From installation and repair to maintenance and genuine spare parts, AirStream keeps your spaces cool, efficient, and reliable. Trusted HVAC and refrigeration solutions for homes and businesses in Kenya.",
    images: [""],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`${primary.variable} ${secondary.variable} antialiased  flex flex-col`}>
        <Header />
        <main className="flex min-h-screen w-full flex-1 flex-col gap-space-6 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Oswald, Afacad } from "next/font/google";
import "./globals.css";
import { siteInfo } from "@/content/siteInfo";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";
import SidebarAndHeader from "@/components/header/components/SidebarAndHeader";

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
  title: "Alphones Odhiambo - Web Developer | Modern Frontend & Full-Stack Projects",
  description: "Portfolio of Alphones Odhiambo, a fullstack web developer building clean, fast, and modern web experiences using MERN stack. Located in Nairobi, Kenya",
  openGraph: {
    title: "Alphones Odhiambo - Web Developer | Full-Stack Developer",
    description:
      "Explore the work and projects of Alphones Odhiambo, a Web Developer building modern web experiences",
    siteName: siteInfo.siteName,
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alphones Odhiambo - Web Developer | Full-Stack Developer",
    description:
      "Explore the work and projects of Alphones Odhiambo, a Web Developer building modern web experiences",
    images: [""],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="" >
      <body className={`${primary.variable} ${secondary.variable} antialiased  flex flex-col`}>
        <Toaster position="top-center" gutter={8} toastOptions={{ duration: 10000 }} />
        <SidebarAndHeader />
        <main className="flex min-h-screen w-full flex-1 flex-col gap-space-6 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

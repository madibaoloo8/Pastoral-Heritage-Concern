import type { Metadata } from "next";
import { Bitter, Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bitter = Bitter({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: [
      {
        url: "/favicon.ico?v=6",
        type: "image/x-icon",
        sizes: "64x64",
      },
      {
        url: "/favicon-64.png?v=6",
        type: "image/png",
        sizes: "64x64",
      },
    ],
    shortcut: "/favicon.ico?v=6",
    apple: "/apple-touch-icon.png?v=6",
  },
  title: {
    default: `${siteConfig.name} | Grassroots Development, Peacebuilding & Inclusion`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Pastoral Heritage Concern is a Nairobi-based organization informing development policy and practice through grassroots innovative solutions in peacebuilding, resilience, inclusion, and advocacy.",
  keywords: [
    "Pastoral Heritage Concern",
    "NGO Kenya",
    "peacebuilding",
    "community resilience",
    "grassroots development",
    "youth engagement",
    "albinism awareness",
    "policy advocacy",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.tagline,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bitter.variable} h-full`}
    >
      <body className="min-h-full bg-[var(--color-page)] text-[var(--color-ink)]">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

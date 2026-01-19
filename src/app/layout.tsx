import "./globals.css";
import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";

import { Toaster } from "sonner";

import { inter, mono, nasalization, quentine } from "./fonts";

export const metadata: Metadata = {
  title: "Pramit Karki | Software Developer Engineer",
  description:
    "Pramit Karki - Software Developer Engineer with 2 years of experience at SiemensEDA. Specializing in Java development, performance optimization, and AI technologies.",
  keywords: [
    "Pramit Karki",
    "Software Developer",
    "Software Engineer",
    "Portfolio",
    "SiemensEDA",
    "Java Developer",
    "React Developer",
    "Next.js Developer",
    "AI Engineer",
    "Full Stack Developer",
  ],
  authors: [{ name: "Pramit Karki" }],
  creator: "Pramit Karki",
  publisher: "Pramit Karki",
  metadataBase: new URL("https://pramitkarki.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pramit Karki | Software Developer Engineer",
    description:
      "Pramit Karki - Software Developer Engineer with 2 years of experience at SiemensEDA. Specializing in Java development, performance optimization, and AI technologies.",
    url: "https://pramitkarki.vercel.app",
    siteName: "Pramit Karki Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/me.png",
        width: 1200,
        height: 630,
        alt: "Pramit Karki - Software Developer Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pramit Karki | Software Developer Engineer",
    description:
      "Pramit Karki - Software Developer Engineer with 2 years of experience at SiemensEDA. Specializing in Java development, performance optimization, and AI technologies.",
    images: ["/images/me.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-180.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${mono.variable} ${nasalization.variable} ${quentine.variable} font-sans`}
        suppressHydrationWarning
      >
        {children}
        <Toaster position="bottom-right" richColors closeButton />
        <Analytics />
      </body>
    </html>
  );
}

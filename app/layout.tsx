import type { Metadata } from "next";
import { DEFAULT_LOCALE } from "./lib/i18n/locale";
import "./styles/main.scss";

export const metadata: Metadata = {
  title: {
    default: "PeyClub — AI-Powered Hospitality Payments & Ordering",
    template: "%s | PeyClub",
  },
  description:
    "PeyClub helps restaurants and on-premise businesses move faster with AI-powered ordering, instant payments, and real-time insights — all in one platform.",
  keywords: [
    "PeyClub",
    "AI ordering",
    "hospitality payments",
    "restaurant AI",
    "contactless payment",
    "Apple Pay",
    "Google Pay",
    "QR ordering",
    "voice ordering",
    "real-time insights",
    "restaurant management",
    "fast payment",
    "AI 360",
  ],
  authors: [{ name: "PeyClub" }],
  creator: "PeyClub",
  publisher: "PeyClub",
  metadataBase: new URL("https://peyclub.com"),
  alternates: {
    languages: {
      en: "/en",
      sr: "/sr",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "sr_RS",
    siteName: "PeyClub",
    title: "PeyClub — AI-Powered Hospitality Payments & Ordering",
    description:
      "PeyClub helps restaurants and on-premise businesses move faster with AI-powered ordering, instant payments, and real-time insights — all in one platform.",
    url: "https://peyclub.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "PeyClub — AI-Powered Hospitality Payments & Ordering",
    description:
      "PeyClub helps restaurants and on-premise businesses move faster with AI-powered ordering, instant payments, and real-time insights — all in one platform.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={DEFAULT_LOCALE}>
      <body>{children}</body>
    </html>
  );
}

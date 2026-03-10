import type { Metadata } from "next";
import { DEFAULT_LOCALE } from "./lib/i18n/locale";

export const metadata: Metadata = {
  title: "PeyClub",
  description: "Application that does it all",
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

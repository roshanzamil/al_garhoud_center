import type { Metadata } from "next";
import "../globals.css";
import { i18n, Locale } from "@/i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "Al Garhoud Center - Your Trusted Partner for Government Services in Dubai",
  description: "Al Garhoud Center offers a comprehensive range of government services in Dubai, including visa processing, Emirates ID typing, medical fitness applications, and approvals from Amer, DET, and DHA. Your one-stop solution for efficient and professional document processing.",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang} dir={params.lang === "ar" ? "rtl" : "ltr"}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@400..800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Al Garhoud Center - Your Trusted Partner for Government Services in Dubai",
  description: "Al Garhoud Center offers a comprehensive range of government services in Dubai, including visa processing, Emirates ID typing, medical fitness applications, and approvals from Amer, DET, and DHA. Your one-stop solution for efficient and professional document processing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hassan Tech - Designer Engineer",
  description: "Frontend developer and designer with 3 years of experience creating user-friendly interfaces that work well and look good. Based in Düsseldorf, building accessible and performant web applications.",
  authors: [{ name: "Hassan", url: "https://hassanx.tech" }],
  creator: "Hassan Tech",
  publisher: "Hassan Tech",
  keywords: [
    "frontend developer",
    "web designer",
    "react developer",
    "typescript",
    "UI/UX design",
    "web development",
    "Düsseldorf developer",
    "design engineer",
    "accessible interfaces",
    "modern web design"
  ],
  robots: "index, follow",
  category: "technology",
  applicationName: "Hassan Tech Portfolio",
  openGraph: {
    title: "Hassan Tech - Frontend Developer & Designer",
    description: "Frontend developer and designer with 3 years of experience creating user-friendly interfaces that work well and look good.",
    url: "https://hassanx.tech",
    siteName: "Hassan Tech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.hassanx.vercel.app/hassan.png",
        width: 1200,
        height: 630,
        alt: "Hassan Tech - Frontend Developer & Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@hassantech",
    title: "Hassan Tech - Frontend Developer & Designer",
    description: "Frontend developer and designer with 3 years of experience creating user-friendly interfaces that work well and look good.",
    images: ["https://www.hassanx.vercel.app/hassan.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

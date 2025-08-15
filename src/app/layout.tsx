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
  metadataBase: new URL("https://hassanx.tech"),
  title: {
    default: "Hassan Tech (HassanXTech / Hassan Shafique) — Frontend Developer & Designer",
    template: "%s | Hassan Tech",
  },
  description:
    "Frontend developer & designer crafting fast, accessible web experiences. Also known as HassanXTech (Hassan Shafique). Düsseldorf-based.",
  authors: [{ name: "Hassan Tech", url: "https://hassanx.tech" }],
  creator: "Hassan Tech",
  publisher: "Hassan Tech",
  keywords: [
    "Hassan Tech",
    "HassanXTech",
    "Hassan Shafique",
    "frontend developer",
    "react developer",
    "typescript",
    "UI/UX designer",
    "web development",
    "Düsseldorf developer",
    "Dusseldorf developer",
    "design engineer",
    "accessible interfaces",
    "modern web design",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://hassanx.tech/",
  },
  category: "technology",
  applicationName: "Hassan Tech Portfolio",
  openGraph: {
    title: "Hassan Tech (HassanXTech / Hassan Shafique) — Frontend Developer & Designer",
    description:
      "Frontend developer & designer with 3+ years building user-friendly, performant interfaces.",
    url: "https://hassanx.tech",
    siteName: "Hassan Tech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://hassanx.tech/hassan.png",
        width: 1200,
        height: 630,
        alt: "Hassan Tech — Frontend Developer & Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@hassantech",
    title: "Hassan Tech — Frontend Developer & Designer",
    description:
      "Frontend developer & designer with 3+ years building user-friendly, performant interfaces.",
    images: ["https://hassanx.tech/hassan.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for Person and WebSite
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://hassanx.tech/#person",
    name: "Hassan Tech",
    alternateName: ["HassanXTech", "Hassan Shafique"],
    url: "https://hassanx.tech/",
    image: "https://hassanx.tech/hassan.png",
    jobTitle: "Frontend Developer & Designer",
    sameAs: [
      "https://github.com/HassanXTech",
      "https://www.instagram.com/hassantech",
      "https://www.tiktok.com/@HassanTech",
      "https://www.linkedin.com/in/HassanTech",
    ],
  } as const;

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://hassanx.tech/#website",
    url: "https://hassanx.tech/",
    name: "Hassan Tech",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.google.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  } as const;
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </body>
    </html>
  );
}

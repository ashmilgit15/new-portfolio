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
  metadataBase: new URL("https://ashmilp.dev"),
  title: "Ashmil P | AI Web & App Developer",
  description:
    "15-year-old AI developer building scalable SaaS and web applications. Full-stack development, AI integration, and cutting-edge solutions.",
  keywords: [
    "AI Developer",
    "Web Developer",
    "App Developer",
    "SaaS Builder",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
  ],
  authors: [{ name: "Ashmil P" }],
  creator: "Ashmil P",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashmilp.dev",
    siteName: "Ashmil P Portfolio",
    title: "Ashmil P | AI Web & App Developer",
    description:
      "15-year-old AI developer building scalable SaaS and web applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashmil P - AI Web & App Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashmil P | AI Web & App Developer",
    description:
      "15-year-old AI developer building scalable SaaS and web applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

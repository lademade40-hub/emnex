import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const fraunces = localFont({
  src: [
    {
      path: "../fonts/fraunces-var.woff2",
      style: "normal",
      weight: "300 700",
    },
    {
      path: "../fonts/fraunces-italic-var.woff2",
      style: "italic",
      weight: "300 700",
    },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const instrument = localFont({
  src: [
    {
      path: "../fonts/instrument-var.woff2",
      style: "normal",
      weight: "400 700",
    },
    {
      path: "../fonts/instrument-italic-var.woff2",
      style: "italic",
      weight: "400 700",
    },
  ],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EMNEX AI — AI-Powered Website Design",
  description:
    "EMNEX AI builds professional, AI-assisted websites that help your business get online without recurring hosting fees on eligible projects. Thoughtful design. Affordable ownership.",
  keywords: [
    "EMNEX AI",
    "website design",
    "AI-assisted website development",
    "small business website",
    "no monthly hosting fees",
    "landing page design",
  ],
  icons: {
    icon: "/logo.svg",
  },
  // Google Search Console ownership verification
  verification: {
    google: "O9KHI-82vXxUnqemKFvbT2Ft40hynrotETKeTIqmsoQ",
  },
  metadataBase: new URL("https://emnex-3zko.vercel.app"),
  openGraph: {
    title: "EMNEX AI — AI-Powered Website Design",
    description:
      "Professional websites. Thoughtful design. Affordable ownership.",
    siteName: "EMNEX AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${instrument.variable} font-sans antialiased bg-ivory text-ink`}
      >
        {children}
      </body>
    </html>
  );
}

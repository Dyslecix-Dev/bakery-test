import type { Metadata } from "next";
import { JetBrains_Mono, Spectral } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const spectral = Spectral({
  weight: "400",
  variable: "--font-spectral",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bakery Test",
  description: "Proof of concept for a friend's bakery website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} ${spectral.variable} antialiased`}>{children}</body>
    </html>
  );
}


import type { Metadata } from "next";
import { ReactNode } from "react";

import { JetBrains_Mono, Spectral } from "next/font/google";

import "./globals.css";

import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";

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
  title: "Snickerdoodle's Desserts",
  description: "Nicole Lees's bakery website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} ${spectral.variable} antialiased`}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}


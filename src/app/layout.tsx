import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GridBackground from "@/components/GridBackground";
import WhatsAppCTA from "@/components/WhatsAppCTA";

import CursorGlow from "@/components/CursorGlow";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saksham Tikekar | Digital Blueprint | Full Stack Developer",
  description: "High-performance full stack web development and AI-powered solutions. Expert in Next.js, React, and SEO-optimized digital experiences. Looking for innovative teams.",
  keywords: ["Full Stack Developer", "Next.js Expert", "React.js Developer", "AI Solutions", "Saksham Tikekar", "Freelance Web Developer India", "HUD Portfolio"],
  openGraph: {
    title: "Saksham Tikekar | Digital Blueprint",
    description: "Building high-conversion websites & AI-powered solutions.",
    type: "website",
    locale: "en_US",
    url: "https://sakshamtikekar19.github.io/sakshamtikekar/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground selection:bg-accent/30`}>
        <GoogleAnalytics gaId="G-1Z7G1KC3FH" />
        <GridBackground />
        <WhatsAppCTA />
        <CursorGlow />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Clinton — Full-stack & Web3 Developer";
const description =
  "I build websites and digital products end to end — landing pages, marketing sites, SaaS platforms, dashboards, and Web3 apps. Working with founders and businesses across Africa and the diaspora.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://clintdoesdev.site"),
  openGraph: {
    title,
    description,
    url: "https://clintdoesdev.site",
    siteName: "Clinton | Full-stack & Web3 Developer",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

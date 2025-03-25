import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZebraScapes | Expert Landscaping & Tree Care in Arizona",
  description: "Transform your outdoor space with ZebraScapes' professional landscaping, tree care, and outdoor living services. Contact us today!",
  authors: [{ name: "ZebraScapes" }],
  keywords: ["landscaping", "tree care", "outdoor living", "Arizona", "Prescott", "ZebraScapes"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://ext.same-assets.com/3216539116/1983894660.png" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

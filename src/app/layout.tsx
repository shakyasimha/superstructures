import type { Metadata } from "next";

import "@/app/ui/globals.css";
import { montserrat } from "@/app/ui/fonts";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SUPERSTRUCTURES",  
  description: "SUPERSTRUCTURES - ARCHITECTS AND ENGINEERS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

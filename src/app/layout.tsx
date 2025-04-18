import type { Metadata } from "next";

import "@/app/ui/globals.css";
import { montserrat } from "@/app/ui/fonts";

import Navbar from "@/components/Navbar";

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
        {children}
      </body>
    </html>
  );
}

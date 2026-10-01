import "./globals.css";

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AU-IBAR Awareness Walk",
  description: "Join the AU-IBAR Awareness Walk — a 5KM community walk at AU-IBAR Campus, Westlands on 28 Nov 2026. Register as a participant, vendor, exhibitor or partner."
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

import "./globals.css";

import type { Metadata } from "next";
import { Footprints } from "lucide-react";
import { ModalProvider } from "@/components/ModalContext";
import LogoBanner from "@/components/LogoBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegisterButton from "@/components/RegisterButton";

export const metadata: Metadata = {
  title: "AU-IBAR Awareness Walk",
  description: "Join the AU-IBAR Awareness Walk — a 5KM community walk at AU-IBAR Campus, Westlands on 28 Nov 2026. Register as a participant, vendor, exhibitor or partner."
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <ModalProvider>
          <LogoBanner />
          <Navbar />
          {children}
          <Footer />
          <RegisterButton type="participant" className="floating-join"><span className="paw"><Footprints /></span> JOIN THE WALK</RegisterButton>
        </ModalProvider>
      </body>
    </html>
  );
}

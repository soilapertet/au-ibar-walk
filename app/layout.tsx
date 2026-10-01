import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AU-IBAR Awareness Walk",
  description: "Join the AU-IBAR Awareness Walk — a 5KM community walk at AU-IBAR Campus, Westlands on 28 Nov 2026. Register as a participant, vendor, exhibitor or partner."
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}

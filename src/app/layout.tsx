import Footer from "@/components/layout/Footer";
import MyNavbar from '@/components/layout/MyNavbar';
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // pick the weights you need
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Long Island’s Best General Contractor for Masonry, Concrete, Pavers, and Asphalt | JPM and Sons",
  description:
    "Your trusted source for masonry, concrete, asphalt, and home renovation services throughout Long Island.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <MyNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

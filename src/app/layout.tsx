import Footer from "@/components/layout/Footer";
import MyNavbar from "@/components/layout/MyNavbar";
import ReCaptchaProviderWrapper from "@/components/ReCaptchaProviderWrapper";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
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
      <head>
        <link rel="icon" href="/title_icon.png" type="image/png" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <ReCaptchaProviderWrapper>
          <MyNavbar />
          {children}
          <Footer />
        </ReCaptchaProviderWrapper>
      </body>
    </html>
  );
}

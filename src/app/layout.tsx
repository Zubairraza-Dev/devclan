import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "DevClan",
  description: "IT Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full p-0 m-0 overflow-x-hidden">
        <Suspense
          fallback={
            <div>
              <p>Loading</p>
            </div>
          }
        >
          <Navbar />
        </Suspense>
        {children}
        <Footer />
      </body>
    </html>
  );
}

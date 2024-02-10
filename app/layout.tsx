import type { Metadata } from "next";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Na West Weather",
  description: "Weather forecast for Na West",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1F1F1F] text-white dark`} >
        <Header />
        {children}
        </body>
    </html>
  );
}

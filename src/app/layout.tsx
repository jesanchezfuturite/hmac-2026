import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Hospitales MAC",
  description: "Centro de Alta Especialidad Médica, Imagenología y Laboratorio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-full flex flex-col bg-slate-50 text-[#1A1A1A]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

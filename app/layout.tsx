import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Update your global metadata here!
export const metadata: Metadata = {
  title: "LearnIQ | Advanced E-Learning Platform",
  description: "Master the skills of tomorrow, today. Expert-led courses in development, design, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}
      >
        {/* Because we use Route Groups like (dashboard) and (marketing), 
          we just render children here. The specific Layouts (Navbar, Sidebar) 
          will wrap these children dynamically based on the folder! 
        */}
        {children}
      </body>
    </html>
  );
}
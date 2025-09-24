import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";

import "./globals.css";
import { Navigation } from "@/components/navigation/navigation";
import {  Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Modern developer portfolio showcasing projects and skills",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Navigation />
        <Suspense fallback={"loading..."}>{children}</Suspense>
        <Analytics />
        <Toaster
        position="top-center"
        richColors
        theme="dark"
        />
      </body>
    </html>
  );
}

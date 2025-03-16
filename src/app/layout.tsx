import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TypeScript Mock Generator | Generate Data From Types",
  description: "A powerful tool for generating realistic mock data from TypeScript type definitions. Support for interfaces, type aliases, and complex types.",
  keywords: "TypeScript, Mock Data, Type Generator, Development Tool, JSON Generator",
  authors: [{ name: "TypeScript Mock Generator" }],
  openGraph: {
    title: "TypeScript Mock Generator",
    description: "Generate realistic mock data from TypeScript type definitions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="mytheme">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

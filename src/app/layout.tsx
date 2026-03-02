import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shiraz Chen Azulay — Interior Design",
  description:
    "Calm, timeless interiors shaped by light and material.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

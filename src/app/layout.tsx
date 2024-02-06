import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
config.autoAddCss = false; // Disable the automatic CSS injection

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Generated",
  description: "Generated is a generator web application created by Fun117. This app provides functionality to generate something.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      {children}
    </html>
  );
}

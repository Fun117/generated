import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import Head from "next/head";
config.autoAddCss = false; // Disable the automatic CSS injection

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  generator: "Next.js",
  
  title: "Generated",
  description: "Generated is a generator web application created by Fun117. This app provides functionality to generate something.",

  appleWebApp: { capable: true, title: "Generated", statusBarStyle: "black-translucent" },
  verification: { "me": "https://github.com/Fun117" },
  publisher: "Vercel",
  creator: "Fun117",
  authors: [{ name: "Fun117", url: "https://github.com/Fun117" }],

  category: "generator",
  classification: "generator",
  keywords: "Vercel,generator,password,fun117,Security",

  applicationName: "Generated",
  openGraph: {
    type: "website",
    url: "https://generated.vercel.app/",
    title: "Generated",
    description: "Generated is a generator web application created by Fun117. This app provides functionality to generate something.",
    siteName: "Generated",
    images: [{
      url: "/assets/img/og:image.png",
    }],
  },

  bookmarks: "https://generated.vercel.app/"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <Head>
        <meta property="og:title" content="Generated"/>
        <meta property="og:description" content="Generated is a generator web application created by Fun117. This app provides functionality to generate something."/>
        <meta property="og:image" content="/assets/img/og:image.png"/>
        <meta property="og:url" content="https://generated.vercel.app/"/>
      </Head>
      {children}
    </html>
  );
}

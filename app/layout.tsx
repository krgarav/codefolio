import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Kumar Gaurav | Fullstack Developer - MERN Stack & Electron.js",
  description:
    "Kumar Gaurav - Experienced fullstack developer specializing in MERN stack (MongoDB, Express.js, React, Node.js) and Electron.js desktop applications. Building scalable web and desktop solutions.",
  keywords: [
    "Kumar Gaurav",
    "MERN",
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "Electron.js",
    "Fullstack Developer",
    "Desktop Applications",
  ],
  authors: [{ name: "Kumar Gaurav" }],
  icons: {
    // icon: [
    //   {
    //     url: '/icon-light-32x32.png',
    //     media: '(prefers-color-scheme: light)',
    //   },
    //   {
    //     url: '/icon-dark-32x32.png',
    //     media: '(prefers-color-scheme: dark)',
    //   },
    //   {
    //     url: '/icon.svg',
    //     type: 'image/svg+xml',
    //   },
    // ],
    // apple: '/apple-icon.png',

    icon: "/vite.ico",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1f2e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

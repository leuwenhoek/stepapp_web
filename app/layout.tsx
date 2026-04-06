import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "StepApp | NeoBrutalism UI Library",
  description: "A NeoBrutalism styled React + TailwindCSS UI library for building bold, modern web apps.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white text-black font-sans" suppressHydrationWarning>
        <Header />
        <main className="flex-grow relative overflow-hidden" suppressHydrationWarning>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

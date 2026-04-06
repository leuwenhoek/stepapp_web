import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MYSteps | Track Your Daily Steps",
  description: "A simple NeoBrutalism styled step counter to track your daily activity.",
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
      </body>
    </html>
  );
}


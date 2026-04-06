"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b-4 border-black font-bold">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-white border-4 border-black rounded-full flex items-center justify-center neo-brutalism group-hover:bg-primary transition-colors">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <span className="text-2xl font-black">MYSteps</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-black/80">
          <Link href="/about" className="hover:text-black transition-colors">about developer</Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="w-11 h-11 bg-white border-4 border-black flex items-center justify-center neo-brutalism hover:bg-primary shadow-[4px_4px_0px_0px_#000000]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </button>
          <button className="w-11 h-11 bg-white border-4 border-black flex items-center justify-center neo-brutalism hover:bg-[#FFE000] shadow-[4px_4px_0px_0px_#000000]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </button>
        </div>
      </div>
    </header>
  );
}

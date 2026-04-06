import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-white text-black py-16 mt-auto font-bold" suppressHydrationWarning>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white border-2 border-black rounded-full flex items-center justify-center neo-brutalism">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div className="text-2xl font-black">StepApp</div>
          </Link>
          <p className="opacity-60 font-mono text-sm">© 2026 RETRO_UI_DESIGN_SYSTEM</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-white border-4 border-black px-6 py-2 neo-brutalism font-black hover:bg-primary shadow-[4px_4px_0px_0px_#000000]">
            SOURCE_CODE
          </button>
          <button className="bg-white border-4 border-black px-6 py-2 neo-brutalism font-black hover:bg-secondary shadow-[4px_4px_0px_0px_#000000]">
            COMMUNITY
          </button>
        </div>
      </div>
    </footer>
  );
}

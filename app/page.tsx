"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [steps, setSteps] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("stepapp-steps");
    if (saved) setSteps(parseInt(saved, 10));
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("stepapp-steps", steps.toString());
    }
  }, [steps, isLoaded]);

  const increment = () => setSteps((s) => s + 1);
  const decrement = () => setSteps((s) => Math.max(0, s - 1));
  const reset = () => setSteps(0);

  return (
    <div className="relative min-h-screen bg-white text-black overflow-hidden" suppressHydrationWarning>
      <div className="absolute inset-0 pointer-events-none">
        <div className="perspective-grid opacity-20" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-8 pb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="flex-1 text-left space-y-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E2E2E2] border border-black/10 rounded-sm font-bold text-[#666666] text-sm cursor-default">
              <span>STEPAPP</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3m5.5-3L11 12.5M15 11l-4.5 4.5M20 4s-7 1-12 12M20 4s1 7-12 12M20 4l-4 4"/></svg>
            </div>

            <h1 className="text-6xl md:text-[5.5rem] font-black leading-[1.1] tracking-tight">
              Track your <br />
              <span className="drop-shadow-[6px_6px_0px_#FF5F1F] text-black uppercase">daily steps!</span>
            </h1>

            <p className="text-xl md:text-2xl font-medium max-w-2xl text-black/60 leading-relaxed tracking-tight">
              A simple NeoBrutalism styled step counter. Click to add or remove steps and track your daily activity.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button 
                onClick={increment}
                className="bg-primary text-black px-8 py-4 text-xl font-black border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all active:translate-x-[4px] active:translate-y-[4px]"
              >
                + ADD STEPS
              </button>
              
              <button 
                onClick={decrement}
                className="bg-white text-black px-8 py-4 text-xl font-black border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all active:translate-x-[4px] active:translate-y-[4px]"
              >
                - REMOVE
              </button>
            </div>
          </div>

          <div className="flex-1 relative h-[600px] w-full max-w-[600px]">
            <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />

            <div className="absolute top-[10%] left-[5%] w-[80%] h-auto z-20 animate-float">
              <div className="relative group perspective-1000">
                <div className="neo-brutalism bg-white p-8 flex flex-col items-center justify-center">
                  <span className="text-6xl mb-4">👟</span>
                  <span className="text-sm font-black uppercase tracking-widest text-black/50">Today&apos;s Steps</span>
                  <span className="text-7xl md:text-[6rem] font-black my-4 drop-shadow-[4px_4px_0px_#FF5F1F]">
                    {steps.toLocaleString()}
                  </span>
                  <button 
                    onClick={reset}
                    className="mt-2 px-4 py-2 bg-secondary border-2 border-black font-bold text-sm hover:bg-red-500 hover:text-white transition-colors"
                  >
                    RESET
                  </button>
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#FF5F1F] border-4 border-black flex items-center justify-center neo-brutalism -rotate-12">
                  ✨
                </div>
              </div>
            </div>

            <div className="absolute bottom-[5%] right-0 w-[55%] h-auto z-30 animate-float-delayed">
              <div className="relative group">
                <Image 
                  src="/boombox.png" 
                  alt="Retro Boombox" 
                  width={350} 
                  height={250} 
                  className="w-full h-auto neo-brutalism -rotate-6 hover:rotate-0 transition-all duration-500"
                />
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-secondary border-4 border-black flex items-center justify-center neo-brutalism rotate-12 text-white">
                  🎵
                </div>
              </div>
            </div>
            
            <div className="absolute top-[40%] right-[10%] text-6xl rotate-12 opacity-50 drop-shadow-[4px_4px_0px_#FF5F1F]">⚡</div>
            <div className="absolute bottom-[25%] left-[5%] text-4xl -rotate-12 opacity-50 drop-shadow-[4px_4px_0px_#FF5F1F]">🔥</div>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 py-12 border-t-4 border-black">
        <div className="flex flex-col items-center text-center space-y-6 mb-16">
          <h2 className="text-5xl font-black">Daily Goals</h2>
          <p className="text-xl font-bold text-black/60 max-w-2xl">
            Stay motivated and reach your daily step goals. Keep moving!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border-4 border-black p-8 neo-brutalism shadow-[8px_8px_0px_0px_#000000] rotate-[-1deg] hover:rotate-0 transition-transform">
            <span className="text-4xl mb-6 block">🚶</span>
            <h3 className="text-2xl font-black mb-4">1,000</h3>
            <p className="font-bold opacity-60">Light Activity - Easy start to your day</p>
          </div>
          <div className="bg-primary border-4 border-black p-8 neo-brutalism shadow-[8px_8px_0px_0px_#000000] translate-y-4 hover:translate-y-0 transition-transform">
            <span className="text-4xl mb-6 block">🏃</span>
            <h3 className="text-2xl font-black mb-4">5,000</h3>
            <p className="font-black opacity-80">Moderate Activity - Good for staying healthy</p>
          </div>
          <div className="bg-white border-4 border-black p-8 neo-brutalism shadow-[8px_8px_0px_0px_#000000] rotate-[1deg] hover:rotate-0 transition-transform">
            <span className="text-4xl mb-6 block">💪</span>
            <h3 className="text-2xl font-black mb-4">10,000</h3>
            <p className="font-bold opacity-60">Active Lifestyle - Gold standard for fitness</p>
          </div>
        </div>
      </section>
    </div>
  );
}

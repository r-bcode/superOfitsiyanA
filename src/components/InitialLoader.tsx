'use client';

import { useEffect, useState } from "react";
import RBLogo from "./logo";

export default function InitialLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      
      // fade-out animatsiyasi tugagandan keyin butunlay o‘chirib tashlaymiz
      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, 600); // fade-out animatsiyasi davomiyligi bilan moslashtiring

      return () => clearTimeout(removeTimer);
    }, 1800); // umumiy ko‘rinish vaqti (1.8 soniya)

    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return <>{children}</>;
  }

  return (
    <div
      className={`
        fixed inset-0 z-[9999] flex flex-col items-center justify-center
        bg-gradient-to-b from-black via-black to-gray-950
        transition-opacity duration-600 ease-in-out
        ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}
      `}
    >
      <div className="relative flex flex-col items-center gap-8 sm:gap-10">
        {/* Logo + scale + pulse kombinatsiyasi */}
        <div
          className={`
            transition-all duration-1000 ease-out
            ${fadeOut ? 'scale-75 opacity-0' : 'scale-100 opacity-100'}
          `}
        >
          <div className="relative">
        <RBLogo className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 animate-pulse" />
            
            {/* Yorqinlik effekti */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                           animate-shimmer rounded-full blur-xl opacity-70" />
          </div>
        </div>

        {/* Progress / loading hint */}
        <div className="w-48 sm:w-64 h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-600 
                       rounded-full animate-loading-progress"
          />
        </div>

        {/* Kichik matn (ixtiyoriy) */}
        <p className="text-gray-400 text-sm tracking-wider font-light animate-pulse">
          Preparing experience...
        </p>
      </div>

      {/* Qo‘shimcha fon effektlari */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(236,72,153,0.12),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.12),transparent_40%)]" />
      </div>
    </div>
  );
}
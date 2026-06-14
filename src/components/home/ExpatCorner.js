"use client";

import Link from "next/link";

export default function ExpatCorner() {
  return (
    <section
      id="expat"
      className="relative bg-[#111638] text-white py-24 px-6 md:px-12 overflow-hidden border-b border-white/5"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column (3D Book Mockup) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-64 aspect-[3/4] bg-[#0c102a] rounded-[18px] border-2 border-[#f1a501] shadow-[25px_25px_60px_rgba(0,0,0,0.4)] overflow-hidden p-6 flex flex-col justify-between text-left transform -rotate-3 hover:rotate-0 transition-transform duration-500 cursor-default">
            {/* Cover layout details */}
            <div className="absolute top-0 left-0 w-2.5 h-full bg-[#f1a501]" />{" "}
            {/* Book binding border */}
            <div className="pl-3">
              <span className="text-[10px] uppercase font-black tracking-widest text-[#f1a501] block">
                Study in the
              </span>
              <h3 className="font-serif text-2xl font-bold leading-tight text-white mt-4">
                Philippines
                <br />
                <span className="text-[#f1a501]">DIY Starter Kit</span>
              </h3>
              <div className="w-12 h-[2px] bg-white/20 mt-4" />
            </div>
            <div className="pl-3">
              <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">
                6 Modules · 5 Bonus Tools ·
              </p>
              <p className="text-xs text-gray-300 mt-1 font-semibold">
                Consultation included.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#f1a501]">
            Prefer to do it yourself?
          </span>
          <h2 className="font-serif text-2xl  font-black text-white leading-tight">
            The Study in the Philippines DIY Starter Kit
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-gray-300 font-medium">
            A complete, self-guided handbook covering school selection, the 9(F)
            student visa, arrival, and working rights — without paying full
            agency fees.
          </p>

          <ul className="flex flex-row flex-wrap gap-4 mt-2">
            <li className="flex items-start gap-3 text-sm text-gray-300">
              <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                ✔
              </span>
              School selection
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-300">
              <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                ✔
              </span>
              Visa process
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-300">
              <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                ✔
              </span>
              Document checklist 
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-300">
              <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                ✔
              </span>
              Arrival guide
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-300">
              <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                ✔
              </span>
              Working rights 
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-300">
              <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                ✔
              </span>
             30 FAQs answered
            </li>
          </ul>

          <div className="flex items-center gap-6 mt-6 border-t border-white/10 pt-6">
            <div>
              <span className="text-xs text-gray-400 block font-semibold uppercase">
                one-time · 1-on-1 consultation included
              </span>
              <span className="text-2xl font-black text-white">$49.99</span>
            </div>
            <a
              href="https://payhip.com/b/ArLHI"
              target="_blank"
              rel="noopener noreferrer"
              id="expat-consult-btn"
              className="px-8 py-3.5 bg-[#f1a501] hover:bg-amber-600 text-white font-bold rounded-full transition-all duration-300 shadow-md shadow-[#f1a501]/10 text-center"
            >
              Get the guide
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

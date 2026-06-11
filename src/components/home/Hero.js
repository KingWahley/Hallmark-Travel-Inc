'use client';

import Link from 'next/link';
import { GraduationCap, Plane, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-[#1b2e4b] text-white pt-44 pb-28 px-6 md:px-12 overflow-hidden border-b border-white/5">
      
      {/* Ambient Background Glows matching the reference design */}
      <div className="absolute right-[-10%] top-[-10%] w-[550px] h-[550px] rounded-full bg-[#2c4266]/35 blur-[120px] pointer-events-none z-0" />
      <div className="absolute left-[-10%] bottom-[-10%] w-[450px] h-[450px] rounded-full bg-[#1e2a40]/45 blur-[100px] pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Hero Left Content */}
        <div className="w-full lg:max-w-4xl flex flex-col gap-6 text-left">
          
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#cea447]">
            TRUSTED FOR 10+ YEARS · MANILA, PHILIPPINES
          </span>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold leading-[1.08] tracking-tight">
            Your partner to<br />
            <span className="italic font-medium text-[#cea447]">study</span>
            <span className="inline-flex items-center justify-center w-11 h-11 md:w-13 md:h-13 rounded-full border-2 border-white text-white font-serif font-black mx-3 align-middle text-xl md:text-2xl select-none">
              &amp;
            </span>
            <span className="italic font-medium text-[#cea447]">travel</span> the<br />
            world
          </h1>

          {/* Green Banner Message with decorative background curves */}
          <div className="relative bg-[#2c8979] text-white rounded-[20px] p-6 sm:p-8 shadow-lg text-[14px] sm:text-[15px] font-medium leading-relaxed max-w-xl overflow-hidden border border-[#2c8979]/20">
            <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-white/10 pointer-events-none" />
            <div className="absolute right-4 -top-10 w-28 h-28 rounded-full bg-white/5 pointer-events-none" />
            
            <p className="relative z-10">
              From placing international students in top Philippine universities to crafting unforgettable journeys — we handle the details so you can focus on the adventure. Where do you want to go?
            </p>
          </div>

          {/* Side-by-Side Admission & Tour Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mt-4 w-full">
            
            {/* Study Card */}
            <div className="bg-[#283a56] rounded-[20px] p-6 sm:p-8 border-t-4 border-t-[#2c8979] border-x border-b border-white/10 flex flex-col justify-between hover:bg-[#283a56]/90 transition-all duration-300">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-[14px] bg-[#2c8979] flex items-center justify-center text-white flex-shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white leading-tight">
                    Study in the Philippines
                  </h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-6 font-medium">
                  School placement, student visa, and full arrival support for international students.
                </p>
              </div>
              <Link 
                href="/contact" 
                id="hero-apply-link"
                className="inline-flex items-center gap-1.5 text-xs text-[#2c8979] hover:text-[#3db29f] font-bold uppercase tracking-wider transition-colors duration-200"
              >
                Explore education <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Travel Card */}
            <div className="bg-[#283a56] rounded-[20px] p-6 sm:p-8 border-t-4 border-t-[#cea447] border-x border-b border-white/10 flex flex-col justify-between hover:bg-[#283a56]/90 transition-all duration-300">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-[14px] bg-[#cea447] flex items-center justify-center text-white flex-shrink-0">
                    <Plane className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white leading-tight flex items-center gap-1.5 flex-wrap">
                    Travel
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-white text-white font-serif font-black text-xs select-none">
                      &amp;
                    </span>
                    Tour Packages
                  </h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-6 font-medium">
                  Holidays, group tours, corporate travel, and tailor-made trips worldwide.
                </p>
              </div>
              <Link 
                href="/contact" 
                id="hero-tours-link"
                className="inline-flex items-center gap-1.5 text-xs text-[#cea447] hover:text-[#dec071] font-bold uppercase tracking-wider transition-colors duration-200"
              >
                Explore travel <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  if (pathname && pathname.startsWith('/dashboard')) {
    return null;
  }
  return (
    <footer className="bg-white pt-24 pb-12 overflow-hidden border-t border-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 text-left mb-16">
          
          {/* Logo Brand Info */}
          <div className="flex flex-col gap-4 col-span-1 md:col-span-1.5">
            <span className="font-extrabold text-3xl text-[#181e4b] tracking-tight">
              Hallmark<span className="text-orange-accent">.</span>
            </span>
            <p className="text-[13px] leading-relaxed text-[#5e6282] font-light max-w-xs">
              Book your trip and relocation in minutes, get full control for much longer.
            </p>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-[17px] text-[#080809] tracking-normal">
              Company
            </h4>
            <ul className="flex flex-col gap-3 text-[14.5px] text-[#5e6282] font-medium">
              <li><Link href="/" className="hover:text-orange-accent transition-colors">About</Link></li>
              <li><Link href="/" className="hover:text-orange-accent transition-colors">Careers</Link></li>
              <li><Link href="/" className="hover:text-orange-accent transition-colors">Mobile</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-[17px] text-[#080809] tracking-normal">
              Contact
            </h4>
            <ul className="flex flex-col gap-3 text-[14.5px] text-[#5e6282] font-medium">
              <li><Link href="/" className="hover:text-orange-accent transition-colors">Help/FAQ</Link></li>
              <li><Link href="/" className="hover:text-orange-accent transition-colors">Press</Link></li>
              <li><Link href="/" className="hover:text-orange-accent transition-colors">Affilates</Link></li>
            </ul>
          </div>

          {/* More Column */}
          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-[17px] text-[#080809] tracking-normal">
              More
            </h4>
            <ul className="flex flex-col gap-3 text-[14.5px] text-[#5e6282] font-medium">
              <li><Link href="/" className="hover:text-orange-accent transition-colors">Airlinefees</Link></li>
              <li><Link href="/" className="hover:text-orange-accent transition-colors">Airlines</Link></li>
              <li><Link href="/" className="hover:text-orange-accent transition-colors">Low fare tips</Link></li>
            </ul>
          </div>

          {/* App / Social Column */}
          <div className="flex flex-col gap-5 col-span-1 md:col-span-1.2 justify-start items-start">
            
            {/* Social icons bubbles matching Jadoo */}
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md text-primary hover:bg-orange-accent hover:text-white transition-all"
                aria-label="Facebook"
              >
                <span className="font-bold text-sm">f</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-tr from-orange-accent to-gold-accent text-white shadow-md hover:scale-105 transition-all"
                aria-label="Instagram"
              >
                <span className="font-bold text-[11px] uppercase tracking-tighter">ig</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md text-primary hover:bg-orange-accent hover:text-white transition-all"
                aria-label="Twitter"
              >
                <span className="font-bold text-sm">t</span>
              </a>
            </div>

            <span className="text-[15px] font-medium text-[#5e6282] tracking-wide mt-2">
              Discover our app
            </span>

            {/* Badges icons block */}
            <div className="flex items-center gap-2">
              <a href="#" className="h-9 w-24 relative block overflow-hidden rounded-full border border-gray-200 bg-black flex items-center justify-center hover:scale-105 transition-all">
                <span className="text-[8px] text-white font-mono uppercase tracking-tighter">Google Play</span>
              </a>
              <a href="#" className="h-9 w-24 relative block overflow-hidden rounded-full border border-gray-200 bg-black flex items-center justify-center hover:scale-105 transition-all">
                <span className="text-[8px] text-white font-mono uppercase tracking-tighter">App Store</span>
              </a>
            </div>

          </div>

        </div>

        {/* Copy */}
        <div className="border-t border-gray-100 pt-8 flex items-center justify-center">
          <span className="text-[12.5px] text-[#5e6282] font-medium">
            All rights reserved @hallmarktravel.com
          </span>
        </div>

      </div>
    </footer>
  );
}

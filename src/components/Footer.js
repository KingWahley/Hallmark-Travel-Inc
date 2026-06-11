'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  if (pathname && pathname.startsWith('/dashboard')) {
    return null;
  }
  return (
    <footer className="bg-[#111638] text-white pt-20 pb-12 overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 text-left mb-16">
          
          {/* Logo Brand Info */}
          <div className="flex flex-col gap-4 md:col-span-4 col-span-1">
            <span className="flex items-center gap-3 font-extrabold text-2xl text-white tracking-tight">
              <img 
                src="/logo.png" 
                alt="Hallmark Travel Inc. Logo" 
                className="h-10 w-auto object-contain brightness-0 invert" 
              />
              <span>Hallmark <span className="text-[#0f766e]">Travel Inc.</span></span>
            </span>
            <p className="text-[14px] leading-relaxed text-gray-300 max-w-sm">
              Your trusted partner to study and travel the world. We make global mobility simple, structured, and stress-free for scholars and travelers worldwide.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 text-white mt-2">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#0f766e] transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#0f766e] transition-all duration-300"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#0f766e] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="flex flex-col gap-5 md:col-span-3 col-span-1">
            <h4 className="font-bold text-[17px] text-white tracking-normal border-b border-white/10 pb-2">
              Services
            </h4>
            <ul className="flex flex-col gap-3 text-[14.5px] text-gray-300">
              <li><Link href="/contact" className="hover:text-[#0f766e] transition-colors">Study Abroad Placement</Link></li>
              <li><Link href="/contact" className="hover:text-[#0f766e] transition-colors">Travel & Tours Packages</Link></li>
              <li><Link href="/contact" className="hover:text-[#0f766e] transition-colors">Visa Consultation</Link></li>
              <li><Link href="/contact" className="hover:text-[#0f766e] transition-colors">In-Country Visa Services</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-5 md:col-span-2 col-span-1">
            <h4 className="font-bold text-[17px] text-white tracking-normal border-b border-white/10 pb-2">
              Company
            </h4>
            <ul className="flex flex-col gap-3 text-[14.5px] text-gray-300">
              <li><Link href="/about" className="hover:text-[#0f766e] transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-[#0f766e] transition-colors">Blog / Guides</Link></li>
              <li><Link href="/contact" className="hover:text-[#0f766e] transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-[#0f766e] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col gap-5 md:col-span-3 col-span-1">
            <h4 className="font-bold text-[17px] text-white tracking-normal border-b border-white/10 pb-2">
              Contact
            </h4>
            <ul className="flex flex-col gap-3 text-[13.5px] text-gray-300">
              <li>
                <span className="block text-[10px] uppercase font-black tracking-wider text-[#0f766e]">Email Address</span>
                <span className="text-white font-semibold">info@hallmarktravel.com</span>
              </li>
              <li>
                <span className="block text-[10px] uppercase font-black tracking-wider text-[#0f766e]">HQ Address</span>
                <span className="text-white font-semibold block">Taguig City, Metro Manila, Philippines</span>
              </li>
              <li>
                <span className="block text-[10px] uppercase font-black tracking-wider text-[#0f766e]">Hotline</span>
                <span className="text-white font-semibold block">+63 912 345 6789</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copy */}
        <div className="border-t border-white/10 pt-8 flex items-center justify-between flex-wrap gap-4 text-gray-400 text-sm">
          <span>
            © 2026 Hallmark Travel Inc. All rights reserved.
          </span>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full bg-[#0f766e] text-white flex items-center justify-center shadow-lg hover:bg-[#0b5b54] transition-all duration-300"
            aria-label="Scroll to top"
          >
            ▲
          </button>
        </div>

      </div>
    </footer>
  );
}

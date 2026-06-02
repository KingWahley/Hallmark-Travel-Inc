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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-left mb-16">
          
          {/* Logo Brand Info */}
          <div className="flex flex-col gap-4 col-span-1">
            <span className="flex items-center gap-3 font-extrabold text-2xl text-[#181e4b] tracking-tight">
              <img 
                src="/logo.png" 
                alt="Hallmark Travel Inc. Logo" 
                className="h-10 w-auto object-contain" 
              />
              <span>Hallmark</span>
            </span>
            <p className="text-[13px] leading-relaxed text-[#5e6282] font-semibold max-w-xs">
              Hallmark Travel Inc. is a premier global mobility partner, providing high-end travel logistics, visa support, relocation guidance, and seamless global immigration.
            </p>
          </div>

          {/* Company / Navigation Column */}
          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-[17px] text-[#080809] tracking-normal">
              Company
            </h4>
            <ul className="flex flex-col gap-3 text-[14.5px] text-[#5e6282] font-medium">
              <li><Link href="/" className="hover:text-orange-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-orange-accent transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-orange-accent transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-orange-accent transition-colors">Book Consultation</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-[17px] text-[#080809] tracking-normal">
              Contact Channels
            </h4>
            <ul className="flex flex-col gap-3 text-[13px] text-[#5e6282] font-medium">
              <li className="leading-relaxed">
                <span className="block text-[10px] uppercase font-black tracking-wider text-orange-accent">Official Email</span>
                <span className="text-primary font-semibold">support@hallmarktravel.com</span>
              </li>
              <li className="leading-relaxed">
                <span className="block text-[10px] uppercase font-black tracking-wider text-gold-accent">Philippines HQ</span>
                <span className="text-primary font-semibold text-xs block">Taguig, Metro Manila</span>
                <span className="text-[11px] text-secondary font-medium block mt-0.5">PH: +63 (906) 378 5826</span>
                <span className="text-[11px] text-secondary font-medium block">PH: +63 (949) 365 9365</span>
              </li>
              <li className="leading-relaxed">
                <span className="block text-[10px] uppercase font-black tracking-wider text-teal-600">Nigeria Branch</span>
                <span className="text-primary font-semibold text-xs block">Owerri, Imo State</span>
                <span className="text-[11px] text-secondary font-medium block mt-0.5">NG: +234 803 321 7084</span>
              </li>
            </ul>
          </div>

          {/* Social & Connect Column */}
          <div className="flex flex-col gap-5 justify-start items-start">
            <h4 className="font-bold text-[17px] text-[#080809] tracking-normal">
              Connect With Us
            </h4>
            
            {/* Social icons bubbles matching Jadoo */}
            <div className="flex items-center gap-4 text-primary">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md hover:bg-orange-accent hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-tr from-orange-accent to-gold-accent text-white shadow-md hover:scale-110 transition-all duration-300 animate-pulse"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md hover:bg-orange-accent hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
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

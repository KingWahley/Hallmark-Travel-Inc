'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, Globe, MapPin } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();

  if (pathname && pathname.startsWith('/dashboard')) {
    return null;
  }
  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-12 overflow-hidden font-sans border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 text-left mb-16">
          
          {/* Logo Brand Info */}
          <div className="flex flex-col gap-4 md:col-span-4 col-span-1">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-2.5 shadow-sm">
              <img 
                src="/logo.png" 
                alt="Hallmark Travel Inc. Logo" 
                className="h-full w-auto object-contain" 
              />
            </div>
            <h4 className="font-serif text-xl font-bold text-white mt-2">
              Hallmark Travel Inc.
            </h4>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs font-medium">
              Your trusted partner with more than 10 years of experience helping international students study in the Philippines and travellers explore the world.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-2">
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/[0.06] hover:bg-[#1a7f6e] text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/[0.06] hover:bg-[#1a7f6e] text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://wa.me/639661389726" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/[0.06] hover:bg-[#1a7f6e] text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 0 0 1.333 4.993L2 22l5.13-1.347a9.96 9.96 0 0 0 4.88 1.28c5.508 0 9.99-4.479 9.991-9.986.002-5.507-4.48-9.985-9.989-9.985zm7.154 14.137c-.31.868-1.787 1.62-2.477 1.704-.69.083-1.554.084-2.502-.22a10.99 10.99 0 0 1-5.111-3.237c-.328-.328-.624-.68-.888-1.054a11.164 11.164 0 0 1-1.637-3.155c-.276-.906-.296-1.764-.08-2.482.21-.698.814-1.22 1.135-1.536.321-.316.643-.314.857-.314h.6c.19 0 .428.007.618.455.19.448.653 1.594.71 1.708.058.113.095.245.02.395-.077.15-.156.324-.265.45-.11.127-.23.284-.33.398-.108.125-.224.26-.096.48.128.22.569.939 1.22 1.52.839.75 1.543 1.018 1.763 1.128.22.11.35.093.48-.057.13-.15.565-.66.715-.886.15-.226.3-.188.508-.113.208.075 1.32.622 1.547.735.227.113.378.17.435.264.057.094.057.546-.253 1.414z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Education Column */}
          <div className="flex flex-col gap-5 md:col-span-2 col-span-1">
            <h4 className="font-bold text-base text-white tracking-normal">
              Education
            </h4>
            <ul className="flex flex-col gap-3 text-sm font-medium text-gray-400">
              <li><Link href="/#resources" className="hover:text-white transition-colors">Study in the Philippines</Link></li>
              <li><Link href="/#estimator" className="hover:text-white transition-colors">Cost calculator</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">DIY Starter Kit</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Student visa help</Link></li>
            </ul>
          </div>

          {/* Travel Column */}
          <div className="flex flex-col gap-5 md:col-span-2 col-span-1">
            <h4 className="font-bold text-base text-white tracking-normal">
              Travel
            </h4>
            <ul className="flex flex-col gap-3 text-sm font-medium text-gray-400">
              <li><Link href="/contact" className="hover:text-white transition-colors">Holiday packages</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Group & corporate</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Custom tours</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Get a quote</Link></li>
            </ul>
          </div>

          {/* Get in touch Column */}
          <div className="flex flex-col gap-5 md:col-span-4 col-span-1">
            <h4 className="font-bold text-base text-white tracking-normal">
              Get in touch
            </h4>
            <ul className="flex flex-col gap-4 text-sm font-medium text-gray-400">
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 fill-current text-white flex-shrink-0 mt-0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 0 0 1.333 4.993L2 22l5.13-1.347a9.96 9.96 0 0 0 4.88 1.28c5.508 0 9.99-4.479 9.991-9.986.002-5.507-4.48-9.985-9.989-9.985zm7.154 14.137c-.31.868-1.787 1.62-2.477 1.704-.69.083-1.554.084-2.502-.22a10.99 10.99 0 0 1-5.111-3.237c-.328-.328-.624-.68-.888-1.054a11.164 11.164 0 0 1-1.637-3.155c-.276-.906-.296-1.764-.08-2.482.21-.698.814-1.22 1.135-1.536.321-.316.643-.314.857-.314h.6c.19 0 .428.007.618.455.19.448.653 1.594.71 1.708.058.113.095.245.02.395-.077.15-.156.324-.265.45-.11.127-.23.284-.33.398-.108.125-.224.26-.096.48.128.22.569.939 1.22 1.52.839.75 1.543 1.018 1.763 1.128.22.11.35.093.48-.057.13-.15.565-.66.715-.886.15-.226.3-.188.508-.113.208.075 1.32.622 1.547.735.227.113.378.17.435.264.057.094.057.546-.253 1.414z"/>
                </svg>
                <span>WhatsApp: +63 966 138 9726</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span>admission@hallmarkconsultancy.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span>hallmarkconsultancy.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span>#250 Northbay Blvd., Navotas City, Metro Manila</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copy */}
        <div className="border-t border-white/5 pt-8 mt-12 flex items-center justify-between flex-wrap gap-4 text-gray-500 text-xs font-semibold">
          <span>
            © {new Date().getFullYear()} Hallmark Travel Inc. All rights reserved.
          </span>
          <span>
            Registered Philippine company · Independent education &amp; travel consultancy
          </span>
        </div>
      </div>

      {/* Floating WhatsApp FAB */}
      <a 
        href="https://wa.me/639661389726" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-xl shadow-black/15 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group"
        aria-label="Chat with us on WhatsApp"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 0 0 1.333 4.993L2 22l5.13-1.347a9.96 9.96 0 0 0 4.88 1.28c5.508 0 9.99-4.479 9.991-9.986.002-5.507-4.48-9.985-9.989-9.985zm7.154 14.137c-.31.868-1.787 1.62-2.477 1.704-.69.083-1.554.084-2.502-.22a10.99 10.99 0 0 1-5.111-3.237c-.328-.328-.624-.68-.888-1.054a11.164 11.164 0 0 1-1.637-3.155c-.276-.906-.296-1.764-.08-2.482.21-.698.814-1.22 1.135-1.536.321-.316.643-.314.857-.314h.6c.19 0 .428.007.618.455.19.448.653 1.594.71 1.708.058.113.095.245.02.395-.077.15-.156.324-.265.45-.11.127-.23.284-.33.398-.108.125-.224.26-.096.48.128.22.569.939 1.22 1.52.839.75 1.543 1.018 1.763 1.128.22.11.35.093.48-.057.13-.15.565-.66.715-.886.15-.226.3-.188.508-.113.208.075 1.32.622 1.547.735.227.113.378.17.435.264.057.094.057.546-.253 1.414z"/>
        </svg>
        <span className="absolute right-16 bg-white text-[#181e4b] text-xs font-bold px-3 py-1.5 rounded-lg shadow-md border border-gray-100 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us
        </span>
      </a>
    </footer>
  );
}

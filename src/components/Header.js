'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  if (pathname && pathname.startsWith('/dashboard')) {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#faf8f0] border-b border-[#efebe5]/60 shadow-sm ${
      isScrolled ? 'py-3.5' : 'py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* BRANDING LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src="/logo.png" 
            alt="Hallmark Travel Inc. Logo" 
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
          <span className="font-sans font-extrabold text-lg tracking-tight text-[#181e4b] hidden sm:inline-block">
            Hallmark Travel Inc.
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-7 font-sans">
            <a 
              href="#services"
              onClick={(e) => handleScrollToSection(e, 'services')}
              className="text-[14px] text-[#181e4b] hover:text-[#1a7f6e] font-semibold transition-colors"
            >
              Study in PH
            </a>
            <a 
              href="#services"
              onClick={(e) => handleScrollToSection(e, 'services')}
              className="text-[14px] text-[#181e4b] hover:text-[#1a7f6e] font-semibold transition-colors"
            >
              Travel &amp; Tours
            </a>
            <a 
              href="#estimator"
              onClick={(e) => handleScrollToSection(e, 'estimator')}
              className="text-[14px] text-[#181e4b] hover:text-[#1a7f6e] font-semibold transition-colors"
            >
              Cost Calculator
            </a>
            <a 
              href="https://payhip.com/b/ArLHI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-[#181e4b] hover:text-[#1a7f6e] font-semibold transition-colors"
            >
              DIY Kit
            </a>
            <Link 
              href="/blog"
              className="text-[14px] text-[#181e4b] hover:text-[#1a7f6e] font-semibold transition-colors"
            >
              Resources
            </Link>
            <a 
              href="#faq"
              onClick={(e) => handleScrollToSection(e, 'faq')}
              className="text-[14px] text-[#181e4b] hover:text-[#1a7f6e] font-semibold transition-colors"
            >
              FAQ
            </a>
            <Link 
              href="/contact" 
              className="text-[14px] text-[#181e4b] hover:text-[#1a7f6e] font-semibold transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Action button: WhatsApp */}
          <div className="flex items-center font-sans">
            <a 
              href="https://wa.me/639661389726" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#1a7f6e] hover:bg-[#156759] text-white rounded-full text-[14px] font-bold shadow-sm shadow-[#1a7f6e]/20 transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 0 0 1.333 4.993L2 22l5.13-1.347a9.96 9.96 0 0 0 4.88 1.28c5.508 0 9.99-4.479 9.991-9.986.002-5.507-4.48-9.985-9.989-9.985zm7.154 14.137c-.31.868-1.787 1.62-2.477 1.704-.69.083-1.554.084-2.502-.22a10.99 10.99 0 0 1-5.111-3.237c-.328-.328-.624-.68-.888-1.054a11.164 11.164 0 0 1-1.637-3.155c-.276-.906-.296-1.764-.08-2.482.21-.698.814-1.22 1.135-1.536.321-.316.643-.314.857-.314h.6c.19 0 .428.007.618.455.19.448.653 1.594.71 1.708.058.113.095.245.02.395-.077.15-.156.324-.265.45-.11.127-.23.284-.33.398-.108.125-.224.26-.096.48.128.22.569.939 1.22 1.52.839.75 1.543 1.018 1.763 1.128.22.11.35.093.48-.057.13-.15.565-.66.715-.886.15-.226.3-.188.508-.113.208.075 1.32.622 1.547.735.227.113.378.17.435.264.057.094.057.546-.253 1.414z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-primary hover:text-[#1a7f6e] transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* MOBILE NAV DRAWER */}
      <div className={`fixed inset-0 top-[70px] bg-white z-40 transition-transform duration-300 md:hidden flex flex-col justify-between p-8 shadow-inner border-t border-gray-100 ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col gap-6 mt-8 text-left font-sans font-semibold">
          <a 
            href="#services" 
            onClick={(e) => handleScrollToSection(e, 'services')}
            className="text-lg text-primary hover:text-[#1a7f6e]"
          >
            Study in PH
          </a>
          <a 
            href="#services" 
            onClick={(e) => handleScrollToSection(e, 'services')}
            className="text-lg text-primary hover:text-[#1a7f6e]"
          >
            Travel &amp; Tours
          </a>
          <a 
            href="#estimator" 
            onClick={(e) => handleScrollToSection(e, 'estimator')}
            className="text-lg text-primary hover:text-[#1a7f6e]"
          >
            Cost Calculator
          </a>
          <a 
            href="https://payhip.com/b/ArLHI" 
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg text-primary hover:text-[#1a7f6e]"
          >
            DIY Kit
          </a>
          <Link 
            href="/blog" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg text-primary hover:text-[#1a7f6e]"
          >
            Resources
          </Link>
          <a 
            href="#faq" 
            onClick={(e) => handleScrollToSection(e, 'faq')}
            className="text-lg text-primary hover:text-[#1a7f6e]"
          >
            FAQ
          </a>
          <Link 
            href="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg text-primary hover:text-[#1a7f6e]"
          >
            Contact
          </Link>
          <div className="w-full h-[1px] bg-gray-100 my-2" />
          <a 
            href="https://wa.me/639661389726" 
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3 bg-[#1a7f6e] hover:bg-[#156759] text-white text-center rounded-full text-base font-bold inline-flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 0 0 1.333 4.993L2 22l5.13-1.347a9.96 9.96 0 0 0 4.88 1.28c5.508 0 9.99-4.479 9.991-9.986.002-5.507-4.48-9.985-9.989-9.985zm7.154 14.137c-.31.868-1.787 1.62-2.477 1.704-.69.083-1.554.084-2.502-.22a10.99 10.99 0 0 1-5.111-3.237c-.328-.328-.624-.68-.888-1.054a11.164 11.164 0 0 1-1.637-3.155c-.276-.906-.296-1.764-.08-2.482.21-.698.814-1.22 1.135-1.536.321-.316.643-.314.857-.314h.6c.19 0 .428.007.618.455.19.448.653 1.594.71 1.708.058.113.095.245.02.395-.077.15-.156.324-.265.45-.11.127-.23.284-.33.398-.108.125-.224.26-.096.48.128.22.569.939 1.22 1.52.839.75 1.543 1.018 1.763 1.128.22.11.35.093.48-.057.13-.15.565-.66.715-.886.15-.226.3-.188.508-.113.208.075 1.32.622 1.547.735.227.113.378.17.435.264.057.094.057.546-.253 1.414z"/>
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}

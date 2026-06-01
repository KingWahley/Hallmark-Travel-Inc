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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-4 bg-white/80 backdrop-blur-md shadow-sm border-b border-[#efebe5]/60' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* JADOO-STYLE LOGO */}
        <Link href="/" className="flex items-center group">
          <span className="font-sans font-extrabold text-2xl tracking-tight text-primary">
            Hallmark<span className="text-orange-accent">.</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-8 font-sans">
            <Link 
              href="/" 
              className={`text-[13.5px] hover:text-[#df6951] font-medium transition-colors ${
                pathname === '/' ? 'text-orange-accent' : 'text-[#212863]'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className={`text-[13.5px] hover:text-[#df6951] font-medium transition-colors ${
                pathname.startsWith('/blog') ? 'text-orange-accent' : 'text-[#212863]'
              }`}
            >
              Relocation Hub
            </Link>
          </nav>

          {/* Action links */}
          <div className="flex items-center gap-6 font-sans">
            <a 
              href="#inquiry-section" 
              onClick={(e) => handleScrollToSection(e, 'inquiry-section')}
              className="px-5 py-1.5 border border-[#212863]/60 hover:border-orange-accent hover:bg-orange-accent hover:text-white rounded-md text-[13.5px] text-[#212863] font-medium transition-all duration-300"
            >
              Book Consultation
            </a>
            <div className="flex items-center gap-0.5 text-[13px] text-[#212863] cursor-pointer font-medium">
              <span>EN</span>
              <span className="text-[10px]">▼</span>
            </div>
          </div>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-primary hover:text-orange-accent transition-colors"
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
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg text-primary hover:text-orange-accent"
          >
            Home
          </Link>
          <Link 
            href="/blog" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg text-primary hover:text-orange-accent"
          >
            Relocation Hub
          </Link>
          <div className="w-full h-[1px] bg-gray-100 my-2" />
          <a 
            href="#inquiry-section" 
            onClick={(e) => handleScrollToSection(e, 'inquiry-section')}
            className="w-full py-3 bg-orange-accent text-white text-center rounded-xl text-base font-semibold"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </header>
  );
}

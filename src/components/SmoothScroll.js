'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroll({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname && pathname.startsWith('/dashboard');

  useEffect(() => {
    if (isDashboard) return;

    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Reset scroll position to top on page load/transition
    lenis.scrollTo(0, { immediate: true });

    // Update ScrollTrigger on Lenis scroll
    lenis.on('scroll', ScrollTrigger.update);

    // Force ScrollTrigger to recalculate layout dimensions after page paints
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // Connect Lenis to GSAP Ticker
    const updateRaf = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateRaf);

    // Disable GSAP ticker lag smoothing (recommended for Lenis integration)
    gsap.ticker.lagSmoothing(0);

    // Clean up on unmount
    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateRaf);
      clearTimeout(timer);
    };
  }, [isDashboard, pathname]);

  return <>{children}</>;
}


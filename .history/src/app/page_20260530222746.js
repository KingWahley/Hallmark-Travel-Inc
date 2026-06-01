'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Compass, 
  Navigation, 
  Heart, 
  Share2, 
  Calendar, 
  Send, 
  Play, 
  Mail, 
  Check,
  ChevronRight
} from 'lucide-react';
import { getBlogPosts, submitInquiry } from '@/lib/db';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Inquiry Form State
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: 'International Travel Assistance', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Testimonials Slider State
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      id: 1,
      quote: "On the Windows of our corporate relocations, Aura Global has been a flawless partner. Relocating our team of healthcare nurses to the UK was streamlined beyond expectation.",
      name: "Mike Taylor",
      role: "CEO, MedGroup Inc."
    },
    {
      id: 2,
      quote: "Excellent visa logistics. The advisors managed my dental credentials evaluation, secured my Swiss student visa, and arranged my travel in under three weeks.",
      name: "Sophia Vance",
      role: "DMD Candidate, Geneva"
    },
    {
      id: 3,
      quote: "The best flight operations team in the industry. Highly personalized flight schedules, fast-track custom approvals, and exceptional airport assistance.",
      name: "Jonathan Harker",
      role: "Director, Harker Relocations"
    }
  ];

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getBlogPosts(false);
        setPosts(data.slice(0, 3));
      } catch (err) {
        console.error("Failed to load blog posts:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!form.email) return;
    setSubmitting(true);
    setSubmitStatus(null);
    try {
      await submitInquiry({
        name: form.name || 'Anonymous Subscriber',
        email: form.email,
        phone: form.phone || '',
        service: form.service,
        message: form.message || 'Newsletter Subscription from Jadoo template.'
      });
      setSubmitStatus('success');
      setForm({ name: '', email: '', phone: '', service: 'International Travel Assistance', message: '' });
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden bg-background text-[#181e4b] min-h-screen">
      
      {/* PREMIUM MASKED MULTI-LAYER MESH DECORATOR OVERLAY */}
      <div className="absolute inset-0 -z-30 pointer-events-none select-none overflow-hidden">
        {/* Subtle grid of dots over the whole page */}
        <div className="absolute inset-0 bg-[radial-gradient(#e8e3d9_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-70" />
        
        {/* Large ambient colored blobs at key positions */}
        <div className="absolute top-[5%] right-[-10%] w-[800px] h-[800px] bg-blob-yellow rounded-full blur-[140px] opacity-80 animate-drift" />
        <div className="absolute top-[25%] left-[-20%] w-[600px] h-[600px] bg-blob-orange rounded-full blur-[130px] opacity-70 animate-drift-slow" />
        <div className="absolute top-[50%] right-[-15%] w-[700px] h-[700px] bg-blob-teal rounded-full blur-[150px] opacity-60 animate-drift" />
        <div className="absolute top-[75%] left-[-10%] w-[650px] h-[650px] bg-blob-purple rounded-full blur-[140px] opacity-70 animate-drift-slow" />
      </div>

      {/* ---------------------------------------------------- */}
      {/* 1. HERO SECTION (JADOO MATCHING COMPOSITION) */}
      {/* ---------------------------------------------------- */}
      <section className="relative min-h-[95vh] md:min-h-screen flex items-center pt-16 md:pt-24 pb-20 overflow-hidden">
        
        {/* Decorative elements behind hero */}
        <div className="absolute top-[15%] left-[5%] w-16 h-16 bg-grid-dots opacity-20 rotate-12 pointer-events-none select-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Hero Left Info */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-accent/10 border border-orange-accent/20 text-orange-accent text-xs font-black w-fit uppercase tracking-[0.18em]">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-accent animate-ping" />
              Best Destinations Around the World
            </div>
            
            <h1 className="font-serif font-black text-4xl sm:text-5xl md:text-[72px] leading-[1.08] text-[#181e4b] tracking-tight">
              Travel, <span className="brush-highlight text-orange-accent">enjoy</span> <br />
              and live a new <br />
              and full life
            </h1>

            <p className="text-[16px] leading-relaxed text-secondary font-medium max-w-lg mt-3">
              Securing customized visa preparations, premium flights booking, local housing settlement, and academic relocation pathways. Built vanity itself do in preferred to sportsom.
            </p>

            <div className="flex items-center gap-8 mt-8">
              {/* Find out more Gold Button */}
              <a 
                href="#inquiry-section"
                className="px-8 py-4 bg-gold-accent hover:bg-amber-600 text-white font-sans font-bold text-[15px] rounded-2xl shadow-xl shadow-gold-accent/25 hover:shadow-gold-accent/35 transition-all duration-300 transform hover:-translate-y-1"
              >
                Find out more
              </a>

              {/* Play Demo Button */}
              <a 
                href="#services"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-orange-accent shadow-xl shadow-orange-accent/30 text-white group-hover:scale-110 group-hover:bg-[#c54b34] transition-all duration-300">
                  <Play className="w-4 h-4 fill-white ml-1" />
                </div>
                <span className="text-[15px] font-sans font-bold text-secondary group-hover:text-orange-accent transition-colors duration-300">
                  Play Demo
                </span>
              </a>
            </div>
          </div>

          {/* Hero Right Cutout Mockup */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px]">
              
              {/* Decorative flight traces and plane vector behind picture */}
              <div className="absolute inset-[-20px] -z-10 pointer-events-none opacity-20 select-none">
                <svg className="w-full h-full" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 400 C150 200, 350 450, 450 150" stroke="#df6951" strokeWidth="2.5" strokeDasharray="6 6" />
                  <path d="M450 150 L430 150 L445 170 Z" fill="#df6951" />
                </svg>
              </div>

              {/* Premium glass frame container wrapping image */}
              <div className="p-4 rounded-[48px] bg-white/40 backdrop-blur-md border border-white/60 shadow-2xl shadow-black/5 animate-float-card">
                <div className="rounded-[36px] overflow-hidden border-2 border-white shadow-lg relative aspect-[4/5]">
                  <img 
                    src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=800&q=80" 
                    alt="Premium traveler global mobility" 
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  {/* Glass tint overlay on the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

             

             
              <div className="absolute top-1/4 -left-16 z-20 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-50 animate-bounce">
                <Compass className="w-6 h-6 text-orange-accent" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. SERVICES SECTION (JADOO WE OFFER BEST SERVICES) */}
      {/* ---------------------------------------------------- */}
      <section id="services" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-[#faf6f0]/40 to-transparent">
        
        {/* PLUS SIGNS BACKGROUND DECORATIVE GRID ON TOP RIGHT */}
        <div className="absolute top-12 right-12 grid grid-cols-6 gap-x-6 gap-y-4 pointer-events-none opacity-30 select-none">
          {Array.from({ length: 24 }).map((_, i) => {
            let color = "text-gray-400";
            if (i === 0) color = "text-orange-accent font-extrabold"; // Orange plus on top-left
            if (i === 14) color = "text-indigo-600 font-extrabold";   // Blue plus in middle
            return <span key={i} className={`text-[17px] font-bold ${color}`}>+</span>;
          })}
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          
          <div className="mb-20">
            <span className="text-[15px] uppercase tracking-[0.22em] font-black text-secondary font-sans">
              Category
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-5xl text-[#181e4b] mt-3">
              We Offer Best Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
            
            {/* CARD 1: CALCULATED WEATHER */}
            <div className="p-8 rounded-[36px] bg-white/60 backdrop-blur-sm hover:bg-white hover:shadow-jadoo-hover transition-all duration-500 group flex flex-col items-center text-center relative border border-white/40 hover:border-white shadow-sm">
              {/* Satellite Dish Illustration with Yellow backplate */}
              <div className="relative w-20 h-20 flex items-center justify-center mb-6">
                <div className="absolute right-1 bottom-1 w-12 h-12 bg-[#fff1da] rounded-tl-[18px] rounded-br-[18px] rounded-tr-[8px] rounded-bl-[8px]" />
                <svg className="w-16 h-16 relative z-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 42C16 38 12 30 12 22C12 18 13.5 14.5 16 12" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M28 48C18 42 16 28 16 18C16 14.5 17.5 11 20 8" stroke="#181e4b" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M42 42C48 38 52 30 52 22C52 18 50.5 14.5 48 12" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M16 36C22 44 42 44 48 36C54 28 50 16 48 12L16 12C14 16 10 28 16 36Z" fill="#aee2ff" fillOpacity="0.3" stroke="#2563eb" strokeWidth="3" />
                  <path d="M32 12V28" stroke="#181e4b" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="32" cy="12" r="3.5" fill="#df6951" />
                  <path d="M22 52H42M32 46V52" stroke="#181e4b" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </div>

              <h3 className="font-sans font-black text-[19px] text-[#1e1d4c] mb-4">
                Calculated Weather
              </h3>
              <p className="text-[13.5px] leading-relaxed text-[#5e6282] font-semibold max-w-[210px]">
                Built Wicket longer admire do barton vanity itself do in it.
              </p>
            </div>

            {/* CARD 2: BEST FLIGHTS (HIGHLIGHTED! COVERS FLOATING RED BACKING CARD!) */}
            <div className="p-8 rounded-[36px] bg-white shadow-jadoo hover:shadow-jadoo-hover transition-all duration-500 group flex flex-col items-center text-center relative border border-gray-100/80 hover:border-white">
              
              {/* Highlight offset card behind card bottom-left */}
              <div className="absolute -left-3.5 -bottom-3.5 w-[85px] h-[85px] bg-[#df6951] rounded-tr-[30px] rounded-bl-[30px] -z-10 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#df6951]/20" />
              
              {/* Airplane Illustration with Yellow backplate */}
              <div className="relative w-20 h-20 flex items-center justify-center mb-6">
                <div className="absolute right-1 bottom-1 w-12 h-12 bg-[#fff1da] rounded-tl-[18px] rounded-br-[18px] rounded-tr-[8px] rounded-bl-[8px]" />
                <svg className="w-16 h-16 relative z-10 animate-pulse" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 48C12 48 20 44 26 38L48 16C50.5 13.5 53.5 12 55.5 14C57.5 16 56 19 53.5 21.5L31.5 43.5C25.5 49.5 22 52 22 52L12 48Z" fill="#e0f2fe" stroke="#0284c7" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M26 38L38 12C39.5 9 41.5 9 41.5 9L35 30" fill="#0284c7" stroke="#0284c7" strokeWidth="1.5" />
                  <path d="M20 44L14 54C12.5 56.5 10.5 56.5 10.5 56.5L16 47" fill="#0284c7" stroke="#0284c7" strokeWidth="1.5" />
                  <path d="M18 42L10 32C8.5 30 7.5 30.5 7.5 30.5L14 43.5" fill="#df6951" />
                  <circle cx="34" cy="30" r="1.5" fill="#181e4b" />
                  <circle cx="38" cy="26" r="1.5" fill="#181e4b" />
                  <circle cx="42" cy="22" r="1.5" fill="#181e4b" />
                </svg>
              </div>

              <h3 className="font-sans font-black text-[19px] text-[#1e1d4c] mb-4">
                Best Flights
              </h3>
              <p className="text-[13.5px] leading-relaxed text-[#5e6282] font-semibold max-w-[210px]">
                Engrossed listening. Park gate sell they west hard for the.
              </p>
            </div>

            {/* CARD 3: LOCAL EVENTS */}
            <div className="p-8 rounded-[36px] bg-white/60 backdrop-blur-sm hover:bg-white hover:shadow-jadoo-hover transition-all duration-500 group flex flex-col items-center text-center relative border border-white/40 hover:border-white shadow-sm">
              {/* Microphone Illustration with Yellow backplate */}
              <div className="relative w-20 h-20 flex items-center justify-center mb-6">
                <div className="absolute right-1 bottom-1 w-12 h-12 bg-[#fff1da] rounded-tl-[18px] rounded-br-[18px] rounded-tr-[8px] rounded-bl-[8px]" />
                <svg className="w-16 h-16 relative z-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 52H40M32 44V52" stroke="#4b5563" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M20 28C20 38 24 42 32 42C40 42 44 38 44 28" stroke="#4b5563" strokeWidth="3.5" strokeLinecap="round" />
                  <rect x="25" y="10" width="14" height="24" rx="7" fill="#cbd5e1" stroke="#374151" strokeWidth="3" />
                  <path d="M25 18H39M25 24H39M32 10V34" stroke="#374151" strokeWidth="2" />
                </svg>
              </div>

              <h3 className="font-sans font-black text-[19px] text-[#1e1d4c] mb-4">
                Local Events
              </h3>
              <p className="text-[13.5px] leading-relaxed text-[#5e6282] font-semibold max-w-[210px]">
                Barton vanity itself do in it. Preferd to men it engrossed listening.
              </p>
            </div>

            {/* CARD 4: CUSTOMIZATION */}
            <div className="p-8 rounded-[36px] bg-white/60 backdrop-blur-sm hover:bg-white hover:shadow-jadoo-hover transition-all duration-500 group flex flex-col items-center text-center relative border border-white/40 hover:border-white shadow-sm">
              {/* Gear Illustration with Yellow backplate */}
              <div className="relative w-20 h-20 flex items-center justify-center mb-6">
                <div className="absolute right-1 bottom-1 w-12 h-12 bg-[#fff1da] rounded-tl-[18px] rounded-br-[18px] rounded-tr-[8px] rounded-bl-[8px]" />
                <svg className="w-16 h-16 relative z-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="14" fill="#cbd5e1" stroke="#4b5563" strokeWidth="3.5" />
                  <path d="M32 8V14M32 50V56M14 32H8M56 32H50M17 17L21.5 21.5M42.5 42.5L47 47M17 47L21.5 42.5M42.5 21.5L47 17" stroke="#4b5563" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="32" cy="32" r="5" fill="#f8fafc" stroke="#4b5563" strokeWidth="3" />
                </svg>
              </div>

              <h3 className="font-sans font-black text-[19px] text-[#1e1d4c] mb-4">
                Customization
              </h3>
              <p className="text-[13.5px] leading-relaxed text-[#5e6282] font-semibold max-w-[210px]">
                We deliver outsourced aviation services for military customers
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. DESTINATIONS SECTION (JADOO TOP DESTINATIONS) */}
      {/* ---------------------------------------------------- */}
      <section id="destinations" className="py-28 relative bg-gradient-to-b from-transparent via-[#faf6f0]/50 to-transparent">
        
        {/* Soft elegant backing panel for this section to break up the empty white */}
        <div className="absolute inset-0 bg-[#fbf9f4]/60 backdrop-blur-[2px] -z-10 border-t border-b border-[#efebe3]/40" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          
          <div className="text-center mb-20">
            <span className="text-[15px] uppercase tracking-[0.22em] font-black text-[#5e6282] font-sans">
              Top Selling
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-5xl text-[#181e4b] mt-3">
              Top Destinations
            </h2>
          </div>

          {/* Concentric spiral loops behind Card 3 on the right */}
          <div className="absolute right-[-10px] bottom-[10%] w-24 h-48 z-0 pointer-events-none opacity-40 select-none hidden lg:block">
            <svg className="w-full h-full" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10,20 Q60,40 60,70 T10,120 T60,170" stroke="#a1a5bb" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M15,25 Q65,45 65,75 T15,125 T65,175" stroke="#a1a5bb" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M20,30 Q70,50 70,80 T20,130 T70,180" stroke="#a1a5bb" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 max-w-5xl mx-auto relative z-10">
            
            {/* DESTINATION 1: ROME, ITALTY (REPLICATING ORIGINAL IMAGE TYPO EXPLICITLY!) */}
            <div className="bg-white rounded-[32px] overflow-hidden shadow-jadoo hover:shadow-jadoo-hover transition-all duration-500 hover:-translate-y-2 group flex flex-col relative border border-[#efebe5]">
              <div className="h-80 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80" 
                  alt="Rome Colosseum Jadoo" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </div>
              <div className="p-7 flex flex-col gap-5 text-left bg-white relative z-10">
                <div className="flex items-center justify-between text-[17px] font-black text-[#5e6282] font-sans">
                  <span>Rome, Italty</span>
                  <span className="text-[#181e4b] font-black">$5,42k</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-[#181e4b] font-sans">
                  {/* Jadoo custom navigation cursor arrow */}
                  <svg className="w-4 h-4 text-[#181e4b] fill-current" viewBox="0 0 24 24">
                    <path d="M21 3L3 10.5L10.5 13.5L13.5 21L21 3Z" />
                  </svg>
                  <span className="text-secondary font-semibold">10 Days Trip</span>
                </div>
              </div>
            </div>

            {/* DESTINATION 2: LONDON, UK */}
            <div className="bg-white rounded-[32px] overflow-hidden shadow-jadoo hover:shadow-jadoo-hover transition-all duration-500 hover:-translate-y-2 group flex flex-col relative border border-[#efebe5]">
              <div className="h-80 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80" 
                  alt="London Parliament Jadoo" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </div>
              <div className="p-7 flex flex-col gap-5 text-left bg-white relative z-10">
                <div className="flex items-center justify-between text-[17px] font-black text-[#5e6282] font-sans">
                  <span>London, UK</span>
                  <span className="text-[#181e4b] font-black">$4.2k</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-[#181e4b] font-sans">
                  <svg className="w-4 h-4 text-[#181e4b] fill-current" viewBox="0 0 24 24">
                    <path d="M21 3L3 10.5L10.5 13.5L13.5 21L21 3Z" />
                  </svg>
                  <span className="text-secondary font-semibold">12 Days Trip</span>
                </div>
              </div>
            </div>

            {/* DESTINATION 3: FULL EUROPE */}
            <div className="bg-white rounded-[32px] overflow-hidden shadow-jadoo hover:shadow-jadoo-hover transition-all duration-500 hover:-translate-y-2 group flex flex-col relative border border-[#efebe5]">
              <div className="h-80 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80" 
                  alt="Europe Relocation Jadoo" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </div>
              <div className="p-7 flex flex-col gap-5 text-left bg-white relative z-10">
                <div className="flex items-center justify-between text-[17px] font-black text-[#5e6282] font-sans">
                  <span>Full Europe</span>
                  <span className="text-[#181e4b] font-black">$15k</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-[#181e4b] font-sans">
                  <svg className="w-4 h-4 text-[#181e4b] fill-current" viewBox="0 0 24 24">
                    <path d="M21 3L3 10.5L10.5 13.5L13.5 21L21 3Z" />
                  </svg>
                  <span className="text-secondary font-semibold">28 Days Trip</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. EASY AND FAST SECTION (3 EASY STEPS & GREECE MOCKUP CARD) */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 relative overflow-hidden bg-soft-blue-gradient">
        
        {/* Decorative ambient background elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-grid-dots-gray opacity-30 pointer-events-none select-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          
          {/* Steps Left Info */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <span className="text-[15px] uppercase tracking-[0.2em] font-black text-secondary">
              Easy and Fast
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-5xl text-[#181e4b] leading-tight max-w-md">
              Book Your Next Trip In 3 Easy Steps
            </h2>

            <div className="flex flex-col gap-8 mt-8">
              
              {/* Step 1 */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-gold-accent flex-shrink-0 flex items-center justify-center text-white shadow-lg shadow-gold-accent/20 group-hover:scale-110 transition-transform duration-300">
                  <Compass className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-black text-[16px] text-primary">Choose Relocation Destination</h4>
                  <p className="text-[13.5px] text-secondary font-medium leading-relaxed mt-1 max-w-sm">
                    Select your target study-relocation or flight country and consult with our global migration team.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-orange-accent flex-shrink-0 flex items-center justify-center text-white shadow-lg shadow-orange-accent/20 group-hover:scale-110 transition-transform duration-300">
                  <Compass className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-black text-[16px] text-primary">Assemble Visas & Flights File</h4>
                  <p className="text-[13.5px] text-secondary font-medium leading-relaxed mt-1 max-w-sm">
                    Secure consolidated flight routing and let advisors draft your visa files.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-[#0d9488] flex-shrink-0 flex items-center justify-center text-white shadow-lg shadow-[#0d9488]/20 group-hover:scale-110 transition-transform duration-300">
                  <Compass className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-black text-[16px] text-primary">Embark & Initiate Settlement</h4>
                  <p className="text-[13.5px] text-secondary font-medium leading-relaxed mt-1 max-w-sm">
                    Relocate on your scheduled date and meet your local municipal coordinator for onboarding.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Floating Greek Beach Card Mockup (EXACT STYLING!) */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Concentric background glow */}
            <div className="absolute w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[80px] pointer-events-none" />
            
            {/* The Main Greece Trip Card */}
            <div className="bg-white p-5 rounded-[32px] shadow-trip-card border border-white/60 w-full max-w-[350px] relative z-10 text-left animate-float-card">
              
              {/* Greece Santorini Beach Image */}
              <div className="h-48 w-full rounded-2xl overflow-hidden mb-5 relative">
                <img 
                  src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=400&q=80" 
                  alt="Greece trip relocation" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title Date metadata */}
              <h4 className="font-black text-[#080809] text-[17px] tracking-wide mb-1.5">Trip To Greece</h4>
              <div className="flex items-center gap-1.5 text-xs text-[#8f92a1] font-bold mb-4">
                <span>14-29 June</span>
                <span className="text-gray-300">|</span>
                <span>by Robbin joseph</span>
              </div>

              {/* Circle Options Icons Row */}
              <div className="flex items-center gap-4 mb-6">
                <button className="w-9 h-9 rounded-full bg-[#f5f5f7] flex items-center justify-center text-[#5e6282] hover:bg-orange-accent hover:text-white hover:shadow-md transition-all duration-300">
                  <Compass className="w-4 h-4" />
                </button>
                <button className="w-9 h-9 rounded-full bg-[#f5f5f7] flex items-center justify-center text-[#5e6282] hover:bg-orange-accent hover:text-white hover:shadow-md transition-all duration-300">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="w-9 h-9 rounded-full bg-[#f5f5f7] flex items-center justify-center text-[#5e6282] hover:bg-orange-accent hover:text-white hover:shadow-md transition-all duration-300">
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Heart & stats count */}
              <div className="flex items-center justify-between text-xs text-[#8f92a1] font-bold">
                <span className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-orange-accent" />
                  <span>24 people going</span>
                </span>
                <button className="text-secondary hover:text-orange-accent transition-colors duration-300">
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              {/* THE FLOATING Rome Progress Card Overlay Widget (EXACTLY REPLICATED!) */}
              <div className="absolute -right-12 bottom-[15%] bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-floating-progress border border-white flex gap-3.5 items-center w-64 z-20 animate-float-card-delayed">
                
                {/* Avatar Icon */}
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" 
                    alt="Guide coordinator profile avatar" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Progress details */}
                <div className="flex flex-col text-left flex-grow">
                  <span className="text-[10px] text-secondary uppercase tracking-widest font-black">Ongoing</span>
                  <h5 className="font-black text-[13.5px] text-[#080809] mt-0.5">Trip to Rome</h5>
                  
                  {/* Progress Indicator */}
                  <div className="flex flex-col mt-2 gap-1.5">
                    <div className="flex justify-between items-center text-[10px] font-black text-orange-accent">
                      <span>40% completed</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#f5f5f7] rounded-full overflow-hidden">
                      <div className="h-full bg-orange-accent rounded-full" style={{ width: '40%' }} />
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. TESTIMONIALS SECTION (STAGGERED OVERLAPPING CARDS) */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 relative overflow-hidden bg-soft-purple-gradient">
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          
          {/* Testimonial Left Info */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <span className="text-[15px] uppercase tracking-[0.22em] font-black text-secondary">
              Testimonials
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-5xl text-[#181e4b] leading-tight max-w-sm">
              What People Say About Us.
            </h2>

            {/* Testimonials indicator pagination dots matching Jadoo */}
            <div className="flex items-center gap-2.5 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                    activeTestimonial === idx 
                      ? 'bg-primary scale-125' 
                      : 'bg-gray-300 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to slide ${idx+1}`}
                />
              ))}
            </div>
          </div>

          {/* Staggered overlapping testimonial cards right column */}
          <div className="lg:col-span-7 relative flex justify-center items-center h-[340px] md:h-80">
            <div className="relative w-full max-w-xl">
              
              {/* Backing Ghost Card offset representing next card */}
              <div className="absolute top-8 left-4 w-full bg-white/70 backdrop-blur-sm p-8 rounded-[32px] border border-white/50 shadow-md translate-y-8 translate-x-4 opacity-40 z-0 select-none">
                <p className="text-[14px] font-semibold text-secondary leading-relaxed text-left">
                  {testimonials[(activeTestimonial + 1) % testimonials.length].quote}
                </p>
                <div className="flex flex-col items-start gap-1 mt-6 text-left">
                  <h4 className="font-black text-sm text-[#080809]">
                    {testimonials[(activeTestimonial + 1) % testimonials.length].name}
                  </h4>
                  <span className="text-xs text-secondary font-medium">
                    {testimonials[(activeTestimonial + 1) % testimonials.length].role}
                  </span>
                </div>
              </div>

              {/* Main active testimonial card */}
              <div className="bg-white p-8 rounded-[32px] border border-[#efebe5] shadow-jadoo relative z-10 flex flex-col gap-6 transition-all duration-500 animate-fade-in-up text-left">
                
                {/* Client Avatar sitting in top-left offset */}
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg absolute -left-6 -top-6">
                  <img 
                    src={
                      activeTestimonial === 0 ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" :
                      activeTestimonial === 1 ? "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" :
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
                    } 
                    alt={testimonials[activeTestimonial].name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-[14.5px] font-bold text-[#5e6282] leading-relaxed pt-2">
                  "{testimonials[activeTestimonial].quote}"
                </p>

                <div className="flex flex-col items-start gap-0.5 mt-2">
                  <h4 className="font-black text-[17px] text-[#181e4b]">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <span className="text-[12px] text-secondary font-bold uppercase tracking-wider">
                    {testimonials[activeTestimonial].role}
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 6. PARTNERS CORPORATE LOGOS SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 relative bg-gradient-to-b from-transparent via-[#faf6f0]/30 to-transparent">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap items-center justify-between gap-12 md:gap-16">
          
          {/* Logo Jetstar */}
          <div className="partner-grayscale flex items-center justify-center cursor-pointer mx-auto md:mx-0">
            <span className="font-sans font-black text-2xl tracking-tight text-[#181e4b]">Jetstar</span>
          </div>

          {/* Logo Expedia */}
          <div className="partner-grayscale flex items-center justify-center cursor-pointer mx-auto md:mx-0">
            <span className="font-serif font-black text-3xl tracking-tighter text-[#181e4b]">Expedia</span>
          </div>

          {/* Logo Qantas */}
          <div className="partner-grayscale flex items-center justify-center cursor-pointer mx-auto md:mx-0">
            <span className="font-sans font-black text-2xl tracking-wide text-[#181e4b]">QANTAS</span>
          </div>

          {/* Logo Alitalia */}
          <div className="partner-grayscale flex items-center justify-center cursor-pointer mx-auto md:mx-0">
            <span className="font-sans font-bold text-xl italic text-[#181e4b]">Alitalia</span>
          </div>

          {/* Logo AXA */}
          <div className="partner-grayscale flex items-center justify-center cursor-pointer mx-auto md:mx-0">
            <span className="font-sans font-black text-3xl tracking-normal text-[#181e4b]">AXA</span>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 7. NEWSLETTER PURPLE CARD CAPTURE SECTION */}
      {/* ---------------------------------------------------- */}
      <section id="inquiry-section" className="py-24 relative overflow-hidden">
        
        {/* Curved Lavender Concentric Rings Box Wrapper */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Main lavender container with custom visual anchors */}
          <div className="bg-[#f5f1fe] p-8 md:p-20 rounded-[40px] rounded-tl-[120px] border border-violet-100/50 text-center relative overflow-hidden max-w-5xl mx-auto shadow-xl shadow-violet-500/5">
            
            {/* concentric rings graphic elements */}
            <div className="absolute -right-20 -bottom-20 w-[450px] h-[450px] border-4 border-violet-500/5 rounded-full pointer-events-none" />
            <div className="absolute -left-20 -top-20 w-[450px] h-[450px] border-4 border-violet-500/5 rounded-full pointer-events-none" />
            
            {/* FLOATING CORAL PAPER PLANE ON TOP RIGHT BORDER */}
            <div className="absolute -right-3 -top-3 w-14 h-14 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-2xl animate-bounce z-20">
              <Send className="w-6 h-6 rotate-12 -ml-0.5" />
            </div>

            <div className="max-w-3xl mx-auto relative z-10 flex flex-col gap-10">
              
              <h3 className="font-serif font-black text-2xl sm:text-3xl md:text-[38px] leading-[1.3] text-[#5e6282] max-w-2xl mx-auto tracking-tight">
                Subscribe to get information, latest news and other interesting offers about Aura
              </h3>

              {submitStatus === 'success' ? (
                <div className="text-center py-6 animate-fade-in-up">
                  <span className="px-6 py-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 rounded-2xl text-[15px] font-black inline-block shadow-sm">
                    ✓ Thank you! You have been subscribed successfully.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto w-full">
                  <div className="relative flex-grow w-full">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="email" 
                      required
                      value={form.email}
                      onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="Your email"
                      className="w-full pl-12 pr-4 py-4.5 bg-white border border-gray-100 rounded-2xl text-sm text-[#181e4b] font-medium focus:ring-2 focus:ring-orange-accent focus:outline-none shadow-sm placeholder-gray-400"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto px-10 py-4.5 bg-orange-accent hover:bg-[#c54b34] disabled:bg-orange-accent/50 text-white font-sans font-black text-sm uppercase tracking-widest rounded-2xl transition-all duration-300 shadow-xl shadow-orange-accent/20 hover:shadow-orange-accent/30 hover:-translate-y-0.5"
                  >
                    {submitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 8. FLIGHTS DEPARTURE OPS OVERVIEW SECTION */}
      {/* ---------------------------------------------------- */}
      <section id="departures" className="py-16 bg-[#faf8f5] border-t border-[#efebe5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-11 h-11 rounded-2xl bg-orange-accent/10 border border-orange-accent/15 flex items-center justify-center text-orange-accent shadow-sm">
              <Compass className="w-5.5 h-5.5 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <h4 className="font-black text-[15px] text-[#181e4b]">Live Operations Departures Desk</h4>
              <span className="text-[10px] tracking-widest text-[#5e6282] uppercase font-mono mt-0.5">24/7 Global Mobility updates</span>
            </div>
          </div>
          <div className="flex gap-4">
            <Link 
              href="/blog" 
              className="px-6 py-3 bg-white border border-[#efebe5] hover:border-orange-accent text-secondary hover:text-orange-accent text-xs font-black uppercase tracking-widest rounded-2xl transition-all duration-300 flex items-center gap-2 shadow-sm"
            >
              Explore Relocation Insights <ChevronRight className="w-4 h-4 text-orange-accent" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

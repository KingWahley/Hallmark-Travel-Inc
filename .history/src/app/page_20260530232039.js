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
  ChevronRight,
  Star,
  Plane,
  MapPin,
  ShieldCheck
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
      role: "CEO, MedGroup Inc.",
      from: "Houston, USA",
      to: "London, UK",
      serviceTag: "Corporate Relocation Assistance",
      rating: 5,
      milestones: [
        "Healthcare Credentials Verification Completed",
        "UK Tier-2 Sponsorship Visa Issued",
        "Consolidated Group Flight Logistics",
        "Central London Corporate Housing Onboarding"
      ]
    },
    {
      id: 2,
      quote: "Excellent visa logistics. The advisors managed my dental credentials evaluation, secured my Swiss student visa, and arranged my travel in under three weeks.",
      name: "Sophia Vance",
      role: "DMD Candidate, Geneva",
      from: "Toronto, Canada",
      to: "Geneva, Switzerland",
      serviceTag: "Academic Relocation Pathway",
      rating: 5,
      milestones: [
        "Dental Credentials Evaluation Certified",
        "Swiss Schengen Student Visa Approval",
        "Fast-track Customs Clearance Approval",
        "Geneva University Residence Settlement"
      ]
    },
    {
      id: 3,
      quote: "The best flight operations team in the industry. Highly personalized flight schedules, fast-track custom approvals, and exceptional airport assistance.",
      name: "Jonathan Harker",
      role: "Director, Harker Relocations",
      from: "London, UK",
      to: "Sydney, Australia",
      serviceTag: "Executive Travel & Relocation Desk",
      rating: 5,
      milestones: [
        "Custom Flight Operations & Routing Scheduled",
        "Australia Skilled Visa Documentation Drafted",
        "Sydney Premium Airport Meet & Greet Arranged",
        "Local Municipal Coordinator Handover"
      ]
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
      <section className="relative min-h-[95vh] md:min-h-screen flex items-center pt-6 md:pt-12 pb-20 overflow-hidden">
        
        {/* Decorative elements behind hero */}
        <div className="absolute top-[15%] left-[5%] w-16 h-16 bg-grid-dots opacity-20 rotate-12 pointer-events-none select-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Hero Left Info */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left relative">
            
            <h1 className="font-serif font-black text-4xl sm:text-5xl md:text-[64px] leading-[1.08] text-[#181e4b] tracking-tight">
              Study, <span className="brush-highlight text-orange-accent">travel</span> <br />
              & relocate in or <br />
              outside Philippines
            </h1>

            <p className="text-[16px] leading-relaxed text-secondary font-medium max-w-lg mt-3">
              We are a premier global mobility agency positioned at the gateway of two-way international journeys. Secure your flight bookings, study visa preparations, and local municipal onboarding today.
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

              <div className="p-4 rounded-[48px] bg-white/40 backdrop-blur-md border border-white/60 shadow-2xl shadow-black/5 animate-float-card">
                <div className="rounded-[36px] overflow-hidden border-2 border-white shadow-lg relative aspect-[4/5]">
                  <img 
                    src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=800&q=80" 
                    alt="Premium traveler global mobility" 
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 max-w-7xl mx-auto">
            
            {/* SERVICE COLUMN A: INBOUND PATHWAYS */}
            <div className="p-8 rounded-[38px] bg-white shadow-jadoo hover:shadow-jadoo-hover transition-all duration-500 group flex flex-col items-center text-center relative border border-gray-100/80 hover:border-white">
              {/* Offset decorative block behind the card */}
              <div className="absolute -left-3.5 -bottom-3.5 w-[90px] h-[90px] bg-gold-accent rounded-tr-[30px] rounded-bl-[30px] -z-10 group-hover:scale-105 transition-transform duration-500 shadow-lg shadow-gold-accent/20" />
              
              {/* Illustration Header */}
              <div className="relative w-20 h-20 flex items-center justify-center mb-6">
                <div className="absolute right-1 bottom-1 w-12 h-12 bg-amber-50 rounded-tl-[18px] rounded-br-[18px] rounded-tr-[8px] rounded-bl-[8px]" />
                <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center text-gold-accent relative z-10">
                  <Compass className="w-8 h-8" />
                </div>
              </div>

              <h3 className="font-sans font-black text-2xl text-[#1e1d4c] mb-4">
                Inbound Mobility
              </h3>
              <span className="text-xs uppercase font-mono tracking-widest font-black text-gold-accent mb-4 block">
                Relocate to the Philippines
              </span>
              <p className="text-[14px] leading-relaxed text-[#5e6282] font-semibold max-w-sm">
                We welcome international travelers and students from around the globe seeking world-class, English-medium education and medical clerkships. We manage your consolidated student visa 9F preparation, ticket scheduling, and municipal accommodation settlements.
              </p>

              {/* Action Link */}
              <a 
                href="#inquiry-section" 
                className="mt-6 flex items-center gap-1.5 text-xs text-gold-accent font-black uppercase tracking-widest hover:underline"
              >
                Begin Inbound Pathway <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* SERVICE COLUMN B: OUTBOUND PATHWAYS */}
            <div className="p-8 rounded-[38px] bg-white shadow-jadoo hover:shadow-jadoo-hover transition-all duration-500 group flex flex-col items-center text-center relative border border-gray-100/80 hover:border-white">
              {/* Offset decorative block behind the card */}
              <div className="absolute -right-3.5 -bottom-3.5 w-[90px] h-[90px] bg-orange-accent rounded-tl-[30px] rounded-br-[30px] -z-10 group-hover:scale-105 transition-transform duration-500 shadow-lg shadow-orange-accent/20" />
              
              {/* Illustration Header */}
              <div className="relative w-20 h-20 flex items-center justify-center mb-6">
                <div className="absolute right-1 bottom-1 w-12 h-12 bg-rose-50 rounded-tl-[18px] rounded-br-[18px] rounded-tr-[8px] rounded-bl-[8px]" />
                <div className="w-16 h-16 rounded-full bg-rose-500/10 flex items-center justify-center text-orange-accent relative z-10">
                  <Plane className="w-8 h-8 rotate-45" />
                </div>
              </div>

              <h3 className="font-sans font-black text-2xl text-[#1e1d4c] mb-4">
                Outbound Pathways
              </h3>
              <span className="text-xs uppercase font-mono tracking-widest font-black text-orange-accent mb-4 block">
                Relocate Abroad from Philippines
              </span>
              <p className="text-[14px] leading-relaxed text-[#5e6282] font-semibold max-w-sm">
                We empower Filipino students and professionals aiming to travel and study outside the country. Secure world-class credentials in prestigious programs like Nursing, Dentistry, Pharmacy, MBBS (Medicine), Hospitality Management, and Culinary arts abroad.
              </p>

              {/* Action Link */}
              <a 
                href="#inquiry-section" 
                className="mt-6 flex items-center gap-1.5 text-xs text-orange-accent font-black uppercase tracking-widest hover:underline"
              >
                Begin Outbound Pathway <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* SERVICE COLUMN C: GLOBAL VISA SERVICES */}
            <div className="p-8 rounded-[38px] bg-white shadow-jadoo hover:shadow-jadoo-hover transition-all duration-500 group flex flex-col items-center text-center relative border border-gray-100/80 hover:border-white">
              {/* Offset decorative block behind the card */}
              <div className="absolute -left-3.5 -bottom-3.5 w-[90px] h-[90px] bg-[#0d9488] rounded-tr-[30px] rounded-bl-[30px] -z-10 group-hover:scale-105 transition-transform duration-500 shadow-lg shadow-[#0d9488]/20" />
              
              {/* Illustration Header */}
              <div className="relative w-20 h-20 flex items-center justify-center mb-6">
                <div className="absolute right-1 bottom-1 w-12 h-12 bg-teal-50 rounded-tl-[18px] rounded-br-[18px] rounded-tr-[8px] rounded-bl-[8px]" />
                <div className="w-16 h-16 rounded-full bg-teal-500/10 flex items-center justify-center text-[#0d9488] relative z-10">
                  <ShieldCheck className="w-8 h-8" />
                </div>
              </div>

              <h3 className="font-sans font-black text-2xl text-[#1e1d4c] mb-4">
                Visa & Immigration
              </h3>
              <span className="text-xs uppercase font-mono tracking-widest font-black text-[#0d9488] mb-4 block">
                Official Visa & Document Desk
              </span>
              <p className="text-[14px] leading-relaxed text-[#5e6282] font-semibold max-w-sm">
                We handle the heavy lifting for all travel and study permits. Our dedicated desk provides professional student visa (9F) filing support, document authentications (Apostille), credential evaluation filings, health insurance compliance, and outbound embassy processing.
              </p>

              {/* Action Link */}
              <a 
                href="#inquiry-section" 
                className="mt-6 flex items-center gap-1.5 text-xs text-[#0d9488] font-black uppercase tracking-widest hover:underline"
              >
                Begin Visa Consultation <ChevronRight className="w-4 h-4" />
              </a>
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
            
            {/* DESTINATION 1: MANILA, PHILIPPINES */}
            <div className="bg-white rounded-[32px] overflow-hidden shadow-jadoo hover:shadow-jadoo-hover transition-all duration-500 hover:-translate-y-2 group flex flex-col relative border border-[#efebe5]">
              <div className="h-80 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=600&q=80" 
                  alt="Manila study relocation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </div>
              <div className="p-7 flex flex-col gap-5 text-left bg-white relative z-10">
                <div className="flex items-center justify-between text-[17px] font-black text-[#5e6282] font-sans">
                  <span>Manila, Philippines</span>
                  <span className="text-[#181e4b] font-black">Inbound</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-[#181e4b] font-sans">
                  <svg className="w-4 h-4 text-[#181e4b] fill-current" viewBox="0 0 24 24">
                    <path d="M21 3L3 10.5L10.5 13.5L13.5 21L21 3Z" />
                  </svg>
                  <span className="text-secondary font-semibold">9F Student Visa Support</span>
                </div>
              </div>
            </div>

            {/* DESTINATION 2: LONDON, UK */}
            <div className="bg-white rounded-[32px] overflow-hidden shadow-jadoo hover:shadow-jadoo-hover transition-all duration-500 hover:-translate-y-2 group flex flex-col relative border border-[#efebe5]">
              <div className="h-80 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80" 
                  alt="London Relocation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </div>
              <div className="p-7 flex flex-col gap-5 text-left bg-white relative z-10">
                <div className="flex items-center justify-between text-[17px] font-black text-[#5e6282] font-sans">
                  <span>London, UK</span>
                  <span className="text-[#181e4b] font-black">Outbound</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-[#181e4b] font-sans">
                  <svg className="w-4 h-4 text-[#181e4b] fill-current" viewBox="0 0 24 24">
                    <path d="M21 3L3 10.5L10.5 13.5L13.5 21L21 3Z" />
                  </svg>
                  <span className="text-secondary font-semibold">Nursing & MBBS Pathways</span>
                </div>
              </div>
            </div>

            {/* DESTINATION 3: GENEVA, EUROPE */}
            <div className="bg-white rounded-[32px] overflow-hidden shadow-jadoo hover:shadow-jadoo-hover transition-all duration-500 hover:-translate-y-2 group flex flex-col relative border border-[#efebe5]">
              <div className="h-80 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80" 
                  alt="Geneva Relocation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </div>
              <div className="p-7 flex flex-col gap-5 text-left bg-white relative z-10">
                <div className="flex items-center justify-between text-[17px] font-black text-[#5e6282] font-sans">
                  <span>Geneva, Switzerland</span>
                  <span className="text-[#181e4b] font-black">Outbound</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-[#181e4b] font-sans">
                  <svg className="w-4 h-4 text-[#181e4b] fill-current" viewBox="0 0 24 24">
                    <path d="M21 3L3 10.5L10.5 13.5L13.5 21L21 3Z" />
                  </svg>
                  <span className="text-secondary font-semibold">Dentistry & Culinary Arts</span>
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
              Secure Your International Move In 3 Easy Steps
            </h2>

            <div className="flex flex-col gap-8 mt-8">
              
              {/* Step 1 */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-gold-accent flex-shrink-0 flex items-center justify-center text-white shadow-lg shadow-gold-accent/20 group-hover:scale-110 transition-transform duration-300">
                  <Compass className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-black text-[16px] text-primary">Consult Your Pathway</h4>
                  <p className="text-[13.5px] text-secondary font-medium leading-relaxed mt-1 max-w-sm">
                    Select either an Inbound Pathway (relocating to study/travel in the Philippines) or an Outbound Pathway (relocating abroad from the Philippines).
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-orange-accent flex-shrink-0 flex items-center justify-center text-white shadow-lg shadow-orange-accent/20 group-hover:scale-110 transition-transform duration-300">
                  <Compass className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-black text-[16px] text-primary">Secure Visas & Flight Bookings</h4>
                  <p className="text-[13.5px] text-secondary font-medium leading-relaxed mt-1 max-w-sm">
                    Let our mobility experts draft your student visa 9F files or prepare outbound visa sponsorships, while we secure consolidated flight tickets.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-[#0d9488] flex-shrink-0 flex items-center justify-center text-white shadow-lg shadow-[#0d9488]/20 group-hover:scale-110 transition-transform duration-300">
                  <Compass className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-black text-[16px] text-primary">Relocate & Settle In</h4>
                  <p className="text-[13.5px] text-secondary font-medium leading-relaxed mt-1 max-w-sm">
                    Fly on your scheduled date and meet your local municipal coordinator for university onboarding and housing settlement.
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
              <h4 className="font-black text-[#080809] text-[17px] tracking-wide mb-1.5">Study in Manila</h4>
              <div className="flex items-center gap-1.5 text-xs text-[#8f92a1] font-bold mb-4">
                <span>15-28 September</span>
                <span className="text-gray-300">|</span>
                <span>by Aura Global</span>
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
                  
                  
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. TESTIMONIALS SECTION (TRAVELER JOURNEY & STORY BOARD) */}
      {/* ---------------------------------------------------- */}
      <section className="py-28 relative overflow-hidden bg-soft-purple-gradient">
        {/* Decorative background vectors */}
        <div className="absolute top-[10%] left-[-5%] w-72 h-72 bg-violet-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[15px] uppercase tracking-[0.22em] font-black text-secondary">
              Traveler Journals
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-5xl text-[#181e4b] mt-3">
              Immersive Relocation Stories
            </h2>
            <p className="text-[15px] font-medium text-secondary max-w-xl mx-auto mt-4">
              Explore how Aura Global coordinates high-fidelity migrations, fast-track flight logistics, and local settlements around the globe.
            </p>
          </div>

          {/* Interactive Split-Screen Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto">
            
            {/* Sidebar Traveler Selector (Left 5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest font-black text-secondary px-2 mb-1">
                Select Traveler Journey
              </span>
              
              <div className="flex flex-col gap-4">
                {testimonials.map((t, idx) => {
                  const isActive = activeTestimonial === idx;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`w-full p-5 rounded-[28px] text-left transition-all duration-500 flex items-center gap-4 border cursor-pointer group ${
                        isActive
                          ? "bg-white border-violet-200 shadow-xl shadow-violet-500/5 -translate-y-1 scale-[1.02]"
                          : "bg-white/40 border-transparent hover:bg-white/70 hover:border-violet-100 hover:shadow-lg"
                      }`}
                    >
                      {/* Avatar */}
                      <div className="relative flex-shrink-0">
                        <div className={`w-14 h-14 rounded-2xl overflow-hidden border-2 transition-all duration-500 ${
                          isActive ? "border-orange-accent scale-105" : "border-white"
                        }`}>
                          <img 
                            src={
                              idx === 0 ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" :
                              idx === 1 ? "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" :
                              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
                            } 
                            alt={t.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {isActive && (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-accent rounded-full flex items-center justify-center text-white border-2 border-white shadow">
                            <Check className="w-3 h-3" />
                          </div>
                        )}
                      </div>

                      {/* Summary details */}
                      <div className="flex-grow min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className={`font-black text-sm transition-colors duration-300 ${
                            isActive ? "text-[#181e4b]" : "text-[#181e4b]/70"
                          }`}>
                            {t.name}
                          </h4>
                          <span className="text-[10px] bg-amber-500/10 text-amber-600 font-extrabold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                            <Star className="w-2.5 h-2.5 fill-amber-500 stroke-amber-500" />
                            {t.rating}.0
                          </span>
                        </div>
                        <span className="text-[11px] text-secondary font-bold block mt-0.5">
                          {t.role}
                        </span>
                        
                        <div className="flex items-center gap-1.5 mt-2 text-[10px] font-bold text-secondary">
                          <MapPin className="w-3.5 h-3.5 text-orange-accent flex-shrink-0" />
                          <span className="truncate">{t.from}</span>
                          <ChevronRight className="w-2.5 h-2.5 text-gray-300" />
                          <span className="truncate">{t.to}</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Traveler Story Display Board (Right 7 Cols) */}
            <div className="lg:col-span-7 flex">
              <div className="w-full bg-white p-8 md:p-10 rounded-[40px] border border-violet-100/50 shadow-2xl shadow-violet-500/5 flex flex-col justify-between relative overflow-hidden transition-all duration-700 animate-fade-in-up">
                
                {/* Visual Accent Corner Ribbon */}
                <div className="absolute top-0 right-0 bg-orange-accent/10 text-orange-accent font-black text-[11px] px-5 py-2.5 rounded-bl-3xl border-l border-b border-orange-accent/10 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> Verified Journey
                </div>

                <div className="flex flex-col gap-6">
                  
                  {/* Service Badge & Locations */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3.5 py-1.5 bg-violet-500/10 text-violet-600 font-sans font-black text-xs rounded-full uppercase tracking-wider">
                      {testimonials[activeTestimonial].serviceTag}
                    </span>
                    <div className="flex items-center gap-2 text-xs font-black text-[#181e4b]">
                      <span>{testimonials[activeTestimonial].from}</span>
                      <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#fbf9f4] border border-gray-100">
                        <Plane className="w-3.5 h-3.5 text-orange-accent rotate-45" />
                      </div>
                      <span>{testimonials[activeTestimonial].to}</span>
                    </div>
                  </div>

                  {/* Core Testimonial Quote */}
                  <div className="relative">
                    {/* Visual Quote mark backplate */}
                    <span className="absolute -left-4 -top-8 text-[120px] font-serif font-black text-violet-500/5 select-none pointer-events-none leading-none">“</span>
                    <p className="text-[17px] md:text-[19px] font-bold text-[#5e6282] leading-relaxed relative z-10 italic pl-1">
                      "{testimonials[activeTestimonial].quote}"
                    </p>
                  </div>
                </div>

                {/* Journey Pathways Milestones Tracker */}
                <div className="mt-8 pt-8 border-t border-gray-100/80">
                  <span className="text-xs uppercase tracking-widest font-black text-secondary block mb-5">
                    Completed Relocation Milestones
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                    {testimonials[activeTestimonial].milestones.map((m, mIdx) => (
                      <div key={mIdx} className="flex items-start gap-3">
                        <div className="w-5.5 h-5.5 rounded-full bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-[13px] font-bold text-[#181e4b] leading-tight">
                          {m}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Signature Board Footing */}
                <div className="mt-8 pt-8 border-t border-gray-100/80 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-100 shadow-sm flex-shrink-0">
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
                    <div className="flex flex-col text-left">
                      <h4 className="font-black text-base text-[#181e4b]">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <span className="text-[11px] text-secondary font-bold uppercase tracking-wider">
                        {testimonials[activeTestimonial].role}
                      </span>
                    </div>
                  </div>

                  {/* Trust Rating Block */}
                  <div className="flex flex-col items-end text-right">
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {Array.from({ length: 5 }).map((_, sIdx) => (
                        <Star key={sIdx} className="w-4 h-4 fill-amber-500 stroke-amber-500" />
                      ))}
                    </div>
                    <span className="text-[10px] text-secondary font-black uppercase tracking-wider mt-1.5">
                      Verified Client
                    </span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
          {/* ---------------------------------------------------- */}
      {/* 6.5 KNOWLEDGE HUB RELOCATION BLUEPRINTS (SEO BLOG GRID) */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#faf6f0]/40 to-transparent">
        {/* Decorative grids */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-grid-dots-gray opacity-20 pointer-events-none select-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[15px] uppercase tracking-[0.22em] font-black text-secondary">
              Relocation Resources
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-5xl text-[#181e4b] mt-3">
              Knowledge Hub & Blueprints
            </h2>
            <p className="text-[15px] font-medium text-secondary max-w-xl mx-auto mt-4">
              Access our top-ranked, expert-written resources to guide your studies and travel licensing pathways around nursing, dentistry, pharmacy, medicine, and culinary arts.
            </p>
          </div>

          {/* Dynamic Grid */}
          {posts.length === 0 ? (
            // Placeholder skeletons
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white/60 border border-gray-100 rounded-[32px] p-6 h-96 animate-pulse flex flex-col gap-4">
                  <div className="h-48 bg-gray-200 rounded-2xl w-full" />
                  <div className="h-6 bg-gray-200 rounded w-1/3" />
                  <div className="h-8 bg-gray-200 rounded w-3/4" />
                  <div className="h-12 bg-gray-200 rounded w-full" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {posts.slice(0, 3).map(post => {
                const postDate = post.published_at ? new Date(post.published_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                }) : 'Published';

                return (
                  <article 
                    key={post.id}
                    className="bg-white rounded-[32px] overflow-hidden border border-gray-100/80 hover:border-violet-100 shadow-jadoo hover:shadow-jadoo-hover transition-all duration-500 hover:-translate-y-2 group flex flex-col justify-between"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.featured_image || "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=400&q=80"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 text-[9px] uppercase tracking-widest font-black rounded-full bg-orange-accent text-white font-sans">
                        {post.category}
                      </div>
                    </div>

                    <div className="p-6 flex-grow flex flex-col justify-between gap-4 text-left">
                      <div className="flex flex-col gap-2">
                        {/* Meta */}
                        <div className="flex items-center gap-4 text-[10px] text-secondary/70 font-bold mb-1">
                          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {postDate}</span>
                        </div>
                        
                        <h3 className="font-serif font-black text-lg text-[#181e4b] group-hover:text-orange-accent transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-[13px] font-medium text-secondary line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-2">
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="flex items-center gap-1.5 text-xs text-orange-accent font-sans font-black uppercase tracking-wider hover:underline"
                        >
                          Read Blueprint <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                        </Link>
                        <span className="text-[10px] tracking-wide text-secondary/60 font-mono font-bold uppercase">
                          {post.tags?.[0] ? `#${post.tags[0]}` : ''}
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* Explore Button */}
          <div className="text-center mt-14">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-orange-accent border border-gray-100 hover:border-orange-accent text-[#181e4b] hover:text-white font-sans font-black text-xs uppercase tracking-widest rounded-2xl shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Explore All relocation insights <ChevronRight className="w-4 h-4" />
            </Link>
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

     
    </div>
  );
}

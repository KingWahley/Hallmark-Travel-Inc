'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Compass, 
  Plane, 
  ShieldCheck, 
  Check, 
  Star, 
  Award, 
  Users, 
  Target, 
  TrendingUp, 
  MapPin, 
  Calendar, 
  ChevronRight, 
  Sparkles,
  Heart,
  Briefcase,
  GraduationCap
} from 'lucide-react';

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState('mission');

  const coreValues = [
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Absolute Integrity",
      description: "We verify credentials meticulously and offer honest, transparent guidance. Hallmark leaves no stone unturned in ensuring complete legal compliance for all student and professional migrations.",
      color: "text-orange-accent",
      bgColor: "bg-rose-500/10",
      decorColor: "bg-orange-accent"
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: "Global Synergy",
      description: "Our strong alliances with top-tier international medical universities, embassy desks, and major airline fleets allow us to command fast-track routing and consolidated logistics.",
      color: "text-gold-accent",
      bgColor: "bg-amber-500/10",
      decorColor: "bg-gold-accent"
    },
    {
      icon: <Heart className="w-7 h-7" />,
      title: "Empathetic Support",
      description: "Relocating to a new country is a monumental life event. We provide a warm, highly-personalized human touch, accompanying students and executives from visa filing to local housing settlement.",
      color: "text-[#0d9488]",
      bgColor: "bg-teal-500/10",
      decorColor: "bg-[#0d9488]"
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Dynamic Innovation",
      description: "Immigration protocols shift rapidly. We employ modern compliance tools and unified tracking desks to keep travel bookings, academic placements, and student visa 9F files accurate.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-500/10",
      decorColor: "bg-indigo-600"
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Inception & Luxury Flight Desk",
      description: "Hallmark Travel Inc was established to deliver personalized corporate travel logistics, securing private charter operations and complex group bookings from Manila.",
      icon: <Plane className="w-5 h-5 text-orange-accent rotate-45" />,
      badge: "Inception"
    },
    {
      year: "2020",
      title: "Academic Admissions Desk",
      description: "Identified a massive need for bringing international scholars to the Philippines. We launched specialized university placement and visa assistance desks for medical, nursing, and dental programs.",
      icon: <GraduationCap className="w-5 h-5 text-gold-accent" />,
      badge: "Focus on Philippines"
    },
    {
      year: "2022",
      title: "Unified Travel & Tours Desk",
      description: "Expanded our operations to offer custom travel and tour packages worldwide, enabling explorers globally to tour inside the Philippines (Boracay, Palawan, Cebu) or any other destination.",
      icon: <Compass className="w-5 h-5 text-teal-600" />,
      badge: "Global Travel & Tours"
    },
    {
      year: "2025",
      title: "Premium Digital Relocation Hub",
      description: "Inaugurated our consolidated digital relocation platform, uniting airline ticketing, embassy processing, and local Taguig immigration services under a single high-fidelity banner.",
      icon: <Sparkles className="w-5 h-5 text-indigo-600" />,
      badge: "State of the Art"
    }
  ];

  const team = [
    {
      name: "Lilet Wahley",
      role: "Founder & Managing Director",
      bio: "A visionary in international mobility with over 15 years of experience in corporate travel frameworks, global partnerships, and elite travel operations.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      badge: "Executive Leadership",
      focus: "Strategic Partnerships"
    },
    {
      name: "Marcus Vance",
      role: "Head of Visa & Immigration Compliance",
      bio: "A legal expert specializing in consular relations, student visa 9F preparation, credentials evaluation filings, and complex in-country visa conversions.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      badge: "Visa Specialist",
      focus: "Student Visas & In-Country Permits"
    },
    {
      name: "Clarissa Santos",
      role: "Director of Travel & Tours",
      bio: "Leads our global tour operations, curating custom flight itineraries and hotel logistics for travelers exploring the Philippines or any other destination.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      badge: "Travel Operations",
      focus: "Travel & Tours Packages"
    },
    {
      name: "David Chen",
      role: "Lead Municipal Relocation Officer",
      bio: "Oversees local municipal integrations. Coordinates airport welcome desks, physical university registration, and premium housing onboarding for inbound scholars studying in the Philippines.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      badge: "Destination Lead",
      focus: "Local Housing & Onboarding"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-warm-gradient text-[#181e4b] min-h-screen py-24 font-sans">
      
      {/* PREMIUM MULTI-LAYER MESH DECORATOR OVERLAY */}
      <div className="absolute inset-0 -z-30 pointer-events-none select-none overflow-hidden">
        {/* Subtle grid of dots over the whole page */}
        <div className="absolute inset-0 bg-[radial-gradient(#e8e3d9_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-70" />
        
        {/* Large ambient colored blobs */}
        <div className="absolute top-[5%] right-[-10%] w-[800px] h-[800px] bg-blob-yellow rounded-full blur-[140px] opacity-80 animate-drift" />
        <div className="absolute top-[30%] left-[-20%] w-[600px] h-[600px] bg-blob-orange rounded-full blur-[130px] opacity-70 animate-drift-slow" />
        <div className="absolute top-[55%] right-[-15%] w-[700px] h-[700px] bg-blob-teal rounded-full blur-[150px] opacity-60 animate-drift" />
        <div className="absolute bottom-[5%] left-[-10%] w-[650px] h-[650px] bg-blob-purple rounded-full blur-[140px] opacity-70 animate-drift-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* ---------------------------------------------------- */}
        {/* 1. HERO SECTION (JADOO MATCHING COMPOSITION) */}
        {/* ---------------------------------------------------- */}
        <section className="relative pt-8 pb-20 md:pb-28">
          {/* Decorative background grid behind Hero title */}
          <div className="absolute top-0 right-12 w-28 h-28 bg-grid-dots opacity-20 pointer-events-none select-none hidden lg:block" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading & Introduction */}
            <div className="lg:col-span-6 flex flex-col gap-6 text-left relative z-10">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-accent/10 border border-orange-accent/20 text-orange-accent text-[11px] uppercase tracking-[0.2em] font-black mb-2 max-w-max">
                <Sparkles className="w-3.5 h-3.5" />
                Who We Are
              </div>

              <h1 className="font-serif font-black text-4xl sm:text-5xl md:text-[60px] leading-[1.1] text-[#181e4b] tracking-tight">
                Architects of <br />
                <span className="brush-highlight text-orange-accent">seamless study</span> <br />
                & travel tours
              </h1>

              <p className="text-[16px] leading-relaxed text-secondary font-medium max-w-lg mt-3">
                At Hallmark Travel Inc, we believe borders shouldn't hinder global education or exploration. We specialize in bringing international students to premier colleges in the Philippines, while coordinating custom travel & tour packages for travelers worldwide.
              </p>

              <div className="flex items-center gap-4 mt-6">
                <a 
                  href="#values" 
                  className="px-7 py-3.5 bg-gold-accent hover:bg-amber-600 text-white font-sans font-bold text-[14px] rounded-xl shadow-xl shadow-gold-accent/25 hover:shadow-gold-accent/35 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Our Philosophy
                </a>
                <a 
                  href="#team"
                  className="px-7 py-3.5 bg-white/60 hover:bg-white border border-[#efebe5] text-primary hover:text-orange-accent font-sans font-bold text-[14px] rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Meet Leadership
                </a>
              </div>
            </div>

            {/* Right Column: Premium Collage with Flight Traces */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[480px]">
                
                {/* Airplane flying decorative trace */}
                <div className="absolute inset-[-20px] -z-10 pointer-events-none opacity-20 select-none">
                  <svg className="w-full h-full" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M450 350 C350 150, 150 400, 50 100" stroke="#df6951" strokeWidth="2.5" strokeDasharray="6 6" />
                    <path d="M50 100 L70 105 L55 85 Z" fill="#df6951" />
                  </svg>
                </div>

                {/* Floating main collage card */}
                <div className="p-4 rounded-[48px] bg-white/40 backdrop-blur-md border border-white/60 shadow-2xl shadow-black/5 animate-float-card">
                  <div className="rounded-[36px] overflow-hidden border-2 border-white shadow-lg relative aspect-[4/3] w-full">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                      alt="Hallmark team collaboration" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Embedded floating statistics badge */}
                    <div className="absolute bottom-6 left-6 right-6 glass-panel p-4 rounded-2xl flex items-center justify-between text-left border border-white/50 shadow-lg">
                      <div>
                        <span className="text-[10px] uppercase font-black tracking-widest text-orange-accent block">Proven Track Record</span>
                        <h4 className="font-serif font-black text-xl text-primary mt-1">98.4% Visa Success</h4>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-orange-accent flex items-center justify-center text-white shadow-lg shadow-orange-accent/25">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 2. VISION & MISSION (INTERACTIVE / TABBED CONTAINER) */}
        {/* ---------------------------------------------------- */}
        <section id="values" className="py-20 border-t border-[#efebe5]/60 relative">
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[14px] uppercase tracking-[0.22em] font-black text-secondary font-sans">
              Our Compass
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-5xl text-[#181e4b] mt-3">
              Mission & Global Mandate
            </h2>
            <p className="text-[15px] font-medium text-secondary max-w-xl mx-auto mt-4">
              Hallmark Travel Inc acts as a dynamic catalyst, aligning academic aspirations and high-fidelity logistics under one unified compliance ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto relative z-10">
            
            {/* Vision Panel Card */}
            <div className="glass-panel p-8 md:p-10 rounded-[38px] border border-white shadow-jadoo relative overflow-hidden flex flex-col justify-between group">
              <div className="absolute top-6 right-6 w-20 h-20 bg-indigo-500/5 rounded-full flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform duration-500">
                <Target className="w-10 h-10" />
              </div>
              <div className="text-left mt-6">
                <span className="text-xs uppercase font-mono tracking-widest font-black text-indigo-600 block mb-3">Our Core Vision</span>
                <h3 className="font-sans font-black text-2xl text-primary mb-4">Empowering Two-Way Integration</h3>
                <p className="text-[14px] leading-relaxed text-secondary font-semibold">
                  We envision a world where student relocation and professional mobility flow seamlessly. By constructing highly integrated compliance, air transport, and local settlement pathways, we remove the anxiety of relocating between the Philippines and the wider globe. We pave the road for students to access premier medical, dental, culinary, and management education effortlessly.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-8 text-xs font-black text-indigo-600 uppercase tracking-widest">
                <span>Global Mobility Horizon</span> <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Mission Panel Card */}
            <div className="glass-panel p-8 md:p-10 rounded-[38px] border border-white shadow-jadoo relative overflow-hidden flex flex-col justify-between group">
              <div className="absolute top-6 right-6 w-20 h-20 bg-orange-accent/5 rounded-full flex items-center justify-center text-orange-accent group-hover:scale-110 transition-transform duration-500">
                <Compass className="w-10 h-10" />
              </div>
              <div className="text-left mt-6">
                <span className="text-xs uppercase font-mono tracking-widest font-black text-orange-accent block mb-3">Our Daily Mission</span>
                <h3 className="font-sans font-black text-2xl text-primary mb-4">Precision Relocation Desks</h3>
                <p className="text-[14px] leading-relaxed text-secondary font-semibold">
                  Our daily focus is the absolute precision execution of every relocation pathway. From student visa (9F) filing, health clearance integrations, and academic transcripts authentication to consolidated ticket bookings and welcoming local municipal support desks, Hallmark handles the heavy compliance operations so you can focus on your life-changing learning journey.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-8 text-xs font-black text-orange-accent uppercase tracking-widest">
                <span>Daily Execution Standards</span> <ChevronRight className="w-4 h-4" />
              </div>
            </div>

          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 3. CORE VALUES SECTION */}
        {/* ---------------------------------------------------- */}
        <section className="py-20 relative bg-gradient-to-b from-transparent via-[#faf6f0]/30 to-transparent">
          
          <div className="text-center mb-16">
            <span className="text-[14px] uppercase tracking-[0.22em] font-black text-secondary">
              Values First
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-5xl text-[#181e4b] mt-3">
              Built on Unwavering Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-[32px] bg-white shadow-jadoo hover:shadow-jadoo-hover border border-gray-100 hover:border-white transition-all duration-500 group text-left relative flex flex-col justify-between min-h-[300px]"
              >
                {/* Value accent block behind card */}
                <div className={`absolute -right-2 -bottom-2 w-20 h-20 ${val.decorColor}/10 rounded-tl-[24px] rounded-br-[24px] -z-10 group-hover:scale-105 transition-transform duration-500`} />
                
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${val.bgColor} ${val.color} flex items-center justify-center mb-6`}>
                    {val.icon}
                  </div>
                  <h3 className="font-sans font-black text-lg text-primary mb-3">
                    {val.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-secondary font-semibold">
                    {val.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-[10px] uppercase font-black tracking-widest text-[#181e4b]">
                  <span>Hallmark Pillar</span>
                  <Check className="w-3.5 h-3.5 stroke-[3] text-orange-accent" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 4. COMPANY HISTORY TIMELINE */}
        {/* ---------------------------------------------------- */}
        <section className="py-24 relative overflow-hidden bg-soft-blue-gradient rounded-[48px] px-8 md:px-12 my-12 border border-[#efebe5]/60 shadow-xl shadow-black/5">
          
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-[14px] uppercase tracking-[0.22em] font-black text-secondary">
              Our Milestones
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-5xl text-[#181e4b] mt-3">
              Chronicles of Expansion
            </h2>
            <p className="text-[15px] font-medium text-secondary mt-4">
              From a bespoke flight logistics operations team in Manila, Hallmark Travel Inc has steadily transformed into a comprehensive global relocation gateway.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center connector line for larger viewports */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-accent via-gold-accent to-teal-500 hidden md:block" />
            
            <div className="flex flex-col gap-12 md:gap-16">
              {milestones.map((ms, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div 
                    key={idx}
                    className={`flex flex-col md:flex-row items-stretch justify-between relative ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Left/Right content block */}
                    <div className="w-full md:w-[45%] text-left">
                      <div className="glass-panel p-7 md:p-8 rounded-[28px] border border-white/60 shadow-md hover:shadow-lg transition-all duration-300 relative group">
                        
                        {/* Milestone Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[11px] uppercase font-black tracking-widest text-orange-accent bg-orange-accent/10 px-3 py-1 rounded-full">
                            {ms.badge}
                          </span>
                          <span className="font-serif font-black text-3xl text-primary opacity-25">
                            {ms.year}
                          </span>
                        </div>

                        <h3 className="font-sans font-black text-lg text-primary mb-3">
                          {ms.title}
                        </h3>
                        <p className="text-[13px] leading-relaxed text-secondary font-semibold">
                          {ms.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Node Point */}
                    <div className="absolute left-4 md:left-1/2 top-6 -translate-x-[15px] md:-translate-x-1/2 flex items-center justify-center z-10">
                      <div className="w-9 h-9 rounded-full bg-white border-2 border-orange-accent flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        {ms.icon}
                      </div>
                    </div>

                    {/* Empty spacer block for layouts */}
                    <div className="hidden md:block w-[45%]" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 5. TEAM DIRECTORY (HIGH FIDELITY PORTRAITS) */}
        {/* ---------------------------------------------------- */}
        <section id="team" className="py-24 relative overflow-hidden">
          
          <div className="text-center mb-20">
            <span className="text-[14px] uppercase tracking-[0.22em] font-black text-secondary">
              Relocation Guides
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-5xl text-[#181e4b] mt-3">
              Meet Our Visionaries
            </h2>
            <p className="text-[15px] font-medium text-secondary max-w-xl mx-auto mt-4">
              Our directors and operations leaders command decades of combined expertise in international admissions, document legalizations, and executive relocation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto relative z-10">
            {team.map((member, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-[38px] overflow-hidden border border-gray-100/80 hover:border-white shadow-jadoo hover:shadow-jadoo-hover transition-all duration-500 hover:-translate-y-2 group flex flex-col justify-between"
              >
                {/* Avatar portrait with overlay details */}
                <div className="h-80 overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent pointer-events-none" />
                  
                  {/* Badge positioned overlay */}
                  <div className="absolute top-4 left-4 px-3.5 py-1 text-[9px] uppercase tracking-widest font-black rounded-full bg-orange-accent text-white font-sans shadow-md">
                    {member.badge}
                  </div>

                  {/* Focus detail floating bottom */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-white font-sans">
                    <Sparkles className="w-3.5 h-3.5 text-gold-accent" />
                    <span>Focus: {member.focus}</span>
                  </div>
                </div>

                {/* Narrative Details */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between gap-4 text-left">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif font-black text-xl text-primary group-hover:text-orange-accent transition-colors duration-300">
                      {member.name}
                    </h3>
                    <span className="text-xs text-orange-accent font-black uppercase tracking-widest font-sans">
                      {member.role}
                    </span>
                    <p className="text-[13px] leading-relaxed text-[#5e6282] font-semibold mt-2 line-clamp-4">
                      {member.bio}
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-4 flex items-center justify-between mt-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gold-accent font-mono">
                      Hallmark Leader
                    </span>
                    <Link 
                      href="/contact" 
                      className="text-[11px] font-sans font-black text-[#181e4b] hover:text-orange-accent transition-colors uppercase tracking-widest"
                    >
                      Consult
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 6. CALL TO ACTION SECTION */}
        {/* ---------------------------------------------------- */}
        <section className="py-16 md:py-24 relative overflow-hidden rounded-[48px] bg-gradient-to-tr from-indigo-900 to-indigo-950 text-white shadow-xl shadow-indigo-950/20 text-center my-12">
          {/* Subtle dots layout inside dark CTA */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          
          <div className="absolute top-[10%] right-[-5%] w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none animate-drift-slow" />
          <div className="absolute bottom-[10%] left-[-5%] w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-drift" />

          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center gap-6">
            <span className="text-xs uppercase font-sans font-black tracking-[0.25em] text-gold-accent bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/25">
              Secure Mobility Desk
            </span>

            <h2 className="font-serif font-black text-3xl sm:text-5xl text-white leading-tight max-w-2xl">
              Ready to construct your global academic or travel pathway?
            </h2>

            <p className="text-[15px] text-indigo-200/90 leading-relaxed font-semibold max-w-xl">
              Connect with our dedicated visa legal counsels and airline ticketing operations team to fast-track your inbound or outbound migration.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-8 py-4 bg-orange-accent hover:bg-[#c54b34] text-white font-sans font-bold text-[14px] rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap text-center"
              >
                Inquire Outbound Pathway
              </Link>
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-8 py-4 bg-gold-accent hover:bg-amber-600 text-white font-sans font-bold text-[14px] rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap text-center"
              >
                Inquire Inbound Pathway
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

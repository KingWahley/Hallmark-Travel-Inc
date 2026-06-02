'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Compass, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Check, 
  Star, 
  ChevronDown, 
  ShieldCheck, 
  Plane, 
  Sparkles, 
  Loader2, 
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { submitInquiry } from '@/lib/db';

export default function ContactUs() {
  // Form State
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Study Abroad (Focus: Philippines)',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      id: 0,
      question: "How long does student visa (9F) filing usually take?",
      answer: "Typically, student visa (9F) preparation and filing takes between 4 to 6 weeks. This includes the university releasing the Notice of Acceptance (NOA), NICA clearance processing, and physical consular appointments. Our dedicated visa desk assists you at each of these milestones."
    },
    {
      id: 1,
      question: "What documents need to be authenticated (Apostille)?",
      answer: "For both outbound and inbound pathways, academic records (transcripts and diplomas), birth certificates, and police clearances must be authenticated or Apostilled by the originating country's Department of Foreign Affairs (or equivalent authority) to be legally compliant."
    },
    {
      id: 2,
      question: "Do you coordinate consolidated group flights?",
      answer: "Yes! Hallmark coordinates specialized consolidated group flight ticketing and airport transfers. This ensures students and relocators travel together, securing preferential baggage weights and dedicated airport meet-and-greet support."
    },
    {
      id: 3,
      question: "How does the local municipal housing settlement work?",
      answer: "Once your flight lands, your assigned local municipal coordinator meets you at the airport and guides you physically through university registration, cell network setup, banking onboarding, and moving into your pre-verified apartment or campus residence."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.name) return;
    
    setSubmitting(true);
    setSubmitStatus(null);
    
    try {
      await submitInquiry({
        name: form.name,
        email: form.email,
        phone: form.phone || '',
        service: form.service,
        message: form.message || 'Consultation inquiry submitted via Contact Us page.'
      });
      setSubmitStatus('success');
      // Reset form fields
      setForm({
        name: '',
        email: '',
        phone: '',
        service: 'Study Abroad (Focus: Philippines)',
        message: ''
      });
    } catch (err) {
      console.error("Submission failed:", err);
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="relative overflow-hidden bg-warm-gradient text-[#181e4b] min-h-screen py-24 font-sans">
      
      {/* PREMIUM MULTI-LAYER MESH DECORATOR OVERLAY */}
      <div className="absolute inset-0 -z-30 pointer-events-none select-none overflow-hidden">
        {/* Subtle dot pattern grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#e8e3d9_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-70" />
        
        {/* Ambient background colors blobs */}
        <div className="absolute top-[8%] left-[-15%] w-[700px] h-[700px] bg-blob-orange rounded-full blur-[140px] opacity-70 animate-drift-slow" />
        <div className="absolute top-[35%] right-[-10%] w-[800px] h-[800px] bg-blob-yellow rounded-full blur-[130px] opacity-80 animate-drift" />
        <div className="absolute bottom-[10%] left-[-5%] w-[650px] h-[650px] bg-blob-purple rounded-full blur-[140px] opacity-70 animate-drift-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* ---------------------------------------------------- */}
        {/* 1. HERO SECTION (EDITORIAL STYLE HEADER) */}
        {/* ---------------------------------------------------- */}
        <section className="relative pt-6 pb-16 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-accent/10 border border-orange-accent/20 text-orange-accent text-[11px] uppercase tracking-[0.2em] font-black mb-6">
            <Compass className="w-3.5 h-3.5" />
            Relocation Desk
          </div>
          <h1 className="font-serif font-black text-4xl sm:text-6xl text-primary leading-[1.1] tracking-tight">
            Connect with our <br />
            <span className="brush-highlight text-orange-accent">global mobility</span> experts
          </h1>
          <p className="text-[15px] leading-relaxed text-secondary font-semibold max-w-2xl mx-auto mt-6">
            Whether you are coordinating an outbound professional study path, or scheduling a complex group flight ticket booking, Hallmark is ready to handle your immigration compliance.
          </p>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 2. FORM & COORDINATES SECTION */}
        {/* ---------------------------------------------------- */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto mb-20 relative z-10">
          
          {/* LEFT: Premium Glassmorphism Consultation Form (7 Cols) */}
          <div className="lg:col-span-7 flex">
            <div className="w-full bg-white p-8 md:p-10 rounded-[40px] border border-gray-100 shadow-2xl shadow-black/5 flex flex-col justify-between relative overflow-hidden text-left">
              
              {/* Top Accent Stripe */}
              <div className="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-orange-accent via-gold-accent to-indigo-600" />
              
              <div>
                <h2 className="font-serif font-black text-2xl md:text-3xl text-primary mb-2">
                  Book Mobility Consultation
                </h2>
                <p className="text-[13.5px] font-semibold text-secondary mb-8">
                  Fill in your travel parameters and credentials. An assigned pathway advisor will reach out within 24 hours.
                </p>

                {submitStatus === 'success' ? (
                  // Elegant success popup
                  <div className="py-12 px-6 bg-emerald-500/5 border border-emerald-500/10 rounded-[32px] text-center flex flex-col items-center gap-5 animate-fade-in-up">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 shadow-lg shadow-emerald-500/10">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <h3 className="font-serif font-black text-2xl text-primary">Inquiry Secured</h3>
                    <p className="text-[13.5px] leading-relaxed text-secondary font-semibold max-w-md">
                      Thank you! Your relocation details have been logged in our databases. A verified Hallmark pathway counselor will review your transcripts and visa requirements immediately.
                    </p>
                    <button 
                      onClick={() => setSubmitStatus(null)}
                      className="mt-4 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-sans font-black uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md shadow-emerald-600/20"
                    >
                      Book Another Pathway
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                    
                    {/* Two Column Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Name input */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-[#181e4b] pl-1">Full Name *</label>
                        <input 
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleInputChange}
                          placeholder="Mike Taylor"
                          className="w-full px-5 py-3.5 bg-[#fbf9f4]/60 border border-gray-100/80 rounded-xl text-sm font-medium text-primary focus:ring-2 focus:ring-orange-accent focus:outline-none placeholder-gray-400"
                        />
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-[#181e4b] pl-1">Email Channel *</label>
                        <input 
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleInputChange}
                          placeholder="mtaylor@company.com"
                          className="w-full px-5 py-3.5 bg-[#fbf9f4]/60 border border-gray-100/80 rounded-xl text-sm font-medium text-primary focus:ring-2 focus:ring-orange-accent focus:outline-none placeholder-gray-400"
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Phone input */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-[#181e4b] pl-1">Phone / WhatsApp</label>
                        <input 
                          type="text"
                          name="phone"
                          value={form.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 321-7654"
                          className="w-full px-5 py-3.5 bg-[#fbf9f4]/60 border border-gray-100/80 rounded-xl text-sm font-medium text-primary focus:ring-2 focus:ring-orange-accent focus:outline-none placeholder-gray-400"
                        />
                      </div>

                      {/* Service selector */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-[#181e4b] pl-1">Pathway Category *</label>
                        <select 
                          name="service"
                          value={form.service}
                          onChange={handleInputChange}
                          className="w-full px-5 py-3.5 bg-[#fbf9f4]/60 border border-gray-100/80 rounded-xl text-sm font-medium text-primary focus:ring-2 focus:ring-orange-accent focus:outline-none appearance-none cursor-pointer"
                        >
                          <option value="Study Abroad (Focus: Philippines)">Study Abroad (Focus: Philippines)</option>
                          <option value="Travel & Tours Packages">Travel & Tours Packages</option>
                          <option value="In-Country Foreigner Services (Inside PH Only)">In-Country Foreigner Services (Inside PH Only)</option>
                        </select>
                      </div>

                    </div>

                    {/* Message Text area */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-black uppercase tracking-widest text-[#181e4b] pl-1">Credentials & Relocation Details</label>
                      <textarea 
                        name="message"
                        rows="4"
                        value={form.message}
                        onChange={handleInputChange}
                        placeholder="Detail your intended program (e.g. Nursing BSN, Dental DMD, MBBS Medicine) or corporate group travel logistics timeline..."
                        className="w-full px-5 py-4 bg-[#fbf9f4]/60 border border-gray-100/80 rounded-xl text-sm font-medium text-primary focus:ring-2 focus:ring-orange-accent focus:outline-none placeholder-gray-400 resize-none"
                      />
                    </div>

                    {submitStatus === 'error' && (
                      <div className="text-xs font-bold text-orange-accent bg-rose-500/10 px-4 py-2.5 rounded-lg border border-rose-500/10">
                        Oops! Submission encountered an error. Please double-check your connectivity and try again.
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="mt-2 w-full py-4 bg-orange-accent hover:bg-[#c54b34] text-white font-sans font-bold text-sm rounded-xl shadow-xl shadow-orange-accent/25 hover:shadow-orange-accent/35 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Filing Inquiries...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Pathway Inquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                  </form>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT: Coordinates & Office Info (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between text-left">
            
            {/* Coordinates Box */}
            <div className="bg-white p-7 md:p-8 rounded-[38px] border border-gray-100 shadow-xl shadow-black/5 flex flex-col gap-6 relative overflow-hidden">
              <div className="absolute -right-2 -bottom-2 w-24 h-24 bg-gold-accent/5 rounded-tl-[32px] rounded-br-[38px] -z-10" />
              
              <h3 className="font-serif font-black text-xl text-primary border-b border-gray-100 pb-4">
                Office Support Desks
              </h3>

              <div className="flex flex-col gap-5">
                
                {/* Office 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-accent/10 flex items-center justify-center text-orange-accent flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-black tracking-widest text-orange-accent block">Philippines HQ</span>
                    <h4 className="font-sans font-black text-sm text-primary mt-0.5">Hallmark Travel Inc.</h4>
                    <p className="text-xs text-secondary font-medium leading-relaxed mt-1 max-w-[220px]">
                      20th floor, Uptown place Tower, 2 11th As, Uptown Bonifacio, Taguig, 1634, Metro Manila
                    </p>
                  </div>
                </div>

                {/* Office 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-accent/10 flex items-center justify-center text-gold-accent flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-black tracking-widest text-gold-accent block">Nigeria Branch</span>
                    <h4 className="font-sans font-black text-sm text-primary mt-0.5">Hallmark Travel Inc.</h4>
                    <p className="text-xs text-secondary font-medium leading-relaxed mt-1 max-w-[220px]">
                      #1 paint industry, Umuayalu (opposite comprehensive secondary school) Egbu, Owerri, Imo State
                    </p>
                  </div>
                </div>

                {/* Phone contact */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-600 flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-black tracking-widest text-teal-600 block">Immediate Hotlines</span>
                    <div className="flex flex-col gap-1.5 mt-1">
                      <span className="text-xs text-primary font-bold block"><strong className="text-orange-accent">PH Globe:</strong> +63 (906) 378 5826</span>
                      <span className="text-xs text-primary font-bold block"><strong className="text-orange-accent">PH Smart:</strong> +63 (949) 365 9365</span>
                      <span className="text-xs text-primary font-bold block"><strong className="text-gold-accent">NG Hotline:</strong> +234 803 321 7084</span>
                    </div>
                  </div>
                </div>

                {/* Email Support */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-black tracking-widest text-indigo-600 block">Electronic Mailing</span>
                    <h4 className="font-sans font-black text-sm text-primary mt-0.5">support@hallmarktravel.com</h4>
                    <span className="text-[11px] text-secondary font-medium block">Official documentation submissions</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Trust Seal Box */}
            <div className="glass-panel p-6 rounded-[28px] border border-white/60 shadow-md text-left flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 flex-shrink-0 shadow-inner">
                <ShieldCheck className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h4 className="font-sans font-black text-sm text-primary">Fully Certified Advisor Agency</h4>
                <p className="text-[11px] leading-relaxed text-secondary font-medium mt-0.5">
                  Our visa legal desk holds official accreditations for filing inbound student visa 9F permits and credentials evaluations.
                </p>
              </div>
            </div>

          </div>

        </section>

        {/* ---------------------------------------------------- */}
        {/* 3. INTERACTIVE FAQ ACCORDIONS */}
        {/* ---------------------------------------------------- */}
        <section className="py-16 border-t border-[#efebe5]/60 max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-[14px] uppercase tracking-[0.22em] font-black text-secondary">
              FAQ Desk
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-5xl text-primary mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={faq.id}
                  className="bg-white rounded-[24px] border border-gray-100/80 shadow-md overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer group focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-orange-accent flex-shrink-0" />
                      <span className="font-sans font-black text-sm sm:text-[15px] text-primary group-hover:text-orange-accent transition-colors duration-300">
                        {faq.question}
                      </span>
                    </div>
                    <div className={`w-8 h-8 rounded-full bg-[#fcfbf9] border border-gray-100 flex items-center justify-center text-secondary transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-orange-accent' : ''
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <div className={`transition-all duration-500 overflow-hidden ${
                    isOpen ? 'max-h-56 border-t border-gray-50' : 'max-h-0'
                  }`}>
                    <p className="px-6 py-5 text-xs sm:text-[13.5px] leading-relaxed text-secondary font-semibold bg-[#faf9f4]/30 text-left">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </section>

      </div>
    </div>
  );
}

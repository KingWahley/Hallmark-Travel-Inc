'use client';

import { useState } from 'react';
import { 
  Compass, 
  Check, 
  ChevronDown, 
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
    service: 'Studying in the Philippines',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      id: 0,
      question: "Do I need a visa to study in the Philippines?",
      answer: "Yes. If your country requires a visa to enter the Philippines, or if you’re pursuing a degree, you’ll need a 9(F) Student Visa. You cannot enter the Philippines as a tourist to study; you must secure your student visa from the Philippine Embassy or Consulate in your home country specifically for the purpose of studying. You can reach us on WhatsApp (+63 906 378 5826) for further assistance on school admission and visa applications."
    },
    {
      id: 1,
      question: "How long does the student visa (9F) process take?",
      answer: "Processing usually takes around 3 weeks, though it can take 3–6 weeks at some embassies — for example in Nigeria, Pakistan, or Iran. Because timelines vary, we always recommend starting your application 3–4 months before your intended start date."
    },
    {
      id: 2,
      question: "Which documents need to be authenticated or apostilled?",
      answer: "Typically your academic records (transcripts and diplomas), birth certificate, and police clearance must be authenticated or apostilled by the relevant authority in your home country (usually the Department of Foreign Affairs or equivalent). Any document not originally in English must also be officially translated. Your Notice of Acceptance from the university is apostilled by the Philippine DFA before it’s couriered to you."
    },
    {
      id: 3,
      question: "Are university classes taught in English?",
      answer: "Yes — 100% of university courses in the Philippines are taught in English. We assist with admissions into all courses and programs of choice, and we also provide assistance in choosing a school that suits you if you do not have any preference. The Philippines is the third-largest English-speaking nation in the world, so there’s no language barrier for international students."
    },
    {
      id: 4,
      question: "Can international students work while studying?",
      answer: "A student visa does not automatically grant work rights in the Philippines. Limited work is only possible with the proper permits, and the most common legal option for students is online freelancing for overseas clients. Be cautious of “easy job” offers — some are scams that can put your visa at risk. Our DIY Starter Kit explains the full legal framework in detail."
    },
    {
      id: 5,
      question: "How much does it cost to study in the Philippines?",
      answer: "Tuition ranges from roughly $800 to $8,000 per year depending on your course, with monthly living costs of about $350–800 depending on your city. Compared to $15,000–40,000 per year in many Western countries, it’s an affordable, English-medium option. Message us for a personalised estimate for your course and city."
    },
    {
      id: 6,
      question: "Do you also handle travel and tours?",
      answer: "Yes. Alongside our education services, Hallmark Travel Inc. provides holiday packages, group and corporate travel, visa-assisted trips, and complete flight and hotel arrangements. Just let us know what you need."
    },
    {
      id: 7,
      question: "Why should I choose Hallmark Travel Inc.?",
      answer: "We’re a registered Philippine company with more than 10 years of experience helping international students study in the Philippines. We’ve guided students through every step of the journey — from choosing a school to settling in after arrival — and we’re always reachable on WhatsApp for quick, honest help."
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
        service: 'Studying in the Philippines',
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
            Let’s talk about your journey
          </h1>
          <p className="text-[15px] leading-relaxed text-secondary font-semibold max-w-2xl mx-auto mt-6">
            Whether you’re planning to study in the Philippines, booking a trip, or need help with your visa, we’re here to make it simple. Send us a message and a member of our team will get back to you — usually within 24 hours. For the fastest reply, message us directly on WhatsApp.
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
                  Send us a message
                </h2>
                <p className="text-[13.5px] font-semibold text-secondary mb-8">
                  Fill in the details below and we'll get back to you soon.
                </p>

                {submitStatus === 'success' ? (
                  // Elegant success popup
                  <div className="py-12 px-6 bg-emerald-500/5 border border-emerald-500/10 rounded-[32px] text-center flex flex-col items-center gap-5 animate-fade-in-up">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 shadow-lg shadow-emerald-500/10">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <h3 className="font-serif font-black text-2xl text-primary">Message Sent</h3>
                    <p className="text-[13.5px] leading-relaxed text-secondary font-semibold max-w-md">
                      Thank you! We’ve received your message and will get back to you soon. For a faster reply, message us on{' '}
                      <a 
                        href="https://wa.me/639661389726" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#1a7f6e] hover:underline font-bold"
                      >
                        WhatsApp
                      </a>.
                    </p>
                    <button 
                      onClick={() => setSubmitStatus(null)}
                      className="mt-4 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-sans font-black uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md shadow-emerald-600/20"
                    >
                      Send Another Message
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
                        <label className="text-[11px] font-black uppercase tracking-widest text-[#181e4b] pl-1">Email *</label>
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
                        <label className="text-[11px] font-black uppercase tracking-widest text-[#181e4b] pl-1">What can we help you with? *</label>
                        <select 
                          name="service"
                          value={form.service}
                          onChange={handleInputChange}
                          className="w-full px-5 py-3.5 bg-[#fbf9f4]/60 border border-gray-100/80 rounded-xl text-sm font-medium text-primary focus:ring-2 focus:ring-orange-accent focus:outline-none appearance-none cursor-pointer"
                        >
                          <option value="Studying in the Philippines">Studying in the Philippines</option>
                          <option value="Travel & Tour Packages">Travel & Tour Packages</option>
                          <option value="In-country services (for foreigners already in the Philippines)">In-country services (for foreigners already in the Philippines)</option>
                          <option value="Something else">Something else</option>
                        </select>
                      </div>

                    </div>

                    {/* Message Text area */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-black uppercase tracking-widest text-[#181e4b] pl-1">Your message</label>
                      <textarea 
                        name="message"
                        rows="4"
                        value={form.message}
                        onChange={handleInputChange}
                        placeholder="Tell us a little about what you need…"
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
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
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
          <div className="lg:col-span-5 flex flex-col gap-6 justify-start text-left">
            
            {/* Coordinates Box */}
            <div className="bg-white p-7 md:p-8 rounded-[38px] border border-gray-100 shadow-xl shadow-black/5 flex flex-col gap-6 relative overflow-hidden">
              <div className="absolute -right-2 -bottom-2 w-24 h-24 bg-gold-accent/5 rounded-tl-[32px] rounded-br-[38px] -z-10" />
              
              <h3 className="font-serif font-black text-xl text-primary border-b border-gray-100 pb-4">
                Prefer to talk now?
              </h3>

              <div className="flex flex-col gap-5">
                
                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0" role="img" aria-label="WhatsApp">💬</span>
                  <div className="text-sm font-semibold text-secondary leading-relaxed">
                    <span className="text-primary font-bold">WhatsApp us:</span>{' '}
                    <a 
                      href="https://wa.me/639661389726" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#1a7f6e] hover:underline font-black whitespace-nowrap"
                    >
                      +63 966 138 9726
                    </a>{' '}
                    <span className="text-xs text-gray-500 block sm:inline">— fastest way to reach us</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0" role="img" aria-label="Email">✉️</span>
                  <div className="text-sm font-semibold text-secondary leading-relaxed break-all">
                    <span className="text-primary font-bold">Email:</span>{' '}
                    <a 
                      href="mailto:admission@hallmarkconsultancy.com" 
                      className="text-[#1a7f6e] hover:underline font-black"
                    >
                      admission@hallmarkconsultancy.com
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0" role="img" aria-label="Website">🌐</span>
                  <div className="text-sm font-semibold text-secondary leading-relaxed">
                    <a 
                      href="https://hallmarkconsultancy.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:underline font-bold"
                    >
                      hallmarkconsultancy.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0" role="img" aria-label="Address">📍</span>
                  <div className="text-sm font-semibold text-secondary leading-relaxed">
                    <span>#250 Northbay Blvd., Navotas City, Metro Manila</span>
                  </div>
                </div>

              </div>

              {/* Green WhatsApp button */}
              <a 
                href="https://wa.me/639661389726"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#25d366] hover:bg-[#20ba59] text-white font-sans font-black uppercase tracking-wider text-xs rounded-xl shadow-lg shadow-[#25d366]/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 0 0 1.333 4.993L2 22l5.13-1.347a9.96 9.96 0 0 0 4.88 1.28c5.508 0 9.99-4.479 9.991-9.986.002-5.507-4.48-9.985-9.989-9.985zm7.154 14.137c-.31.868-1.787 1.62-2.477 1.704-.69.083-1.554.084-2.502-.22a10.99 10.99 0 0 1-5.111-3.237c-.328-.328-.624-.68-.888-1.054a11.164 11.164 0 0 1-1.637-3.155c-.276-.906-.296-1.764-.08-2.482.21-.698.814-1.22 1.135-1.536.321-.316.643-.314.857-.314h.6c.19 0 .428.007.618.455.19.448.653 1.594.71 1.708.058.113.095.245.02.395-.077.15-.156.324-.265.45-.11.127-.23.284-.33.398-.108.125-.224.26-.096.48.128.22.569.939 1.22 1.52.839.75 1.543 1.018 1.763 1.128.22.11.35.093.48-.057.13-.15.565-.66.715-.886.15-.226.3-.188.508-.113.208.075 1.32.622 1.547.735.227.113.378.17.435.264.057.094.057.546-.253 1.414z"/>
                </svg>
                <span>Chat with us on WhatsApp</span>
              </a>

            </div>

            {/* Trust Line */}
            <p className="text-[11px] leading-relaxed text-secondary font-semibold pl-4">
              Hallmark Travel Inc. — a registered Philippine company with more than 10 years of experience helping international students study in the Philippines.
            </p>

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
                    isOpen ? 'max-h-72 border-t border-gray-50' : 'max-h-0'
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

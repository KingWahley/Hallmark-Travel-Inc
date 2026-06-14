'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  User, 
  ChevronDown, 
  ChevronUp, 
  Send, 
  Sparkles, 
  ArrowLeft,
  Compass,
  Briefcase
} from 'lucide-react';
import { submitInquiry } from '@/lib/db';

const formatDateUTC = (dateStr) => {
  if (!dateStr) return 'Draft';
  const d = new Date(dateStr);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return `${months[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
};

export default function BlogDetailClient({ post, relatedPosts }) {
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Inquiry Form State using friendly terms
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    message: `Hello! I just read your article "${post.title}" and would love to speak with a Hallmark travel advisor about my options.` 
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    setSubmitting(true);
    setSubmitStatus(null);

    try {
      await submitInquiry({
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: 'Study Abroad (Focus: Philippines)',
        message: form.message
      });
      setSubmitStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  // Structured SEO schemas
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": [post.featured_image || "https://images.unsplash.com/photo-1488646953014-85cb44e25828"],
    "datePublished": post.published_at || post.created_at,
    "dateModified": post.updated_at || post.created_at,
    "author": [{
      "@type": "Person",
      "name": post.author || "Global Mobility Advisor",
      "url": "https://www.hallmarkconsultancy.com"
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Hallmark Travel Inc",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.hallmarkconsultancy.com/favicon.ico"
      }
    },
    "description": post.excerpt
  };

  const hasFaq = post.faq && post.faq.length > 0;
  const faqSchema = hasFaq ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  const postDate = formatDateUTC(post.published_at);

  return (
    <div className="relative min-h-screen bg-[#fffdfa] text-[#181e4b] pb-24 font-sans overflow-x-clip">
      
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Ambient drifting decorative background blobs */}
      <div className="absolute top-[5%] -left-20 w-[500px] h-[500px] bg-blob-orange rounded-full pointer-events-none animate-drift-slow z-0" />
      <div className="absolute top-[35%] right-[-10%] w-[500px] h-[500px] bg-blob-purple rounded-full pointer-events-none animate-drift z-0" />
      <div className="absolute bottom-[5%] left-[5%] w-[400px] h-[400px] bg-blob-yellow rounded-full pointer-events-none animate-drift-slow z-0" />

      {/* 1. EDITORIAL HEADER */}
      <section className="relative py-12 md:py-16 bg-gradient-to-b from-[#faf6f0] to-[#fffdfa] border-b border-gray-100 z-10">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Breadcrumbs link */}
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#df6951] font-extrabold hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="max-w-4xl text-left">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-orange-accent/10 border border-orange-accent/20 text-[#df6951] text-[10px] uppercase tracking-widest font-black font-sans mb-4">
              {post.category}
            </span>
            
            <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5.5xl text-[#181e4b] leading-tight tracking-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs text-[#5e6282] font-semibold border-t border-gray-100 pt-6">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#df6951]" /> {postDate}</span>
              <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-[#f1a501]" /> Article by {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT BODY */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        
        {/* Left column - Article details */}
        <article className="lg:col-span-8 flex flex-col gap-10 text-left">
          
          {/* Cover image */}
          {post.featured_image && (
            <div className="relative h-[250px] sm:h-[430px] w-full rounded-[32px] overflow-hidden border border-gray-100 shadow-jadoo">
              <img 
                src={post.featured_image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Richtext body content */}
          <div 
            className="blog-content-body max-w-none text-[#5e6282] leading-relaxed text-sm sm:text-[15.5px]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags keywords */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-gray-100">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold font-mono mr-2">Keywords:</span>
              {post.tags.map(tag => (
                <span 
                  key={tag}
                  className="px-3.5 py-1 bg-white border border-gray-100 rounded-xl text-xs font-semibold text-[#5e6282] shadow-2xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* FAQ Accordion Section */}
          {hasFaq && (
            <div className="mt-8 pt-8 border-t border-gray-150">
              <h3 className="font-serif font-black text-2xl text-[#181e4b] mb-6">Frequently Asked Questions</h3>
              <div className="flex flex-col gap-4">
                {post.faq.map((item, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div 
                      key={idx}
                      className="bg-white rounded-2xl border border-gray-100 shadow-jadoo overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between p-5 text-left font-serif font-black text-[14.5px] text-[#181e4b] hover:text-[#df6951] transition-colors"
                      >
                        <span>{item.question}</span>
                        {isOpen ? <ChevronUp className="w-4 h-4 text-[#df6951]" /> : <ChevronDown className="w-4 h-4 text-[#df6951]" />}
                      </button>
                      
                      <div className={`transition-all duration-500 overflow-hidden ${
                        isOpen ? 'max-h-96 border-t border-gray-50' : 'max-h-0'
                      }`}>
                        <p className="p-5 text-xs sm:text-sm font-semibold text-[#5e6282] leading-relaxed bg-[#fffdfa]/60">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </article>

        {/* Right column - Inquiry sidebar */}
        <aside className="lg:col-span-4 lg:self-start lg:sticky lg:top-28">
          <div className="bg-white p-6 sm:p-8 rounded-[28px] border border-gray-100 shadow-jadoo">
            
            <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-gray-100">
              <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center text-[#df6951]">
                <Briefcase className="w-4.5 h-4.5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-sans font-extrabold text-sm text-[#181e4b] leading-none">Consultation Desk</span>
                <span className="text-[9px] tracking-wider uppercase text-slate-400 font-bold mt-1.5">
                  Book Visa & Study
                </span>
              </div>
            </div>

            {submitStatus === 'success' ? (
              <div className="text-center py-6 flex flex-col items-center gap-3 animate-fade-in-up">
                <div className="w-12 h-12 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-[#df6951] mb-1">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </div>
                <h4 className="font-sans font-bold text-sm text-[#181e4b]">Consultation Requested</h4>
                <p className="text-xs text-[#5e6282] font-semibold leading-relaxed">
                  Thank you! An advisor has queued your study and relocation inquiry and will respond within 12 business hours.
                </p>
                <button
                  onClick={() => setSubmitStatus(null)}
                  className="mt-2 text-xs text-[#df6951] underline font-bold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 text-left">
                
                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium">
                    An error occurred. Please verify your connection and try again.
                  </div>
                )}

                <div className="flex flex-col gap-1">
                  <label htmlFor="side-name" className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Your Name *</label>
                  <input 
                    type="text" 
                    id="side-name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Elena Vance"
                    className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:border-[#df6951] focus:bg-white focus:outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="side-email" className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Email Address *</label>
                  <input 
                    type="email" 
                    id="side-email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder="e.g. elena@example.com"
                    className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:border-[#df6951] focus:bg-white focus:outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="side-phone" className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Phone Number</label>
                  <input 
                    type="text" 
                    id="side-phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +1 (555) 019-9231"
                    className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:border-[#df6951] focus:bg-white focus:outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="side-message" className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Relocation Notes</label>
                  <textarea 
                    id="side-message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleInputChange}
                    className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:border-[#df6951] focus:bg-white focus:outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full mt-2 py-3 bg-gradient-to-r from-[#df6951] to-[#f1a501] hover:scale-102 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-sans font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md shadow-[#df6951]/10"
                >
                  <Send className="w-3.5 h-3.5" />
                  {submitting ? 'Sending Request...' : 'Book Consultation'}
                </button>
              </form>
            )}

            <div className="mt-4 flex items-center justify-center gap-1 text-[9px] uppercase tracking-wider text-slate-400 font-bold font-mono">
              <Compass className="w-3.5 h-3.5 text-[#df6951]" /> Hallmark advisory standard.
            </div>
          </div>
        </aside>

      </section>

      {/* 3. RELATED BLOG ARTICLES */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="border-t border-gray-100 py-16 bg-[#faf6f0]/40">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="font-serif font-black text-2xl text-[#181e4b] mb-8 text-left">Related Mobility Blueprints</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(post => (
                <article 
                  key={post.id}
                  className="bg-white rounded-[24px] overflow-hidden border border-gray-100/80 shadow-jadoo hover:shadow-jadoo-hover hover:scale-101 transition-all duration-500 flex flex-col justify-between"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={post.featured_image || "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=400&q=80"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 text-[8px] uppercase tracking-widest font-black rounded-full bg-orange-accent text-white font-sans">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between gap-4 text-left">
                    <h4 className="font-serif font-black text-[14.5px] text-[#181e4b] line-clamp-2 leading-snug">
                      {post.title}
                    </h4>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1 text-xs text-orange-accent font-sans font-black uppercase tracking-widest hover:underline"
                    >
                      Open Blueprint <ArrowLeft className="w-3 h-3 rotate-180" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}

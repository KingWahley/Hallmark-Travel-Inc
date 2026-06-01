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

export default function BlogDetailClient({ post, relatedPosts }) {
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Inquiry Form State
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: `Hi, I read your article on "${post.title}" and would love to speak with an advisor about my options.` });
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
        service: 'Study & Relocation Assistance',
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

  // ----------------------------------------------------
  // STRUCTURED SEO SCHEMAS (JSON-LD INJECTION)
  // ----------------------------------------------------
  
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
      "url": "https://hallmarktravel.com"
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Hallmark Travel Inc",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hallmarktravel.com/favicon.ico"
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

  const postDate = post.published_at ? new Date(post.published_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : 'Draft';

  return (
    <div className="relative min-h-screen pb-24">
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

      {/* Decorative Glows */}
      <div className="absolute top-[20%] left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[40%] right-0 w-80 h-80 bg-primary-light/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 1. EDITORIAL HERO ACCENT HEADER */}
      <section className="relative py-12 md:py-20 border-b border-card-border/60 bg-gradient-to-b from-primary/30 to-background/50">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent font-semibold hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Relocation Hub
          </Link>

          <div className="max-w-4xl text-left">
            <span className="inline-block px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] uppercase tracking-widest font-semibold font-display mb-4">
              {post.category}
            </span>
            
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs text-foreground/60 font-light border-t border-card-border/60 pt-6">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-accent" /> {postDate}</span>
              <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-accent" /> Article by {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ARTICLE COMPOSITION BODY */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Editorial column */}
        <article className="lg:col-span-8 flex flex-col gap-10 text-left">
          
          {/* Featured Image */}
          {post.featured_image && (
            <div className="relative h-[250px] sm:h-[400px] w-full rounded-2xl overflow-hidden border border-card-border/60 shadow-xl shadow-black/15">
              <img 
                src={post.featured_image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Richtext body content */}
          <div 
            className="prose prose-invert max-w-none text-foreground/80 font-light leading-relaxed text-sm sm:text-base space-y-6 
              prose-headings:font-display prose-headings:font-bold prose-headings:text-white prose-headings:tracking-wide
              prose-h2:text-2xl prose-h2:border-b prose-h2:border-card-border/40 prose-h2:pb-3 prose-h2:pt-6
              prose-h3:text-lg prose-h3:pt-4
              prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
              prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
              prose-strong:font-semibold prose-strong:text-white
              prose-a:text-accent prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-card-border/50">
              <span className="text-[10px] uppercase tracking-widest text-foreground/50 font-medium mr-2">Tags:</span>
              {post.tags.map(tag => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-primary-light/40 border border-card-border rounded-lg text-xs font-light text-foreground/75"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* FAQ Accordion Section */}
          {hasFaq && (
            <div className="mt-12 pt-8 border-t border-card-border">
              <h3 className="font-display font-bold text-xl text-white mb-6">Frequently Asked Questions</h3>
              <div className="flex flex-col gap-4">
                {post.faq.map((item, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div 
                      key={idx}
                      className="glass rounded-xl border border-card-border overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between p-5 text-left font-display font-medium text-sm text-white hover:text-accent transition-colors"
                      >
                        <span>{item.question}</span>
                        {isOpen ? <ChevronUp className="w-4 h-4 text-accent" /> : <ChevronDown className="w-4 h-4 text-accent" />}
                      </button>
                      
                      <div className={`transition-all duration-500 overflow-hidden ${
                        isOpen ? 'max-h-96 border-t border-card-border/50' : 'max-h-0'
                      }`}>
                        <p className="p-5 text-xs sm:text-sm font-light text-foreground/75 leading-relaxed bg-background/40">
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

        {/* Right Sticky Inquiry Form Sidebar */}
        <aside className="lg:col-span-4 lg:self-start lg:sticky lg:top-28">
          <div className="glass p-6 sm:p-8 rounded-2xl border border-card-border shadow-xl shadow-black/15">
            
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-card-border/60">
              <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center text-accent">
                <Briefcase className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-bold text-xs uppercase tracking-wider text-white">Advisory Panel</span>
                <span className="text-[9px] tracking-widest uppercase text-accent font-semibold">Start Relocation File</span>
              </div>
            </div>

            {submitStatus === 'success' ? (
              <div className="text-center py-6 flex flex-col items-center gap-3 animate-fade-in-up">
                <div className="w-12 h-12 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent mb-1">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="font-display font-semibold text-sm text-white">Relocation File Initiated</h4>
                <p className="text-[11px] text-foreground/70 font-light leading-relaxed">
                  Thank you! An advisor has queued your study and relocation inquiry and will respond within 12 business hours.
                </p>
                <button
                  onClick={() => setSubmitStatus(null)}
                  className="mt-2 text-xs text-accent underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 text-left">
                
                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-950/40 border border-red-500/20 text-red-400 text-[10px] rounded-lg">
                    An error occurred. Verify credentials and try again.
                  </div>
                )}

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="side-name" className="text-[9px] uppercase tracking-wider text-foreground/50 font-medium">Your Name *</label>
                  <input 
                    type="text" 
                    id="side-name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Elena Vance"
                    className="px-3.5 py-2.5 bg-background/80 border border-card-border rounded-lg text-xs text-foreground placeholder-foreground/30 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="side-email" className="text-[9px] uppercase tracking-wider text-foreground/50 font-medium">Email Address *</label>
                  <input 
                    type="email" 
                    id="side-email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder="e.g. elena@example.com"
                    className="px-3.5 py-2.5 bg-background/80 border border-card-border rounded-lg text-xs text-foreground placeholder-foreground/30 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="side-phone" className="text-[9px] uppercase tracking-wider text-foreground/50 font-medium">Phone Number</label>
                  <input 
                    type="text" 
                    id="side-phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +1 (555) 019-9231"
                    className="px-3.5 py-2.5 bg-background/80 border border-card-border rounded-lg text-xs text-foreground placeholder-foreground/30 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="side-message" className="text-[9px] uppercase tracking-wider text-foreground/50 font-medium">Relocation Notes</label>
                  <textarea 
                    id="side-message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleInputChange}
                    className="px-3.5 py-2.5 bg-background/80 border border-card-border rounded-lg text-xs text-foreground focus:border-accent focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full mt-2 py-3 bg-accent hover:bg-accent-hover text-background font-display font-medium text-[10px] uppercase tracking-widest rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3 h-3" />
                  {submitting ? 'Queuing Request...' : 'Initiate Session'}
                </button>
              </form>
            )}

            <div className="mt-4 flex items-center justify-center gap-1 text-[9px] uppercase tracking-wider text-foreground/40 font-mono">
              <Compass className="w-3.5 h-3.5" /> Hallmark advisory standard.
            </div>
          </div>
        </aside>

      </section>

      {/* 3. RELATED IMMIGRATION BLUEPRINTS */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="border-t border-card-border py-16 bg-background/50">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="font-display font-bold text-xl text-white mb-8 text-left">Related Mobility Blueprints</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(post => (
                <article 
                  key={post.id}
                  className="glass group rounded-xl overflow-hidden hover:border-accent/20 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={post.featured_image || "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=400&q=80"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 text-[8px] uppercase tracking-wider font-semibold rounded-full bg-accent/90 text-background font-display">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-5 flex-grow flex flex-col justify-between gap-4 text-left">
                    <h4 className="font-display font-bold text-sm text-white group-hover:text-accent transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h4>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1.5 text-[11px] text-accent font-display font-semibold hover:underline"
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

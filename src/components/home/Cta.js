'use client';

import { useState } from 'react';
import { Mail, Globe, MapPin } from 'lucide-react';
import { submitInquiry } from '@/lib/db';

export default function Cta() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState(null);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubmitting(true);
    setNewsletterStatus(null);
    try {
      await submitInquiry({
        name: 'Newsletter Subscriber',
        email: newsletterEmail,
        phone: '',
        service: 'Newsletter Subscription',
        message: 'Subscribed to newsletter updates from redesigned homepage.'
      });
      setNewsletterStatus('success');
      setNewsletterEmail('');
    } catch (err) {
      console.error(err);
      setNewsletterStatus('error');
    } finally {
      setNewsletterSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-[#faf8f2]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch font-sans">
        
        {/* Left Card (Free Download) */}
        <div className="bg-[#1a7f6e] text-white rounded-[32px] p-8 md:p-10 border border-[#134e4a]/40 shadow-xl flex flex-col justify-between text-left relative overflow-hidden min-h-[440px]">
          {/* Subtle background decorative shapes */}
          <div className="absolute right-[-10%] bottom-[-20%] w-72 h-72 rounded-full bg-white/[0.06] pointer-events-none z-0" />
          <div className="absolute right-[5%] bottom-[5%] w-44 h-44 rounded-full bg-white/[0.03] pointer-events-none z-0" />
          
          <div className="relative z-10">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#cea447]">
              FREE DOWNLOAD
            </span>
            <h3 className="font-serif text-3xl font-bold leading-tight mt-2 mb-4">
              Get our free Study-in-PH checklist
            </h3>
            <p className="text-sm text-white/85 leading-relaxed mb-8 max-w-sm">
              Enter your email and we'll send you a free starter checklist covering schools, visa documents, and arrival essentials.
            </p>
          </div>

          <div className="relative z-10 w-full">
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
              <input 
                type="email"
                id="newsletter-email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-grow bg-white text-[#181e4b] rounded-full px-6 py-3.5 placeholder:text-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm"
              />
              <button 
                type="submit"
                id="newsletter-submit-btn"
                disabled={newsletterSubmitting}
                className="bg-[#cea447] hover:bg-[#dfb559] text-[#1b2e4b] font-bold px-7 py-3.5 rounded-full transition-all duration-300 disabled:opacity-50 text-sm whitespace-nowrap"
              >
                {newsletterSubmitting ? 'Sending...' : 'Send it to me'}
              </button>
            </form>

            {newsletterStatus === 'success' && (
              <p className="text-xs text-[#cea447] mt-3 font-bold">Successfully subscribed!</p>
            )}
            {newsletterStatus === 'error' && (
              <p className="text-xs text-red-200 mt-3 font-bold">Subscription failed. Try again.</p>
            )}
          </div>
        </div>

        {/* Right Card (Talk To Us) */}
        <div className="bg-[#1b2e4b] text-white rounded-[32px] p-8 md:p-10 border border-white/5 shadow-xl flex flex-col justify-between text-left min-h-[440px]">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#cea447]">
              TALK TO US
            </span>
            <h3 className="font-serif text-3xl font-bold leading-tight mt-2 mb-6">
              Get in touch today
            </h3>
            
            <ul className="flex flex-col gap-5 text-[14px] font-medium text-white/90">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/[0.08] flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 0 0 1.333 4.993L2 22l5.13-1.347a9.96 9.96 0 0 0 4.88 1.28c5.508 0 9.99-4.479 9.991-9.986.002-5.507-4.48-9.985-9.989-9.985zm7.154 14.137c-.31.868-1.787 1.62-2.477 1.704-.69.083-1.554.084-2.502-.22a10.99 10.99 0 0 1-5.111-3.237c-.328-.328-.624-.68-.888-1.054a11.164 11.164 0 0 1-1.637-3.155c-.276-.906-.296-1.764-.08-2.482.21-.698.814-1.22 1.135-1.536.321-.316.643-.314.857-.314h.6c.19 0 .428.007.618.455.19.448.653 1.594.71 1.708.058.113.095.245.02.395-.077.15-.156.324-.265.45-.11.127-.23.284-.33.398-.108.125-.224.26-.096.48.128.22.569.939 1.22 1.52.839.75 1.543 1.018 1.763 1.128.22.11.35.093.48-.057.13-.15.565-.66.715-.886.15-.226.3-.188.508-.113.208.075 1.32.622 1.547.735.227.113.378.17.435.264.057.094.057.546-.253 1.414z"/>
                  </svg>
                </div>
                <span>WhatsApp: +63 966 138 9726</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/[0.08] flex items-center justify-center text-white flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span>admission@hallmarkconsultancy.com</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/[0.08] flex items-center justify-center text-white flex-shrink-0">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span>hallmarkconsultancy.com</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/[0.08] flex items-center justify-center text-white flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span>#250 Northbay Blvd., Navotas City, Metro Manila</span>
              </li>
            </ul>
          </div>

          <a 
            href="https://wa.me/639661389726"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto py-3.5 px-6 mt-8 bg-[#25d366] hover:bg-[#20ba59] text-white font-bold text-center rounded-full transition-all duration-300 shadow-md shadow-[#25d366]/10 inline-flex items-center justify-center gap-2 text-sm self-start"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 0 0 1.333 4.993L2 22l5.13-1.347a9.96 9.96 0 0 0 4.88 1.28c5.508 0 9.99-4.479 9.991-9.986.002-5.507-4.48-9.985-9.989-9.985zm7.154 14.137c-.31.868-1.787 1.62-2.477 1.704-.69.083-1.554.084-2.502-.22a10.99 10.99 0 0 1-5.111-3.237c-.328-.328-.624-.68-.888-1.054a11.164 11.164 0 0 1-1.637-3.155c-.276-.906-.296-1.764-.08-2.482.21-.698.814-1.22 1.135-1.536.321-.316.643-.314.857-.314h.6c.19 0 .428.007.618.455.19.448.653 1.594.71 1.708.058.113.095.245.02.395-.077.15-.156.324-.265.45-.11.127-.23.284-.33.398-.108.125-.224.26-.096.48.128.22.569.939 1.22 1.52.839.75 1.543 1.018 1.763 1.128.22.11.35.093.48-.057.13-.15.565-.66.715-.886.15-.226.3-.188.508-.113.208.075 1.32.622 1.547.735.227.113.378.17.435.264.057.094.057.546-.253 1.414z"/>
            </svg>
            <span>Chat with us now</span>
          </a>
        </div>

      </div>
    </section>
  );
}

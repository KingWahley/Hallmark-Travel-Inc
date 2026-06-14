'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqItems = [
    {
      question: "Do I need a visa to study in the Philippines?",
      answer: "Yes. If your country requires a visa to enter the Philippines, or if you’re pursuing a degree, you’ll need a 9(F) Student Visa. You cannot enter the Philippines as a tourist to study; you must secure your student visa from the Philippine Embassy or Consulate in your home country specifically for the purpose of studying. You can reach us on WhatsApp (+63 906 378 5826) for further assistance on school admission and visa applications."
    },
    {
      question: "How long does the student visa (9F) process take?",
      answer: "Processing usually takes around 3 weeks, though it can take 3–6 weeks at some embassies — for example in Nigeria, Pakistan, or Iran. Because timelines vary, we always recommend starting your application 3–4 months before your intended start date."
    },
    {
      question: "Which documents need to be authenticated or apostilled?",
      answer: "Typically your academic records (transcripts and diplomas), birth certificate, and police clearance must be authenticated or apostilled by the relevant authority in your home country (usually the Department of Foreign Affairs or equivalent). Any document not originally in English must also be officially translated. Your Notice of Acceptance from the university is apostilled by the Philippine DFA before it’s couriered to you."
    },
    {
      question: "Are university classes taught in English?",
      answer: "Yes — 100% of university courses in the Philippines are taught in English. We assist with admissions into all courses and programs of choice, and we also provide assistance in choosing a school that suits you if you do not have any preference. The Philippines is the third-largest English-speaking nation in the world, so there’s no language barrier for international students."
    },
    {
      question: "Can international students work while studying?",
      answer: "A student visa does not automatically grant work rights in the Philippines. Limited work is only possible with the proper permits, and the most common legal option for students is online freelancing for overseas clients. Be cautious of “easy job” offers — some are scams that can put your visa at risk. Our DIY Starter Kit explains the full legal framework in detail."
    },
    {
      question: "How much does it cost to study in the Philippines?",
      answer: "Tuition ranges from roughly $800 to $8,000 per year depending on your course, with monthly living costs of about $350–800 depending on your city. Compared to $15,000–40,000 per year in many Western countries, it’s an affordable, English-medium option. Message us for a personalised estimate for your course and city."
    },
    {
      question: "Do you also handle travel and tours?",
      answer: "Yes. Alongside our education services, Hallmark Travel Inc. provides holiday packages, group and corporate travel, visa-assisted trips, and complete flight and hotel arrangements. Just let us know what you need."
    },
    {
      question: "Why should I choose Hallmark Travel Inc.?",
      answer: "We’re a registered Philippine company with more than 10 years of experience helping international students study in the Philippines. We’ve guided students through every step of the journey — from choosing a school to settling in after arrival — and we’re always reachable on WhatsApp for quick, honest help."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-[#faf8f2]">
      <div className="max-w-3xl mx-auto text-center">
        
        <div className="mb-16">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#0f766e]">
            FAQ
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-black text-[#181e4b] mt-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-secondary font-semibold mt-2">
            Find answers to common questions about studying and traveling.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-left">
          {faqItems.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-gray-150 overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  id={`faq-toggle-${idx}`}
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left font-bold text-[#181e4b] hover:text-[#0f766e] transition-colors"
                >
                  <span>{item.question}</span>
                  <span className="text-gray-400 ml-4 flex-shrink-0">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-secondary leading-relaxed font-semibold border-t border-gray-50 pt-4 animate-fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

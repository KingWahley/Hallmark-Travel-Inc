'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqItems = [
    {
      question: "What are the requirements for study in the Philippines?",
      answer: "Key requirements include high school transcripts/diplomas legalized via Apostille, national police clearance, medical certificates (including chest X-rays), and proof of financial support. Our placements team assists with complete document checklists for CHED approvals."
    },
    {
      question: "How long does the student visa process take?",
      answer: "Once admitted by an accredited university, the Bureau of Immigration (BI) processing for a 9F Student Visa generally takes 2 to 4 weeks. Hallmark handles CHED endorsements and local visa filings to ensure compliance."
    },
    {
      question: "Can I convert tourist visa to student visa?",
      answer: "Yes, you can enter the Philippines as a tourist and convert your visa to a 9F Student Visa locally through the Bureau of Immigration. Our Taguig desk handles the complete local conversion process."
    },
    {
      question: "Do you offer airport pickup and accommodation?",
      answer: "Yes! We coordinate post-arrival assistance including airport transfers, housing matching (dorms, shared apartments, or solo condos), and university campus onboarding."
    },
    {
      question: "What travel packages do you currently offer?",
      answer: "We offer custom domestic travel packages to top tropical islands (Palawan, Boracay, Cebu, Bohol) as well as global multi-city tours, covering flights, premium hotels, and transfers."
    },
    {
      question: "How do I resolve overstay/blacklist issues?",
      answer: "If you have faced immigration penalties, our Taguig desk handles Blacklist Order (BLO) lifting, tourist visa extensions, and ACR I-Card renewals directly with the main Bureau of Immigration office."
    },
    {
      question: "Do you assist with university admission?",
      answer: "Absolutely. We secure Notice of Acceptance (NOA) letters for premier courses: Nursing, Medicine (MBBS), Pharmacy, Dentistry, Computer Science, MBA, and Hospitality Management."
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
            Frequently asked questions
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

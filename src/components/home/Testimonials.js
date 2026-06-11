'use client';

import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-[#faf8f2]">
      <div className="max-w-7xl mx-auto text-center">
        
        <div className="mb-16">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#1a7f6e]">
            WHAT CLIENTS SAY
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#181e4b] mt-3 leading-tight">
            Trusted by students & families worldwide
          </h2>
          <p className="text-[15px] sm:text-base text-gray-500 font-medium mt-4 max-w-2xl mx-auto leading-relaxed">
            Real words from people we've guided to study and travel with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Testimonial 1 */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-xl shadow-black/[0.01] flex flex-col justify-between text-left hover:border-[#1a7f6e]/20 hover:shadow-2xl hover:shadow-black/[0.02] transition-all duration-300">
            <div>
              <span className="text-5xl font-serif text-[#1a7f6e]/20 leading-none block select-none mb-2">“</span>
              <div className="flex gap-1 mb-4 text-[#cea447]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#cea447] stroke-none" />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 font-medium">
                They were amazing throughout my journey for my student visa. The guidance and advice eventually paved the way for my visa grant — so knowledgeable, efficient, and they truly care about their clients.
              </p>
            </div>
            <div className="flex items-center gap-3 border-t border-gray-50 pt-4">
              <div className="w-10 h-10 rounded-full bg-[#1a7f6e] text-white flex items-center justify-center font-bold text-sm select-none">
                EC
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#181e4b] leading-snug">Edeh Celestine (Nigeria)</h4>
                <span className="text-xs text-gray-400 font-semibold">Student visa client</span>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-xl shadow-black/[0.01] flex flex-col justify-between text-left hover:border-[#1a7f6e]/20 hover:shadow-2xl hover:shadow-black/[0.02] transition-all duration-300">
            <div>
              <span className="text-5xl font-serif text-[#1a7f6e]/20 leading-none block select-none mb-2">“</span>
              <div className="flex gap-1 mb-4 text-[#cea447]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#cea447] stroke-none" />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 font-medium">
                I've worked with other agencies before, but they are so attentive to concerns. I'm very demanding, yet they never made me feel that way. I am so happy I chose them. Best agency ever!
              </p>
            </div>
            <div className="flex items-center gap-3 border-t border-gray-50 pt-4">
              <div className="w-10 h-10 rounded-full bg-[#1a7f6e] text-white flex items-center justify-center font-bold text-sm select-none">
                NR
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#181e4b] leading-snug">Niazi Rehman (Pakistan)</h4>
                <span className="text-xs text-gray-400 font-semibold">Education client</span>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-xl shadow-black/[0.01] flex flex-col justify-between text-left hover:border-[#1a7f6e]/20 hover:shadow-2xl hover:shadow-black/[0.02] transition-all duration-300">
            <div>
              <span className="text-5xl font-serif text-[#1a7f6e]/20 leading-none block select-none mb-2">“</span>
              <div className="flex gap-1 mb-4 text-[#cea447]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#cea447] stroke-none" />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 font-medium">
                From choosing my university to landing in Manila, Hallmark guided every step. The process felt clear and stress-free, and someone was always a WhatsApp message away.
              </p>
            </div>
            <div className="flex items-center gap-3 border-t border-gray-50 pt-4">
              <div className="w-10 h-10 rounded-full bg-[#1a7f6e] text-white flex items-center justify-center font-bold text-sm select-none">
                PS
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#181e4b] leading-snug">Priya Singh (India)</h4>
                <span className="text-xs text-gray-400 font-semibold">School placement</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

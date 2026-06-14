'use client';

import Link from 'next/link';
import { GraduationCap, Plane, Check } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[#faf8f2]">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-16">
          <span className="text-sm font-bold uppercase  text-[#1a7f6e]">
            What we do
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#181e4b] mt-3">
            Two services, one trusted team
          </h2>

          <p className="text-md text-secondary font-semibold mt-5">
            Whether you're building a future through education or exploring the
            world, we guide you end to end.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Study Abroad Card */}
          <div className="bg-white rounded-[32px] p-8 md:p-10 border border-gray-150 shadow-xl shadow-black/[0.02] flex flex-col justify-between items-start text-left relative overflow-hidden group hover:border-[#1a7f6e]/30 hover:-translate-y-1 transition-all duration-300">
            <div className="w-full">
              <div className="w-14 h-14 rounded-2xl bg-[#1a7f6e] text-white flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#181e4b] mb-2">
                Study in the Philippines
              </h3>
              <p className="text-sm text-secondary font-medium leading-relaxed mb-6">
                We help international students enrol in accredited Philippine
                universities — and handle the paperwork that trips most people
                up.
              </p>

              {/* Features Checklist */}
              <ul className="flex flex-col gap-3 mb-8">
                <li className="flex items-center gap-3 text-sm font-semibold text-secondary">
                  <span className="w-5 h-5 rounded-full bg-[#e6f4f1] text-[#1a7f6e] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  School & course selection (Medicine, Nursing, Engineering,
                  Business, IT)
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-secondary">
                  <span className="w-5 h-5 rounded-full bg-[#e6f4f1] text-[#1a7f6e] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  9(F) student visa processing & document support
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-secondary">
                  <span className="w-5 h-5 rounded-full bg-[#e6f4f1] text-[#1a7f6e] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  Bureau of Immigration coordination
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-secondary">
                  <span className="w-5 h-5 rounded-full bg-[#e6f4f1] text-[#1a7f6e] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  Arrival assistance & settling-in support
                </li>
              </ul>
            </div>

            <Link
              href="/contact"
              id="services-apply-btn"
              className="w-full py-3 bg-[#1a7f6e] hover:bg-[#156759] text-white font-bold text-center rounded-full transition-all duration-300 shadow-md shadow-[#1a7f6e]/10"
            >
              Apply placements
            </Link>
          </div>

          {/* Travel & Visa Card */}
          <div className="bg-white rounded-[32px] p-8 md:p-10 border border-gray-150 shadow-xl shadow-black/[0.02] flex flex-col justify-between items-start text-left relative overflow-hidden group hover:border-[#cea447]/30 hover:-translate-y-1 transition-all duration-300">
            <div className="w-full">
              <div className="w-14 h-14 rounded-2xl bg-[#cea447] text-white flex items-center justify-center mb-6">
                <Plane className="w-7 h-7" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#181e4b] mb-2 flex items-center gap-1.5 flex-wrap">
                Travel & Tour Packages
              </h3>
              <p className="text-sm text-secondary font-medium leading-relaxed mb-6">
                Personalised, seamless, and memorable travel for individuals,
                families, groups, and corporate clients.
              </p>

              {/* Features Checklist */}
              <ul className="flex flex-col gap-3 mb-8">
                <li className="flex items-center gap-3 text-sm font-semibold text-secondary">
                  <span className="w-5 h-5 rounded-full bg-[#fef6e5] text-[#cea447] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  Holiday packages & customised tours
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-secondary">
                  <span className="w-5 h-5 rounded-full bg-[#fef6e5] text-[#cea447] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  Corporate & group travel management
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-secondary">
                  <span className="w-5 h-5 rounded-full bg-[#fef6e5] text-[#cea447] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  Visa-assisted international trips
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-secondary">
                  <span className="w-5 h-5 rounded-full bg-[#fef6e5] text-[#cea447] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  Flights, hotels, and complete itineraries
                </li>
               
              </ul>
            </div>

            <Link
              href="/contact"
              id="services-tours-btn"
              className="w-full py-3 bg-[#cea447] hover:bg-[#b7903c] text-white font-bold text-center rounded-full transition-all duration-300 shadow-md shadow-[#cea447]/10"
            >
              Book tours
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

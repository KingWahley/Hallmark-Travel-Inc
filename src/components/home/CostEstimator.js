'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CostEstimator() {
  const [calcCourse, setCalcCourse] = useState('MD');
  const [calcCity, setCalcCity] = useState('manila');
  const [calcLifestyle, setCalcLifestyle] = useState('moderate');

  const courseData = {
    MD: { name: 'Medicine (MD) — $5,000-8,000/yr', tuition: 6500, visa: 350 },
    BSN: { name: 'Nursing (BSN) — $3,000-5,000/yr', tuition: 4000, visa: 350 },
    DMD: { name: 'Dentistry (DMD) — $4,000-6,000/yr', tuition: 5000, visa: 350 },
    Pharmacy: { name: 'Pharmacy (BS) — $3,000-4,500/yr', tuition: 3750, visa: 350 },
    CS: { name: 'Computer Science (BS) — $2,500-4,000/yr', tuition: 3250, visa: 350 }
  };

  const cityData = {
    manila: { name: 'Manila / Makati', modifier: 1.0 },
    cebu: { name: 'Cebu / Davao', modifier: 0.8 },
    baguio: { name: 'Baguio / Iloilo', modifier: 0.6 }
  };

  const lifestyleData = {
    moderate: { name: 'Moderate — comfortable', cost: 7440 },
    budget: { name: 'Budget — shared', cost: 4800 },
    premium: { name: 'Premium — high-end', cost: 12000 }
  };

  const getCalculatedCosts = () => {
    const course = courseData[calcCourse] || courseData.MD;
    const city = cityData[calcCity] || cityData.manila;
    const lifestyle = lifestyleData[calcLifestyle] || lifestyleData.moderate;

    const tuition = course.tuition;
    const visa = course.visa;
    const living = Math.round(lifestyle.cost * city.modifier);
    const total = tuition + living + visa;

    return {
      tuition,
      living,
      visa,
      total
    };
  };

  const calculated = getCalculatedCosts();

  return (
    <section id="estimator" className="relative bg-[#1b2e4b] text-white py-24 px-6 md:px-12 overflow-hidden border-b border-white/5">
      {/* Decorative ambient background shape */}
      <div className="absolute left-[-200px] top-[-100px] w-[500px] h-[500px] rounded-full bg-[#2c4266]/30 blur-[120px] pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#cea447]">
          PLAN YOUR BUDGET
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-3 leading-tight">
          Cost of studying in the<br />Philippines
        </h2>
        <p className="text-sm sm:text-base text-gray-300 font-medium mt-4 max-w-2xl mx-auto leading-relaxed">
          Get an instant estimate of your annual costs. Choose your course, city, and lifestyle below.
        </p>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-[#1c2a3f]/40 border border-white/10 rounded-[32px] p-6 md:p-10 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Form Inputs Side */}
            <div className="lg:col-span-7 flex flex-col justify-center gap-6 text-left">
              
              {/* Course Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="calc-course" className="text-xs font-semibold text-gray-300">
                  Your course
                </label>
                <div className="relative">
                  <select 
                    id="calc-course" 
                    value={calcCourse} 
                    onChange={(e) => setCalcCourse(e.target.value)}
                    className="w-full bg-[#283a56] border border-white/10 text-white rounded-xl px-4 py-3.5 font-semibold text-sm focus:outline-none focus:border-[#cea447] transition-colors cursor-pointer appearance-none"
                  >
                    {Object.entries(courseData).map(([key, item]) => (
                      <option key={key} value={key} className="bg-[#1b2e4b]">
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* City Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="calc-city" className="text-xs font-semibold text-gray-300">
                  Your city
                </label>
                <div className="relative">
                  <select 
                    id="calc-city" 
                    value={calcCity} 
                    onChange={(e) => setCalcCity(e.target.value)}
                    className="w-full bg-[#283a56] border border-white/10 text-white rounded-xl px-4 py-3.5 font-semibold text-sm focus:outline-none focus:border-[#cea447] transition-colors cursor-pointer appearance-none"
                  >
                    {Object.entries(cityData).map(([key, item]) => (
                      <option key={key} value={key} className="bg-[#1b2e4b]">
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Lifestyle Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="calc-lifestyle" className="text-xs font-semibold text-gray-300">
                  Your lifestyle
                </label>
                <div className="relative">
                  <select 
                    id="calc-lifestyle" 
                    value={calcLifestyle} 
                    onChange={(e) => setCalcLifestyle(e.target.value)}
                    className="w-full bg-[#283a56] border border-white/10 text-white rounded-xl px-4 py-3.5 font-semibold text-sm focus:outline-none focus:border-[#cea447] transition-colors cursor-pointer appearance-none"
                  >
                    {Object.entries(lifestyleData).map(([key, item]) => (
                      <option key={key} value={key} className="bg-[#1b2e4b]">
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>

            {/* Output Side Card */}
            <div className="lg:col-span-5 bg-[#1a7f6e] rounded-[24px] p-8 border border-white/5 shadow-xl flex flex-col justify-between text-left">
              <div>
                <span className="text-[11px] uppercase tracking-widest font-bold text-white/80 block text-center lg:text-left">
                  ESTIMATED FIRST-YEAR COST
                </span>
                <div className="text-5xl font-bold font-serif text-white mt-3 mb-1 text-center lg:text-left">
                  ${calculated.total.toLocaleString()}
                </div>
                <div className="text-xs text-white/70 text-center lg:text-left mb-6 font-medium">
                  tuition + living + visa & setup
                </div>

                <div className="w-full h-[1px] bg-white/20 mb-6" />

                <div className="flex flex-col gap-4 text-sm font-semibold">
                  <div className="flex items-center justify-between text-white/85">
                    <span className="italic font-normal">Tuition</span>
                    <span className="text-white">${calculated.tuition.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-white/85">
                    <span className="italic font-normal">Living (12 mo)</span>
                    <span className="text-white">${calculated.living.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-white/85">
                    <span className="italic font-normal">Visa & setup</span>
                    <span className="text-white">${calculated.visa.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <Link 
                href="/contact" 
                id="calc-estimate-cta"
                className="w-full py-4 mt-8 bg-[#cea447] hover:bg-[#b7903c] text-[#181e4b] font-bold text-center rounded-2xl transition-all duration-300 shadow-md shadow-[#cea447]/10 block"
              >
                Get a personalized estimate
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="text-center mt-8 text-xs text-gray-400 max-w-4xl mx-auto leading-relaxed relative z-10">
          Estimates only, in USD, for general planning. Actual costs vary by school and circumstances — contact us for exact figures.
        </div>
      </div>
    </section>
  );
}

'use client';

export default function Process() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        
        <div className="mb-16">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#1a7f6e]">
            SIMPLE & CLEAR
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#181e4b] mt-3">
            How it works
          </h2>
          <p className="text-[15px] sm:text-base text-gray-500 font-medium mt-4 max-w-2xl mx-auto leading-relaxed">
            Four straightforward steps from your first question to your first day of study.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto mt-20">
          {/* Horizontal dashed line connector for desktop */}
          <div className="absolute top-8 left-[10%] right-[10%] h-0 border-t border-dashed border-[#bce3de] hidden md:block z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-14 relative z-10">
            
            {/* Step 1 */}
            <div className="flex flex-col items-start gap-4 text-left">
              <div className="w-16 h-16 rounded-full bg-[#181e4b] text-[#cea447] flex items-center justify-center text-2xl font-serif font-bold shadow-md shadow-black/10 select-none z-10">
                1
              </div>
              <h4 className="font-serif text-xl font-bold text-[#181e4b] mt-1">
                Get the guide
              </h4>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                Download our DIY Starter Kit, or reach out for full placement support — whichever suits you.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-start gap-4 text-left">
              <div className="w-16 h-16 rounded-full bg-[#181e4b] text-[#cea447] flex items-center justify-center text-2xl font-serif font-bold shadow-md shadow-black/10 select-none z-10">
                2
              </div>
              <h4 className="font-serif text-xl font-bold text-[#181e4b] mt-1">
                Talk to us
              </h4>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                Message us on WhatsApp for your consultation. We answer your specific questions, fast.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-start gap-4 text-left">
              <div className="w-16 h-16 rounded-full bg-[#181e4b] text-[#cea447] flex items-center justify-center text-2xl font-serif font-bold shadow-md shadow-black/10 select-none z-10">
                3
              </div>
              <h4 className="font-serif text-xl font-bold text-[#181e4b] mt-1">
                Apply with guidance
              </h4>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                We guide you through school selection, documents, and the 9(F) student visa — step by step.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-start gap-4 text-left">
              <div className="w-16 h-16 rounded-full bg-[#181e4b] text-[#cea447] flex items-center justify-center text-2xl font-serif font-bold shadow-md shadow-black/10 select-none z-10">
                4
              </div>
              <h4 className="font-serif text-xl font-bold text-[#181e4b] mt-1">
                Arrive & study
              </h4>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                Land in the Philippines with confidence. We help you settle in and start your journey.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

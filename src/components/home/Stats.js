'use client';

export default function Stats() {
  return (
    <section className="bg-[#e6f4f1] border-b border-[#0f766e]/10 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-black text-[#0f766e]">
            10+
          </span>
          <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-secondary">
            Years Experience
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-2xl font-black text-[#0f766e]">
            1,500+
          </span>
          <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-secondary">
            Students & travellers served
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-2xl font-black text-[#0f766e]">
            Registered
          </span>
          <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-secondary">
            Philippine company
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-2xl font-black text-[#0f766e]">
            Fast
          </span>
          <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-secondary">
            Whatsapp support
          </span>
        </div>
      </div>
    </section>
  );
}

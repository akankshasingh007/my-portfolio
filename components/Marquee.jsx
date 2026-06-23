"use client";

export default function Marquee() {
  return (
    <section className="overflow-hidden bg-black py-8">
      <div className="whitespace-nowrap text-[120px] font-black opacity-10 animate-marquee">
        AI • RESEARCH • SCHOLARSHIPS • TECHNOLOGY • OPPORTUNITIES •
      </div>
    </section>
  );
}
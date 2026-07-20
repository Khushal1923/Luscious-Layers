import React from 'react';
import AboutSection from '../components/home/AboutSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';

export default function AboutPage() {
  return (
    <main className="pt-24 min-h-screen">
      {/* Subpage Banner */}
      <div className="bg-[#FFF7ED] py-16 border-b border-[#F3E8D4] text-center">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C] font-btn">About Us</span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#111827] mt-2">A Place to Relax & Enjoy</h1>
        </div>
      </div>

      <AboutSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
    </main>
  );
}

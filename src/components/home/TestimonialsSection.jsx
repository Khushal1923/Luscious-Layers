import React from 'react';
import { Star, Quote } from 'lucide-react';
import { INITIAL_TESTIMONIALS } from '../../data/initialData';

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#FFFDF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#EA580C] text-xs font-semibold uppercase tracking-widest block mb-2 font-btn">
            Real Reviews
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#111827]">
            What Nashik Foodies Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4 text-xs font-bold text-[#6B7280]">
            <span className="text-[#F59E0B] text-base font-heading">4.9 ★★★★★</span>
            <span>Based on 1,200+ Google & Swiggy Reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INITIAL_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-[#F3E8D4] luxury-shadow-hover relative flex flex-col justify-between"
            >
              <div>
                <Quote className="w-10 h-10 text-[#FDBA74]/40 mb-4" />
                <p className="text-[#6B7280] text-sm leading-relaxed italic font-body mb-6">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#F3E8D4] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#F59E0B]"
                  />
                  <div>
                    <h4 className="font-heading text-base font-bold text-[#111827]">{item.name}</h4>
                    <span className="text-[11px] text-[#6B7280]">{item.role}</span>
                  </div>
                </div>

                <div className="flex items-center gap-0.5 text-[#F59E0B]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

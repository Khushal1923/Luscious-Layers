import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Heart, Coffee, ShieldCheck } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { number: '5+', label: 'Years of Experience' },
    { number: '20+', label: 'Delicious Items' },
    { number: '10K+', label: 'Happy Customers' }
  ];

  return (
    <section className="py-24 bg-[#FFFDF8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10">
              {/* Main Cafe Exterior/Interior Photo */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=80"
                  alt="Luscious Layers Cafe Interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Overlapping Secondary Dish Images */}
              <div className="grid grid-cols-2 gap-4 -mt-16 max-w-md ml-auto relative z-20 pr-4">
                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&auto=format&fit=crop&q=80"
                    alt="Artisanal Cappuccino"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&auto=format&fit=crop&q=80"
                    alt="Death By Chocolate Cake"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Quality Seal Badge */}
              <div className="absolute -top-6 -left-6 bg-gradient-to-br from-[#111827] to-[#231614] text-white p-5 rounded-full shadow-2xl z-30 flex flex-col items-center justify-center text-center w-28 h-28 border-2 border-[#F59E0B]">
                <Award className="w-6 h-6 text-[#F59E0B] mb-1" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#FDBA74]">100% Quality</span>
                <span className="text-[10px] font-semibold text-white">Food & Coffee</span>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Counters */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[#EA580C] text-xs font-semibold uppercase tracking-widest block mb-2 font-btn">
                Our Story
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#111827] leading-tight">
                More Than Just A Café. <br />
                <span className="italic font-serif font-normal text-[#F59E0B]">A Place to Relax & Enjoy</span>
              </h2>
            </div>

            <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed font-body">
              Luscious Layers is a cozy café where every layer of flavor tells a story. From freshly roasted Arabica beans to artisanal stone-baked pizzas and heavenly hand-crafted desserts, we serve happiness on College Road.
            </p>

            <p className="text-[#6B7280] text-sm leading-relaxed font-body">
              Designed with warm sunlight, lush indoor greenery, and ambient acoustic vibes, our space is created for intimate dates, catching up with friends, or enjoying peaceful reading corners.
            </p>

            {/* Experience Counters Grid */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-[#F3E8D4]">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <div className="font-heading text-3xl sm:text-4xl font-bold text-[#EA580C]">
                    {stat.number}
                  </div>
                  <div className="text-xs text-[#6B7280] font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="btn-gradient px-8 py-3.5 rounded-full text-xs font-btn font-semibold inline-flex items-center gap-2"
              >
                <span>Discover More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

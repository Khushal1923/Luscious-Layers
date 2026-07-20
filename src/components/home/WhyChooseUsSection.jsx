import React from 'react';
import { Leaf, Award, Clock, Coffee, Music, Wifi } from 'lucide-react';
import { WHY_CHOOSE_US } from '../../data/initialData';

export default function WhyChooseUsSection() {
  const iconMap = {
    Leaf: Leaf,
    Award: Award,
    Clock: Clock,
    Coffee: Coffee,
    Music: Music,
    Wifi: Wifi
  };

  return (
    <section className="py-24 bg-[#FFFDF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#EA580C] text-xs font-semibold uppercase tracking-widest block mb-2 font-btn">
            The Luscious Advantage
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#111827]">
            Why Choose Us
          </h2>
          <p className="text-[#6B7280] text-sm mt-3 font-body">
            We take pride in delivering an unparalleled dining and café experience through meticulous quality standards.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item) => {
            const IconComponent = iconMap[item.icon] || Coffee;
            return (
              <div 
                key={item.id}
                className="bg-white rounded-3xl p-8 border border-[#F3E8D4] luxury-shadow-hover relative group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF7ED] text-[#F59E0B] group-hover:bg-[#F59E0B] group-hover:text-white transition-all duration-300 flex items-center justify-center mb-6 shadow-sm">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#111827] mb-3 group-hover:text-[#EA580C] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed font-body">
                    {item.description}
                  </p>
                </div>

                <div className="w-12 h-1 bg-[#F3E8D4] group-hover:bg-[#EA580C] group-hover:w-full transition-all duration-500 rounded-full mt-6" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

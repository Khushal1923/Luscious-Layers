import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import MenuCard from '../menu/MenuCard';

export default function PopularPicksSection() {
  const { menu } = useApp();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Coffee', 'Breakfast', 'Pizza', 'Burger', 'Pasta', 'Desserts', 'Beverages'];

  const filteredMenu = activeCategory === 'All' 
    ? menu.filter(item => item.popular).slice(0, 8)
    : menu.filter(item => item.category === activeCategory).slice(0, 8);

  return (
    <section className="py-24 bg-[#FFF7ED] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#EA580C] text-xs font-semibold uppercase tracking-widest block mb-2 font-btn">
            Our Special Menu
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#111827]">
            Popular Picks
          </h2>
          <div className="w-16 h-1 bg-[#F59E0B] mx-auto rounded-full mt-4" />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-btn font-semibold text-xs transition-all whitespace-nowrap ${
                  isActive 
                    ? 'btn-gradient text-white' 
                    : 'bg-white text-[#6B7280] border border-[#F3E8D4] hover:text-[#111827] hover:border-[#F59E0B]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredMenu.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/menu"
            className="btn-gradient px-9 py-4 rounded-full text-xs font-btn font-semibold inline-flex items-center gap-3 shadow-lg"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

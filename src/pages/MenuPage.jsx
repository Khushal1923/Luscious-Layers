import React, { useState } from 'react';
import { Search, Filter, Coffee } from 'lucide-react';
import { useApp } from '../context/AppContext';
import MenuCard from '../components/menu/MenuCard';
import QuickViewModal from '../components/menu/QuickViewModal';

export default function MenuPage() {
  const { menu } = useApp();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Coffee', 'Breakfast', 'Pizza', 'Burger', 'Pasta', 'Desserts', 'Beverages'];

  const filteredMenu = menu.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="pt-24 min-h-screen bg-[#FFFDF8] pb-24">
      {/* Subpage Header Banner */}
      <div className="bg-[#FFF7ED] py-16 border-b border-[#F3E8D4] text-center">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C] font-btn">Handcrafted Specialties</span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#111827] mt-2">Artisanal Menu</h1>
          <p className="text-[#6B7280] text-sm max-w-lg mx-auto mt-3">
            Explore 100% pure vegetarian gourmet pizzas, stone-baked savories, artisanal coffees, and desserts.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Search & Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
          
          {/* Category Selector Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-btn font-semibold text-xs transition-all whitespace-nowrap ${
                  activeCategory === cat 
                    ? 'btn-gradient text-white shadow-md' 
                    : 'bg-white text-[#6B7280] border border-[#F3E8D4] hover:text-[#111827]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#6B7280] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search coffee, pizza, cake..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white border border-[#F3E8D4] text-xs text-[#111827] focus:outline-none focus:border-[#EA580C] shadow-sm"
            />
          </div>

        </div>

        {/* Menu Items Grid */}
        {filteredMenu.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredMenu.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#F3E8D4] max-w-md mx-auto">
            <Coffee className="w-12 h-12 text-[#EA580C] mx-auto mb-3" />
            <h3 className="font-heading text-xl font-bold text-[#111827]">No Dishes Found</h3>
            <p className="text-xs text-[#6B7280] mt-1">Try searching for a different item or category.</p>
          </div>
        )}

      </div>

      <QuickViewModal />
    </main>
  );
}

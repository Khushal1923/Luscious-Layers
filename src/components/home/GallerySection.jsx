import React, { useState } from 'react';
import { ZoomIn, Instagram } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function GallerySection() {
  const { gallery, setLightboxImage, settings } = useApp();
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Cafe Vibe', 'Coffee', 'Food', 'Desserts'];

  const filteredItems = activeFilter === 'All' 
    ? gallery 
    : gallery.filter(item => item.category === activeFilter);

  return (
    <section className="py-24 bg-[#FFFDF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#EA580C] text-xs font-semibold uppercase tracking-widest block mb-2 font-btn">
            Insta Moments
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#111827]">
            Photo Gallery
          </h2>
          <p className="text-[#6B7280] text-sm mt-3 font-body">
            Tag <a href={settings.instagram} target="_blank" rel="noreferrer" className="text-[#EA580C] font-semibold underline">@lusciouslayersnsk</a> to get featured on our wall.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full font-btn font-semibold text-xs transition-all ${
                activeFilter === cat 
                  ? 'btn-gradient text-white' 
                  : 'bg-white text-[#6B7280] border border-[#F3E8D4] hover:text-[#111827]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pinterest-style Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              className="break-inside-avoid relative rounded-3xl overflow-hidden group cursor-pointer border border-[#F3E8D4] shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-[#111827]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                <div className="flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#FDBA74] font-btn">
                    {item.category}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { Star, Heart, Eye } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function MenuCard({ item }) {
  const { favorites, toggleFavorite, setQuickViewItem } = useApp();
  const isFavorite = favorites.includes(item.id);

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-[#F3E8D4] shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col justify-between">
      
      {/* Card Header & Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#FFF7ED]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          {item.popular ? (
            <span className="pointer-events-auto bg-[#EA580C] text-white text-[10px] font-btn font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-md">
              Bestseller
            </span>
          ) : (
            <span className="pointer-events-auto bg-[#111827]/80 backdrop-blur-md text-white text-[10px] font-btn font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full">
              {item.category}
            </span>
          )}

          {/* Favorite Button */}
          <button
            onClick={() => toggleFavorite(item.id)}
            className="pointer-events-auto w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#111827] hover:text-[#EA580C] transition-colors shadow-md"
            aria-label="Toggle Favorite"
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-[#EA580C] text-[#EA580C]' : ''}`} />
          </button>
        </div>

        {/* Quick View Hover Button */}
        <div className="absolute inset-0 bg-[#111827]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={() => setQuickViewItem(item)}
            className="btn-gradient px-4 py-2 rounded-full text-xs font-btn font-semibold flex items-center gap-1.5 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-semibold text-[#EA580C] uppercase tracking-wider font-btn">
              {item.dietary || 'Specialty'}
            </span>
            <div className="flex items-center gap-1 text-xs font-bold text-[#111827]">
              <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
              <span>{item.rating}</span>
            </div>
          </div>

          <h3 className="font-heading text-lg font-bold text-[#111827] group-hover:text-[#F59E0B] transition-colors line-clamp-1 mb-2">
            {item.name}
          </h3>

          <p className="text-[#6B7280] text-xs line-clamp-2 leading-relaxed font-body mb-4">
            {item.description}
          </p>
        </div>

        {/* Footer Price Tag */}
        <div className="pt-3 border-t border-[#F3E8D4] flex items-center justify-between">
          <span className="font-heading text-xl font-bold text-[#111827]">
            ₹{item.price}
          </span>

          <button
            onClick={() => setQuickViewItem(item)}
            className="text-xs font-btn font-semibold text-[#EA580C] hover:text-[#111827] flex items-center gap-1 transition-colors"
          >
            <span>Details</span>
            <span>→</span>
          </button>
        </div>

      </div>

    </div>
  );
}

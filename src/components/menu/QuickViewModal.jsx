import React from 'react';
import { X, Star, Heart, MessageCircle, Coffee } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function QuickViewModal() {
  const { quickViewItem, setQuickViewItem, favorites, toggleFavorite, settings } = useApp();

  if (!quickViewItem) return null;
  const isFavorite = favorites.includes(quickViewItem.id);

  const handleOrderWhatsApp = () => {
    const text = `Hi Luscious Layers! I would like to order *${quickViewItem.name}* (₹${quickViewItem.price}). Please confirm availability.`;
    const url = `https://api.whatsapp.com/send?phone=917722082092&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={() => setQuickViewItem(null)}
        className="fixed inset-0 bg-[#111827]/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative bg-[#FFFDF8] rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full z-10 border border-[#F3E8D4] animate-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button
          onClick={() => setQuickViewItem(null)}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#111827] hover:bg-[#FFF7ED] transition-colors shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto bg-[#FFF7ED]">
            <img
              src={quickViewItem.image}
              alt={quickViewItem.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#EA580C] font-btn">
                  {quickViewItem.category}
                </span>
                <div className="flex items-center gap-1 text-sm font-bold text-[#111827]">
                  <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  <span>{quickViewItem.rating}</span>
                </div>
              </div>

              <h3 className="font-heading text-2xl font-bold text-[#111827] mb-3">
                {quickViewItem.name}
              </h3>

              <p className="text-[#6B7280] text-xs sm:text-sm font-body leading-relaxed mb-6">
                {quickViewItem.description}
              </p>

              <div className="bg-[#FFF7ED] rounded-2xl p-4 border border-[#F3E8D4] mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#6B7280] font-semibold uppercase tracking-wider block">Price</span>
                  <span className="font-heading text-3xl font-bold text-[#111827]">₹{quickViewItem.price}</span>
                </div>
                <span className="text-xs font-medium text-[#EA580C] bg-white px-3 py-1.5 rounded-full border border-[#F3E8D4]">
                  {quickViewItem.dietary || 'Vegetarian'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleOrderWhatsApp}
                className="flex-1 btn-gradient py-3.5 rounded-full font-btn font-semibold text-xs flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order via WhatsApp</span>
              </button>

              <button
                onClick={() => toggleFavorite(quickViewItem.id)}
                className="w-12 h-12 rounded-full border border-[#F3E8D4] flex items-center justify-center text-[#111827] hover:bg-[#FFF7ED] transition-colors"
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-[#EA580C] text-[#EA580C]' : ''}`} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

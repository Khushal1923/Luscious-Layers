import React from 'react';
import { X, ZoomIn } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function LightboxModal() {
  const { lightboxImage, setLightboxImage } = useApp();

  if (!lightboxImage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={() => setLightboxImage(null)}
        className="fixed inset-0 bg-[#111827]/90 backdrop-blur-md transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative max-w-4xl w-full z-10 animate-in zoom-in-95 duration-300">
        <button
          onClick={() => setLightboxImage(null)}
          className="absolute -top-12 right-0 text-white hover:text-[#F59E0B] transition-colors flex items-center gap-1 text-xs font-btn uppercase tracking-wider"
        >
          <span>Close</span>
          <X className="w-6 h-6" />
        </button>

        <div className="bg-[#FFFDF8] rounded-3xl overflow-hidden shadow-2xl border border-[#F3E8D4]">
          <img
            src={lightboxImage.image}
            alt={lightboxImage.title}
            className="w-full max-h-[75vh] object-cover"
          />
          <div className="p-6 bg-white flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#EA580C] font-btn">
                {lightboxImage.category}
              </span>
              <h3 className="font-heading text-2xl font-bold text-[#111827]">
                {lightboxImage.title}
              </h3>
            </div>
            <span className="text-xs text-[#6B7280]">Luscious Layers Gallery</span>
          </div>
        </div>
      </div>
    </div>
  );
}

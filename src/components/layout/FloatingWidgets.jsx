import React from 'react';
import { Phone, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function FloatingWidgets() {
  const { settings, toast } = useApp();

  return (
    <>
      {/* Toast Notification Banner */}
      {toast && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="bg-[#111827] text-white px-5 py-3 rounded-full shadow-2xl border border-[#EA580C]/40 flex items-center gap-3 text-xs font-medium">
            {toast.type === 'success' ? (
              <CheckCircle className="w-4 h-4 text-[#F59E0B]" />
            ) : (
              <AlertCircle className="w-4 h-4 text-[#EA580C]" />
            )}
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Floating WhatsApp */}
        <a
          href={`https://api.whatsapp.com/send?phone=917722082092&text=Hi%20Luscious%20Layers!%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation...`}
          target="_blank"
          rel="noreferrer"
          className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75 pointer-events-none" />
        </a>
      </div>

      {/* Floating Call Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <a
          href={`tel:${settings.phone}`}
          className="w-12 h-12 rounded-full bg-[#111827] text-[#F59E0B] border border-[#F3E8D4] flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
          aria-label="Call Café"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </>
  );
}

import React from 'react';
import ReservationSection from '../components/home/ReservationSection';

export default function ReservationPage() {
  return (
    <main className="pt-24 min-h-screen">
      <div className="bg-[#FFF7ED] py-16 border-b border-[#F3E8D4] text-center">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C] font-btn font-semibold">Book A Table</span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#111827] mt-2">Table Reservation</h1>
        </div>
      </div>
      <ReservationSection />
    </main>
  );
}

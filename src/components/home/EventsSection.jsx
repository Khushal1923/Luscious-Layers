import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Music, Mic, Users, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function EventsSection() {
  const { events } = useApp();

  // Simple countdown timer for upcoming event
  const [timeLeft, setTimeLeft] = useState({ hours: 24, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-[#FFF7ED] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[#EA580C] text-xs font-semibold uppercase tracking-widest block mb-2 font-btn">
              Live & Happening
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#111827]">
              Events & Sessions
            </h2>
          </div>

          {/* Countdown Timer Widget */}
          <div className="bg-white rounded-2xl p-4 border border-[#F3E8D4] shadow-sm flex items-center gap-4">
            <div className="text-xs font-semibold text-[#6B7280]">Next Event Starts In:</div>
            <div className="flex items-center gap-2 font-mono font-bold text-sm text-[#EA580C]">
              <span className="bg-[#FFF7ED] px-2.5 py-1 rounded-lg border border-[#F3E8D4]">
                {String(timeLeft.hours).padStart(2, '0')}h
              </span>
              <span>:</span>
              <span className="bg-[#FFF7ED] px-2.5 py-1 rounded-lg border border-[#F3E8D4]">
                {String(timeLeft.minutes).padStart(2, '0')}m
              </span>
              <span>:</span>
              <span className="bg-[#FFF7ED] px-2.5 py-1 rounded-lg border border-[#F3E8D4]">
                {String(timeLeft.seconds).padStart(2, '0')}s
              </span>
            </div>
          </div>
        </div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((evt) => (
            <div 
              key={evt.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#F3E8D4] shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 bg-[#EA580C] text-white text-[10px] font-btn font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {evt.category}
                </span>
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#111827] text-[10px] font-btn font-bold px-2.5 py-1 rounded-full border border-[#F3E8D4]">
                  {evt.badge}
                </span>
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#111827] group-hover:text-[#EA580C] transition-colors mb-3">
                    {evt.title}
                  </h3>

                  <p className="text-[#6B7280] text-xs leading-relaxed font-body mb-6">
                    {evt.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F3E8D4] space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#6B7280]">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Calendar className="w-4 h-4 text-[#F59E0B]" />
                      <span>{evt.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-4 h-4 text-[#EA580C]" />
                      <span>{evt.time}</span>
                    </div>
                  </div>

                  <Link
                    to="/reservation"
                    className="w-full btn-gradient py-2.5 rounded-full text-xs font-btn font-semibold flex items-center justify-center gap-2"
                  >
                    <span>Reserve Seat</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

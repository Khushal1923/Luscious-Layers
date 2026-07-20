import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Coffee, ArrowRight, Calendar, Star, Clock, MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function HeroSection() {
  const { settings } = useApp();

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#111827]">
      
      {/* Hero Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url(${settings.heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/90 via-[#111827]/75 to-[#111827]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />
      </div>

      {/* Hero Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-8 space-y-6 text-white">
            
            {/* Tagline Badge with Animated Steam */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-btn font-semibold tracking-widest uppercase text-[#FDBA74]"
            >
              <div className="relative">
                <Coffee className="w-4 h-4 text-[#F59E0B]" />
                {/* Coffee Steam Animation */}
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-3 bg-white/60 rounded-full animate-steam-1" />
                <span className="absolute -top-3 left-1/3 w-1 h-2 bg-white/40 rounded-full animate-steam-2" />
              </div>
              <span>Welcome to {settings.cafeName}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.08] tracking-tight"
            >
              Life Begins <br />
              <span className="italic font-serif font-normal text-[#FDBA74]">After</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#FDBA74] to-[#EA580C]">
                Coffee.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/80 text-base sm:text-lg max-w-xl font-body leading-relaxed"
            >
              Crafted with Passion, Served with Love. Experience artisanal roasts, stone-baked pizzas, and heavenly hand-crafted desserts on College Road.
            </motion.p>

            {/* Hero CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <Link
                to="/menu"
                className="btn-gradient px-8 py-4 rounded-full font-btn font-semibold text-sm flex items-center gap-3 group"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/reservation"
                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-btn font-semibold text-sm flex items-center gap-3 transition-all"
              >
                <Calendar className="w-4 h-4 text-[#F59E0B]" />
                <span>Reserve Table</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column Floating Glass Badge & Highlights */}
          <div className="hidden lg:block lg:col-span-4 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="glass-card p-6 rounded-3xl text-[#111827] shadow-2xl relative animate-float border border-white/40"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#FFF7ED] flex items-center justify-center text-[#F59E0B]">
                  <Star className="w-6 h-6 fill-[#F59E0B]" />
                </div>
                <div>
                  <div className="font-heading text-2xl font-bold">4.9 ★★★★★</div>
                  <div className="text-xs text-[#6B7280]">Over 1,200+ Google Reviews</div>
                </div>
              </div>

              <div className="border-t border-[#F3E8D4] pt-4 space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#6B7280]">100% Pure Vegetarian:</span>
                  <span className="font-semibold text-[#111827]">Jain Options Available</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#6B7280]">Daily Roasts:</span>
                  <span className="font-semibold text-[#EA580C]">Specialty Arabica</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Floating Bottom Info Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#FFFDF8]/90 backdrop-blur-md rounded-2xl p-6 border border-[#F3E8D4] shadow-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-[#111827]">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] flex items-center justify-center text-[#F59E0B] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-[#6B7280] tracking-wider">Opening Hours</div>
              <div className="text-xs font-semibold text-[#111827]">{settings.openingHours}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] flex items-center justify-center text-[#EA580C] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-[#6B7280] tracking-wider">Location</div>
              <div className="text-xs font-semibold text-[#111827] truncate max-w-[200px]">College Road, Nashik</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] flex items-center justify-center text-[#F59E0B] shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-[#6B7280] tracking-wider">Direct Call</div>
              <div className="text-xs font-semibold text-[#111827]">{settings.phone}</div>
            </div>
          </div>

          <div className="flex items-center justify-between sm:justify-start gap-3">
            <div className="text-xs font-semibold text-[#6B7280]">Follow Us:</div>
            <div className="flex items-center gap-2">
              <a href={settings.instagram} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-[#FFF7ED] flex items-center justify-center text-[#111827] hover:text-[#EA580C] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={settings.facebook} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-[#FFF7ED] flex items-center justify-center text-[#111827] hover:text-[#EA580C] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

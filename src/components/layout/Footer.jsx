import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Coffee, MapPin, Phone, Mail, Clock, Instagram, Facebook, ArrowRight, Heart } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function Footer() {
  const { settings, showToast } = useApp();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    showToast('Thank you for subscribing to our luxury updates newsletter!');
    setEmail('');
  };

  const instaPhotos = [
    'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&auto=format&fit=crop&q=80'
  ];

  return (
    <footer className="bg-[#FFF7ED] border-t border-[#F3E8D4] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter Card */}
        <div className="bg-gradient-to-r from-[#111827] to-[#231614] rounded-3xl p-8 md:p-12 mb-16 shadow-xl text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl z-10">
            <span className="text-[#FDBA74] text-xs font-semibold uppercase tracking-widest block mb-2 font-btn">
              Join Our VIP Club
            </span>
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-3">
              Subscribe for Exclusive Tasting Invites
            </h3>
            <p className="text-white/70 text-sm font-body">
              Receive seasonal menu highlights, chef tasting invitations, and weekend live session schedules straight to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 z-10">
            <input
              type="email"
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-5 py-3.5 rounded-full bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:border-[#F59E0B] sm:w-80 text-sm"
            />
            <button
              type="submit"
              className="btn-gradient px-7 py-3.5 rounded-full text-xs font-btn font-semibold flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Background Ambient Glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#EA580C]/20 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Footer Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#F3E8D4]">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#EA580C] flex items-center justify-center text-white shadow-sm">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="font-heading text-2xl font-bold text-[#111827]">
                <span className="text-[#F59E0B]">Luscious</span> Layers
              </span>
            </Link>

            <p className="text-[#6B7280] text-xs leading-relaxed font-body">
              {settings.tagline}. Designed for coffee aficionados, dessert lovers, and cozy gathering moments on College Road, Nashik.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={settings.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#F3E8D4] flex items-center justify-center text-[#111827] hover:text-[#EA580C] hover:border-[#EA580C] transition-all shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={settings.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#F3E8D4] flex items-center justify-center text-[#111827] hover:text-[#EA580C] hover:border-[#EA580C] transition-all shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base font-bold text-[#111827] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-[#6B7280]">
              <li><Link to="/" className="hover:text-[#F59E0B] transition-colors">Home Page</Link></li>
              <li><Link to="/about" className="hover:text-[#F59E0B] transition-colors">About Our Café</Link></li>
              <li><Link to="/menu" className="hover:text-[#F59E0B] transition-colors">Artisanal Menu</Link></li>
              <li><Link to="/events" className="hover:text-[#F59E0B] transition-colors">Events & Live Music</Link></li>
              <li><Link to="/gallery" className="hover:text-[#F59E0B] transition-colors">Photo Gallery</Link></li>
              <li><Link to="/reservation" className="hover:text-[#F59E0B] transition-colors">Book a Table</Link></li>
              <li><Link to="/contact" className="hover:text-[#F59E0B] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading text-base font-bold text-[#111827] mb-4">
              Visit Café
            </h4>
            <ul className="space-y-3 text-xs text-[#6B7280]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>{settings.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <a href={`tel:${settings.phone}`} className="hover:text-[#111827]">{settings.phone}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <a href={`mailto:${settings.email}`} className="hover:text-[#111827]">{settings.email}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>{settings.openingHours}</span>
              </li>
            </ul>
          </div>

          {/* Instagram Feed Preview */}
          <div>
            <h4 className="font-heading text-base font-bold text-[#111827] mb-4">
              Insta Feed Preview
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {instaPhotos.map((photo, i) => (
                <a
                  key={i}
                  href={settings.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative rounded-xl overflow-hidden aspect-square border border-[#F3E8D4]"
                >
                  <img
                    src={photo}
                    alt={`Insta preview ${i+1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#111827]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <Instagram className="w-5 h-5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <p>© {new Date().getFullYear()} Luscious Layers Café & Restro. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#EA580C] fill-[#EA580C]" />
            <span>for Coffee & Dessert Lovers</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

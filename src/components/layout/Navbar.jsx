import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, Menu as MenuIcon, X, Calendar, Phone } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { settings } = useApp();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reservation', path: '/reservation' },
    { name: 'Contact', path: '/contact' },
  ];

  // Header should be solid on subpages, when scrolled, or when mobile menu is open
  const isSolid = scrolled || !isHomePage || mobileMenuOpen;

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSolid 
          ? 'bg-[#FFFDF8] shadow-md border-b border-[#F3E8D4] py-3 text-[#111827]' 
          : 'bg-gradient-to-b from-[#111827]/80 via-[#111827]/40 to-transparent py-5 text-white'
      }`}
      style={isSolid ? { backgroundColor: '#FFFDF8' } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#EA580C] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
            <Coffee className="w-5 h-5" />
          </div>
          <div>
            <span className={`font-heading text-2xl font-bold tracking-tight transition-colors duration-300 ${
              isSolid ? 'text-[#111827]' : 'text-white'
            }`}>
              <span className="text-[#F59E0B]">Luscious</span> Layers
            </span>
            <span className={`block text-[10px] font-semibold tracking-widest uppercase -mt-1 transition-colors duration-300 ${
              isSolid ? 'text-[#EA580C]' : 'text-[#FDBA74]'
            }`}>
              Café & Restro • Nashik
            </span>
          </div>
        </Link>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium text-sm transition-all duration-300 relative py-1 ${
                  isActive 
                    ? 'text-[#F59E0B] font-bold' 
                    : isSolid 
                      ? 'text-[#111827] hover:text-[#F59E0B]' 
                      : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#F59E0B] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/reservation"
            className="hidden sm:inline-flex items-center gap-2 btn-gradient px-5 py-2.5 rounded-full text-xs font-btn font-semibold tracking-wide"
          >
            <Calendar className="w-4 h-4" />
            <span>Book A Table</span>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-full transition-colors ${
              isSolid ? 'text-[#111827] hover:bg-[#FFF7ED]' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-50 flex justify-end">
          {/* Dark Backdrop */}
          <div 
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 top-[65px] bg-[#111827]/60 backdrop-blur-sm transition-opacity"
          />

          {/* Side Drawer Container with Guaranteed Solid Background */}
          <div 
            className="relative w-full max-w-xs bg-[#FFFDF8] h-[calc(100vh-65px)] shadow-2xl p-6 flex flex-col justify-between z-10 overflow-y-auto border-l border-[#F3E8D4]"
            style={{ backgroundColor: '#FFFDF8' }}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#F3E8D4]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C] font-btn">
                  Navigation Menu
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-full text-[#6B7280] hover:text-[#111827] hover:bg-[#FFF7ED]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-1.5 mt-4">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-xl font-medium text-base transition-colors ${
                        isActive 
                          ? 'bg-[#FFF7ED] text-[#F59E0B] font-bold border border-[#F3E8D4]' 
                          : 'text-[#111827] hover:bg-[#FFF7ED]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-[#F3E8D4] flex flex-col gap-3 mt-6">
              <Link
                to="/reservation"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full btn-gradient py-3 rounded-xl flex items-center justify-center gap-2 font-btn font-semibold text-sm shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book A Table</span>
              </Link>
              <a
                href={`tel:${settings.phone}`}
                className="w-full py-2.5 rounded-xl border border-[#F3E8D4] text-[#111827] flex items-center justify-center gap-2 font-medium text-xs bg-white hover:bg-[#FFF7ED]"
              >
                <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>{settings.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

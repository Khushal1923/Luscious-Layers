import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import PopularPicksSection from '../components/home/PopularPicksSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import EventsSection from '../components/home/EventsSection';
import GallerySection from '../components/home/GallerySection';
import ReservationSection from '../components/home/ReservationSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import QuickViewModal from '../components/menu/QuickViewModal';
import LightboxModal from '../components/gallery/LightboxModal';

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <PopularPicksSection />
      <WhyChooseUsSection />
      <EventsSection />
      <GallerySection />
      <ReservationSection />
      <TestimonialsSection />

      {/* Modals */}
      <QuickViewModal />
      <LightboxModal />
    </main>
  );
}

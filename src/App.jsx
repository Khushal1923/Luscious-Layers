import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWidgets from './components/layout/FloatingWidgets';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import ReservationPage from './pages/ReservationPage';
import ContactPage from './pages/ContactPage';

// ScrollToTop Helper
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-[#FFFDF8] text-[#111827]">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/reservation" element={<ReservationPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
          <Footer />
          <FloatingWidgets />
        </div>
      </Router>
    </AppProvider>
  );
}

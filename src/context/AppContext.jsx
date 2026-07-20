import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  INITIAL_MENU, 
  INITIAL_EVENTS, 
  INITIAL_GALLERY, 
  INITIAL_TESTIMONIALS, 
  INITIAL_SETTINGS 
} from '../data/initialData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Application Data States
  const [menu, setMenu] = useState(() => {
    const saved = localStorage.getItem('luscious_menu');
    return saved ? JSON.parse(saved) : INITIAL_MENU;
  });

  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem('luscious_events');
    return saved ? JSON.parse(saved) : INITIAL_EVENTS;
  });

  const [gallery, setGallery] = useState(() => {
    const saved = localStorage.getItem('luscious_gallery');
    return saved ? JSON.parse(saved) : INITIAL_GALLERY;
  });

  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('luscious_settings');
    return saved ? JSON.parse(saved) : INITIAL_SETTINGS;
  });

  const [reservations, setReservations] = useState(() => {
    const saved = localStorage.getItem('luscious_reservations');
    return saved ? JSON.parse(saved) : [
      {
        id: 'res-101',
        name: 'Rahul Sharma',
        phone: '+91 98765 43210',
        email: 'rahul@gmail.com',
        date: '2026-07-22',
        time: '07:30 PM',
        guests: 4,
        area: 'Window Side',
        notes: 'Birthday celebration table decoration please.',
        status: 'Confirmed',
        createdAt: '2026-07-20'
      },
      {
        id: 'res-102',
        name: 'Priya Singh',
        phone: '+91 98123 45678',
        email: 'priya@yahoo.com',
        date: '2026-07-23',
        time: '08:00 PM',
        guests: 2,
        area: 'Cozy Corner',
        notes: 'Anniversary date night.',
        status: 'Pending',
        createdAt: '2026-07-20'
      }
    ];
  });

  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('luscious_orders');
    return saved ? JSON.parse(saved) : [
      { id: '#1001', customer: 'Rahul Sharma', items: '2 items', amount: 340, status: 'Completed', date: '2026-07-20' },
      { id: '#1002', customer: 'Priya Singh', items: '3 items', amount: 470, status: 'Completed', date: '2026-07-20' },
      { id: '#1003', customer: 'Amit Verma', items: '1 item', amount: 210, status: 'Pending', date: '2026-07-20' },
      { id: '#1004', customer: 'Neha Patil', items: '2 items', amount: 430, status: 'Completed', date: '2026-07-19' }
    ];
  });

  const [favorites, setFavorites] = useState([]);
  const [quickViewItem, setQuickViewItem] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [toast, setToast] = useState(null);

  // Sync states to LocalStorage
  useEffect(() => {
    localStorage.setItem('luscious_menu', JSON.stringify(menu));
  }, [menu]);

  useEffect(() => {
    localStorage.setItem('luscious_events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('luscious_gallery', JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem('luscious_settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem('luscious_reservations', JSON.stringify(reservations));
  }, [reservations]);

  useEffect(() => {
    localStorage.setItem('luscious_orders', JSON.stringify(orders));
  }, [orders]);

  // Toast Helper
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Favorites Toggle
  const toggleFavorite = (itemId) => {
    setFavorites(prev => {
      const exists = prev.includes(itemId);
      const updated = exists ? prev.filter(id => id !== itemId) : [...prev, itemId];
      showToast(exists ? 'Removed from favorites' : 'Added to your favorites!');
      return updated;
    });
  };

  // Add Reservation
  const addReservation = (data) => {
    const newRes = {
      id: `res-${Date.now()}`,
      ...data,
      status: 'Confirmed',
      createdAt: new Date().toISOString().split('T')[0]
    };
    setReservations(prev => [newRes, ...prev]);
    showToast('Table Reservation Confirmed!');
    return newRes;
  };

  // Admin Actions
  const addMenuItem = (item) => {
    const newItem = { id: `m-${Date.now()}`, rating: 5.0, ...item };
    setMenu(prev => [newItem, ...prev]);
    showToast('New menu item added successfully!');
  };

  const updateMenuItem = (id, updatedData) => {
    setMenu(prev => prev.map(item => item.id === id ? { ...item, ...updatedData } : item));
    showToast('Menu item updated!');
  };

  const deleteMenuItem = (id) => {
    setMenu(prev => prev.filter(item => item.id !== id));
    showToast('Menu item deleted.');
  };

  const updateSettings = (newSettings) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
    showToast('Website settings updated!');
  };

  const updateReservationStatus = (id, status) => {
    setReservations(prev => prev.map(r => r.id === id ? { ...r, status } : r));
    showToast(`Reservation status changed to ${status}`);
  };

  return (
    <AppContext.Provider value={{
      menu,
      events,
      gallery,
      settings,
      reservations,
      orders,
      favorites,
      quickViewItem,
      lightboxImage,
      toast,
      setQuickViewItem,
      setLightboxImage,
      showToast,
      toggleFavorite,
      addReservation,
      addMenuItem,
      updateMenuItem,
      deleteMenuItem,
      updateSettings,
      updateReservationStatus
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

import React, { useState } from 'react';
import { Calendar, Clock, Users, MapPin, CheckCircle, MessageCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function ReservationSection() {
  const { addReservation, settings } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '07:30 PM',
    guests: '2',
    area: 'Window Side',
    notes: ''
  });

  const [confirmedRes, setConfirmedRes] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    const text = `*Table Reservation Request at Luscious Layers*\n• *Name:* ${formData.name}\n• *Phone:* ${formData.phone}\n• *Email:* ${formData.email || 'N/A'}\n• *Date:* ${formData.date}\n• *Time Slot:* ${formData.time}\n• *Guests:* ${formData.guests} Person(s)\n• *Seating Area:* ${formData.area}\n• *Special Notes:* ${formData.notes || 'None'}\n\nPlease confirm table availability. Thank you!`;
    const url = `https://api.whatsapp.com/send?phone=917722082092&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    addReservation(formData);
  };

  return (
    <section id="reservation-section" className="py-24 bg-[#FFF7ED] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#EA580C] text-xs font-semibold uppercase tracking-widest block mb-2 font-btn">
            Skip The Waiting Line
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#111827]">
            Reserve Your Table
          </h2>
          <p className="text-[#6B7280] text-sm mt-3 font-body">
            Book your favorite corner in advance for date nights, reading corners, or family celebrations.
          </p>
        </div>

        {/* Booking Card Form */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-[#F3E8D4] luxury-shadow">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#111827] block mb-2 font-btn">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#F3E8D4] bg-[#FFFDF8] text-sm text-[#111827] focus:outline-none focus:border-[#EA580C]"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#111827] block mb-2 font-btn">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#F3E8D4] bg-[#FFFDF8] text-sm text-[#111827] focus:outline-none focus:border-[#EA580C]"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#111827] block mb-2 font-btn">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="rahul@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#F3E8D4] bg-[#FFFDF8] text-sm text-[#111827] focus:outline-none focus:border-[#EA580C]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#111827] block mb-2 font-btn">
                  Reservation Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#F3E8D4] bg-[#FFFDF8] text-sm text-[#111827] focus:outline-none focus:border-[#EA580C]"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#111827] block mb-2 font-btn">
                  Preferred Time Slot
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#F3E8D4] bg-[#FFFDF8] text-sm text-[#111827] focus:outline-none focus:border-[#EA580C]"
                >
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="06:00 PM">06:00 PM</option>
                  <option value="07:30 PM">07:30 PM</option>
                  <option value="09:00 PM">09:00 PM</option>
                  <option value="10:00 PM">10:00 PM</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#111827] block mb-2 font-btn">
                  Number of Guests
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#F3E8D4] bg-[#FFFDF8] text-sm text-[#111827] focus:outline-none focus:border-[#EA580C]"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="6">6 People</option>
                  <option value="8">8+ Party</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#111827] block mb-2 font-btn">
                  Seating Area Preference
                </label>
                <select
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#F3E8D4] bg-[#FFFDF8] text-sm text-[#111827] focus:outline-none focus:border-[#EA580C]"
                >
                  <option value="Window Side">Window Side (Sunlight View)</option>
                  <option value="Cozy Corner">Cozy Corner</option>
                  <option value="Outdoor Deck">Outdoor Deck</option>
                  <option value="Celebration Table">Celebration Table</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#111827] block mb-2 font-btn">
                  Special Requests (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Birthday request, Jain food notes..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#F3E8D4] bg-[#FFFDF8] text-sm text-[#111827] focus:outline-none focus:border-[#EA580C]"
                />
              </div>
            </div>

            <div className="pt-4 text-center">
              <button
                type="submit"
                className="w-full sm:w-auto btn-gradient px-10 py-4 rounded-full text-xs font-btn font-semibold tracking-wider uppercase shadow-xl inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Reserve Table via WhatsApp</span>
              </button>
            </div>

          </form>
        </div>

        {/* Confirmation Modal */}
        {confirmedRes && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div onClick={() => setConfirmedRes(null)} className="fixed inset-0 bg-[#111827]/70 backdrop-blur-sm" />
            <div className="relative bg-white rounded-3xl p-8 max-w-md w-full z-10 text-center shadow-2xl border border-[#F3E8D4] animate-in zoom-in-95">
              <CheckCircle className="w-16 h-16 text-[#F59E0B] mx-auto mb-4" />
              <h3 className="font-heading text-2xl font-bold text-[#111827] mb-2">Table Reserved!</h3>
              <p className="text-xs text-[#6B7280] mb-6">
                We have held a table for <strong className="text-[#111827]">{confirmedRes.guests} guest(s)</strong> on <strong className="text-[#111827]">{confirmedRes.date}</strong> at <strong className="text-[#EA580C]">{confirmedRes.time}</strong>.
              </p>

              <div className="space-y-3">
                <button
                  onClick={handleWhatsAppConfirm}
                  className="w-full btn-gradient py-3 rounded-full text-xs font-btn font-semibold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Confirmation via WhatsApp</span>
                </button>

                <button
                  onClick={() => setConfirmedRes(null)}
                  className="w-full py-2.5 text-xs font-btn font-semibold text-[#6B7280] hover:text-[#111827]"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

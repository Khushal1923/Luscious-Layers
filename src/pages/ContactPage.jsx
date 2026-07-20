import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function ContactPage() {
  const { settings, showToast } = useApp();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.message) return;
    showToast('Thank you for reaching out! We will contact you shortly.');
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <main className="pt-24 min-h-screen bg-[#FFFDF8] pb-24">
      
      {/* Header Banner */}
      <div className="bg-[#FFF7ED] py-16 border-b border-[#F3E8D4] text-center">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C] font-btn font-semibold">Get In Touch</span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#111827] mt-2">Contact Us</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C] font-btn font-semibold">We'd Love To Hear From You</span>
              <h2 className="font-heading text-3xl font-bold text-[#111827] mt-1 mb-4">Visit Our Café</h2>
              <p className="text-[#6B7280] text-sm font-body leading-relaxed">
                Have a question about custom cakes, party reservations, or feedback? Reach out to our management team directly.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl border border-[#F3E8D4] shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] flex items-center justify-center text-[#EA580C] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-[#111827]">Address</h4>
                  <p className="text-xs text-[#6B7280] leading-relaxed mt-1">{settings.address}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#F3E8D4] shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] flex items-center justify-center text-[#F59E0B] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-[#111827]">Phone Numbers</h4>
                  <p className="text-xs text-[#6B7280] mt-1">{settings.phone}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#F3E8D4] shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] flex items-center justify-center text-[#EA580C] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-[#111827]">Email</h4>
                  <p className="text-xs text-[#6B7280] mt-1">{settings.email}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#F3E8D4] shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] flex items-center justify-center text-[#F59E0B] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-[#111827]">Opening Hours</h4>
                  <p className="text-xs text-[#6B7280] mt-1">{settings.openingHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form & Map */}
          <div className="lg:col-span-7 space-y-8">
            {/* Form */}
            <div className="bg-white rounded-3xl p-8 border border-[#F3E8D4] shadow-sm">
              <h3 className="font-heading text-2xl font-bold text-[#111827] mb-6">Send A Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#111827] block mb-1 font-btn">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Rahul Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#F3E8D4] bg-[#FFFDF8] text-xs text-[#111827] focus:outline-none focus:border-[#EA580C]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#111827] block mb-1 font-btn">Your Email</label>
                    <input
                      type="email"
                      placeholder="rahul@gmail.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#F3E8D4] bg-[#FFFDF8] text-xs text-[#111827] focus:outline-none focus:border-[#EA580C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#111827] block mb-1 font-btn">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#F3E8D4] bg-[#FFFDF8] text-xs text-[#111827] focus:outline-none focus:border-[#EA580C]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#111827] block mb-1 font-btn">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message or inquiry here..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#F3E8D4] bg-[#FFFDF8] text-xs text-[#111827] focus:outline-none focus:border-[#EA580C] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gradient px-8 py-3.5 rounded-full text-xs font-btn font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

            {/* Embedded Map Container */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#F3E8D4] shadow-sm aspect-[16/9]">
              <iframe
                title="Luscious Layers Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.123456789!2d73.763456!3d20.005678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb123456789%3A0x123456789!2sCollege+Road%2C+Nashik!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}

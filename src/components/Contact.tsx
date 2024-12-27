import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-cyan-500 mr-4" />
                <span>keertimaankrishnajadaun@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-cyan-500 mr-4" />
                <span>+91 6397852374</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-cyan-500 mr-4" />
                <span>Bareilly, (Uttar Pradesh)</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 h-32"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors flex items-center"
            >
              Send Message
              <Send className="w-4 h-4 ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
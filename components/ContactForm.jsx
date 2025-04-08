'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '', // Neues Telefonnummer-Feld
    message: ''
  });
  
  const [status, setStatus] = useState(null);
  
  // Add useEffect to clear status after 5 seconds
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [status]);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phoneNumber: '', message: '' }); // Telefonnummer-Feld zurücksetzen
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };
  
  return (
    <div className="w-full md:w-1/2 p-8 rounded-lg">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-4 border border-[#1a1a1a] rounded-md bg-[#e5e5e5] text-black"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-4 border border-[#1a1a1a] rounded-md bg-[#e5e5e5] text-black"
        />
        {/* Neues Telefonnummer-Feld */}
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Telefonnummer"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className="p-4 border border-[#1a1a1a] rounded-md bg-[#e5e5e5] text-black"
        />
        <textarea
          name="message"
          placeholder="Nachricht"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          required
          className="p-4 border border-[#1a1a1a] rounded-md bg-[#e5e5e5] text-black"
        />
        <button
          type="submit"
          className="bg-[#e5e5e5] text-black p-4 rounded-full mt-4 border-2 border-black transition-all duration-200 hover:bg-black hover:text-white"
        >
          Senden
        </button>
        
        {/* Call Button */}
        <Link
          href="tel:+4915170220139"
          className="bg-[#e5e5e5] text-black p-4 rounded-full border-2 border-black transition-all duration-200 hover:bg-black hover:text-white text-center"
        >
          Anrufen
        </Link>
        
        {/* Status Messages - Moved below the link */}
        <div className="text-center mt-2">
          {status === 'sending' && <p className="text-yellow-500">Senden...</p>}
          {status === 'success' && <p className="text-green-500">E-Mail erfolgreich gesendet!</p>}
          {status === 'error' && <p className="text-red-500">Fehler beim Senden!</p>}
        </div>
      </form>
    </div>
  );
}
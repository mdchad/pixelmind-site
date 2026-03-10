'use client'

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#E6E6E6] p-16 mb-16"
    >
      <div className="mb-8 font-mono text-black">
        /// GET IN TOUCH
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left side - Title and description */}
        <div>
          <h2 className="text-3xl mb-4 font-normal text-black font-geist-pixel-square">
            Let's Build Something
          </h2>
          <p className="text-base text-[#444444] leading-relaxed font-geist-pixel-grid">
            Available for new contracts and consultations. Average response time under 24 hours.
          </p>
        </div>

        {/* Right side - Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              placeholder="Your Name"
              required
              className={`w-full bg-transparent border-b ${focusedField === 'name' ? 'border-black' : 'border-gray-300'} py-4 font-mono text-sm text-black placeholder:text-gray-500 outline-none transition-colors`}
            />
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              placeholder="Email Address"
              required
              className={`w-full bg-transparent border-b ${focusedField === 'email' ? 'border-black' : 'border-gray-300'} py-4 font-mono text-sm text-black placeholder:text-gray-500 outline-none transition-colors`}
            />
          </div>

          <div className="relative">
            <textarea
              id="msg"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              rows={4}
              placeholder="Project Details"
              required
              className={`w-full bg-transparent border-b ${focusedField === 'message' ? 'border-black' : 'border-gray-300'} py-4 font-mono text-sm text-black placeholder:text-gray-500 outline-none transition-colors resize-vertical`}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary w-fit disabled:opacity-50"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="font-mono text-sm text-black">Transmission sent. We'll respond within 24 hours.</p>
          )}
          {status === 'error' && (
            <p className="font-mono text-sm text-red-600">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

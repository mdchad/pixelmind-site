'use client'

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Transmission sent! We will respond within 24 hours.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="w-full py-32 relative border-b border-[#111] flex items-start mt-32">
      <div className="w-full max-w-[1600px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-2 gap-8 md:gap-0">
          {/* Left side - Title and description */}
          <div className="">
            <h2 className="lowercase font-mono text-2xl mb-4 font-normal tracking-tight">uplink</h2>
            <p className="text-[#888] text-sm">Available for new contracts. Response time &lt; 24h.</p>
          </div>

          {/* Right side - Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-12 md:pl-16">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                placeholder="client_id"
                required
                className="w-full bg-transparent border-none border-b border-[#333] focus:border-white text-white py-4 font-mono text-sm rounded-none outline-none transition-colors placeholder:text-[#666] placeholder:lowercase"
                style={{ borderBottomColor: focusedField === 'name' ? 'var(--fg)' : '#333' }}
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
                placeholder="comms_channel"
                required
                className="w-full bg-transparent border-none border-b border-[#333] focus:border-white text-white py-4 font-mono text-sm rounded-none outline-none transition-colors placeholder:text-[#666] placeholder:lowercase"
                style={{ borderBottomColor: focusedField === 'email' ? 'var(--fg)' : '#333' }}
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
                rows={8}
                placeholder="project_specs"
                required
                className="w-full bg-transparent border-none border-b border-[#333] focus:border-white text-white py-4 font-mono text-sm rounded-none outline-none transition-colors resize-none placeholder:text-[#666] placeholder:lowercase"
                style={{ borderBottomColor: focusedField === 'message' ? 'var(--fg)' : '#333' }}
              />
            </div>

            <button
              type="submit"
              className="btn-minimal lowercase w-fit font-mono text-sm border border-[#444] px-6 py-3 bg-transparent text-white transition-all duration-300 relative overflow-hidden cursor-pointer hover:text-black hover:border-white"
            >
              send_transmission
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

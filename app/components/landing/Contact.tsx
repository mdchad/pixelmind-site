'use client'

import React, { useState } from 'react';

const inputBase: React.CSSProperties = {
  width: '100%',
  background: '#111',
  border: '1px solid #222',
  padding: '14px 16px',
  fontSize: '0.9rem',
  color: '#FFFFFF',
  outline: 'none',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  fontFamily: 'inherit',
};

const inputFocused: React.CSSProperties = {
  ...inputBase,
  borderColor: '#5AFAC5',
  boxShadow: '0 0 0 3px rgba(90, 250, 197, 0.10)',
  background: '#0D0D0D',
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
      className="py-24 md:py-32"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="section-label mb-6">Get in touch</div>
            <h2
              className="mb-5"
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                lineHeight: 1.15,
                color: 'var(--fg)',
              }}
            >
              Let&apos;s build<br />something together
            </h2>
            <p
              className="max-w-sm"
              style={{ color: 'var(--muted)', lineHeight: 1.75 }}
            >
              Whether you have a product idea, want to improve an existing one, or just want to talk — we&apos;d love to hear from you. We respond within 24 hours.
            </p>

            {/* Info rows */}
            <div
              className="flex flex-col mt-10"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              <div
                className="flex flex-col py-5"
                style={{ borderBottom: '1px solid var(--border)' }}
              >
                <span
                  className="text-xs font-medium mb-1.5"
                  style={{
                    color: 'var(--subtle)',
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                  }}
                >
                  Email
                </span>
                <a
                  href="mailto:hello@pixelmindstudio.co"
                  className="text-sm"
                  style={{ color: 'var(--fg)', transition: 'color 0.2s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg)')}
                >
                  hello@pixelmindstudio.co
                </a>
              </div>
              <div className="flex flex-col py-5">
                <span
                  className="text-xs font-medium mb-1.5"
                  style={{
                    color: 'var(--subtle)',
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                  }}
                >
                  Response time
                </span>
                <span className="text-sm" style={{ color: 'var(--fg)' }}>
                  Under 24 hours
                </span>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div
            className="p-8"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
            }}
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <div
                  className="w-14 h-14 flex items-center justify-center"
                  style={{ border: '1px solid #5AFAC5' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 13L9 17L19 7" stroke="#5AFAC5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl" style={{ color: 'var(--fg)', letterSpacing: '-0.025em' }}>
                  Message sent
                </h3>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  We received your message and will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-ghost mt-2"
                  style={{ padding: '10px 24px' }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium mb-2"
                    style={{ color: 'var(--muted)' }}
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="John Doe"
                    required
                    style={focusedField === 'name' ? inputFocused : inputBase}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium mb-2"
                    style={{ color: 'var(--muted)' }}
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="john@acme.com"
                    required
                    style={focusedField === 'email' ? inputFocused : inputBase}
                  />
                </div>

                <div>
                  <label
                    htmlFor="msg"
                    className="block text-xs font-medium mb-2"
                    style={{ color: 'var(--muted)' }}
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="msg"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    placeholder="We're building a mobile app that..."
                    required
                    style={{
                      ...(focusedField === 'message' ? inputFocused : inputBase),
                      resize: 'vertical',
                      minHeight: '120px',
                    }}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm" style={{ color: 'var(--color-error)' }}>
                    Message failed to send. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full disabled:opacity-50 mt-1"
                >
                  {status === 'loading' ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

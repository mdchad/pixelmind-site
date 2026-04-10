'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50"
      style={{
        background: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid #1F1F1F' : '1px solid transparent',
        transition: 'background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group" aria-label="Pixelmind Studio home">
          <Image
            src="/logo.png"
            alt=""
            width={28}
            height={28}
            className="transition-transform duration-200 group-hover:scale-105 bg-black"
          />
          <span className="text-sm font-semibold tracking-tight" style={{ color: 'var(--fg)' }}>
            Pixelmind
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {[
            { label: 'Services', href: '#services' },
            { label: 'Work', href: '#work' },
            { label: 'Contact', href: '#contact' },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm"
              style={{
                color: 'var(--muted)',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary"
            style={{ padding: '10px 20px', fontSize: '0.875rem' }}
          >
            Start a project
          </a>
        </nav>

        {/* Mobile hamburger — 44×44px touch target */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className="block w-5 h-px"
            style={{
              background: 'var(--fg)',
              transform: menuOpen ? 'translateY(4px) rotate(45deg)' : 'none',
              transition: 'transform 0.2s ease',
            }}
          />
          <span
            className="block w-5 h-px"
            style={{
              background: 'var(--fg)',
              opacity: menuOpen ? 0 : 1,
              transition: 'opacity 0.2s ease',
            }}
          />
          <span
            className="block w-5 h-px"
            style={{
              background: 'var(--fg)',
              transform: menuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none',
              transition: 'transform 0.2s ease',
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 w-full py-6 px-6 flex flex-col gap-4"
          style={{ background: '#0D0D0D', borderBottom: '1px solid #1F1F1F' }}
        >
          {[
            { label: 'Services', href: '#services' },
            { label: 'Work', href: '#work' },
            { label: 'Contact', href: '#contact' },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-base py-1"
              style={{ color: 'var(--muted)' }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary w-fit mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Start a project
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

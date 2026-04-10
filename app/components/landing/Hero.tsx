'use client'

import React from 'react';

const projects = [
  { name: 'Myway', cat: 'Islamic app · AI', year: '2023' },
  { name: 'Lumiq', cat: 'Wealth management', year: '2023' },
  { name: 'Tebuk', cat: 'Quran memorisation', year: '2024' },
  { name: 'Tour with Nour', cat: 'Tourism booking', year: '2026' },
];

const HeroVisual = () => (
  <div
    className="relative"
    style={{ width: '380px', height: '440px' }}
    aria-hidden="true"
  >
    {/* Ambient glow */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse at 55% 45%, rgba(193,122,91,0.10) 0%, transparent 60%)',
        filter: 'blur(24px)',
      }}
    />

    {/* Back card — rotated */}
    <div
      className="absolute rounded-2xl"
      style={{
        width: '300px',
        height: '260px',
        top: '52px',
        left: '55px',
        background: 'var(--parchment)',
        border: '1px solid var(--sand, #D5C5B5)',
        transform: 'rotate(4.5deg)',
        boxShadow: '0 2px 12px rgba(28,25,23,0.05)',
      }}
    />

    {/* Mid card */}
    <div
      className="absolute rounded-2xl"
      style={{
        width: '300px',
        height: '260px',
        top: '64px',
        left: '40px',
        background: 'var(--bg-soft)',
        border: '1px solid var(--border)',
        transform: 'rotate(-1.5deg)',
        boxShadow: '0 2px 12px rgba(28,25,23,0.05)',
      }}
    />

    {/* Main card */}
    <div
      className="absolute rounded-2xl flex flex-col"
      style={{
        width: '300px',
        top: '76px',
        left: '28px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        boxShadow: '0 4px 28px rgba(28,25,23,0.10)',
        overflow: 'hidden',
      }}
    >
      {/* Card header */}
      <div
        style={{
          padding: '14px 20px 12px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <span
          style={{
            fontSize: '10px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            fontFamily: 'var(--font-figtree)',
            fontWeight: 500,
          }}
        >
          From the studio
        </span>
      </div>

      {/* Featured project */}
      <div style={{ padding: '18px 20px 14px' }}>
        <div
          style={{
            fontSize: '10px',
            color: 'var(--accent)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            marginBottom: '5px',
            fontFamily: 'var(--font-figtree)',
            fontWeight: 500,
          }}
        >
          Islamic app · AI-powered
        </div>
        <div
          style={{
            fontSize: '28px',
            fontFamily: 'var(--font-cardo)',
            fontStyle: 'italic',
            fontWeight: 400,
            color: 'var(--fg)',
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
          }}
        >
          Myway
        </div>
        <div
          style={{
            fontSize: '11px',
            color: 'var(--muted)',
            fontFamily: 'var(--font-figtree)',
            marginTop: '3px',
          }}
        >
          Cross-platform · 2023
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'var(--border)', margin: '0 20px' }} />

      {/* Other projects */}
      <div style={{ padding: '14px 20px 18px' }}>
        <div
          style={{
            fontSize: '10px',
            color: 'var(--muted)',
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            marginBottom: '10px',
            fontFamily: 'var(--font-figtree)',
            fontWeight: 500,
          }}
        >
          Also shipped
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
          {projects.slice(1).map(({ name, cat }) => (
            <div
              key={name}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '8px' }}
            >
              <span
                style={{
                  fontSize: '13px',
                  color: 'var(--fg)',
                  fontFamily: 'var(--font-cardo)',
                  fontWeight: 400,
                  flexShrink: 0,
                }}
              >
                {name}
              </span>
              <span
                style={{
                  fontSize: '10px',
                  color: 'var(--muted)',
                  fontFamily: 'var(--font-figtree)',
                  textAlign: 'right',
                }}
              >
                {cat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Studio badge — top right */}
    <div
      className="absolute flex flex-col items-start"
      style={{
        top: '16px',
        right: '10px',
        background: 'var(--fg)',
        borderRadius: '14px',
        padding: '10px 16px',
        boxShadow: '0 4px 16px rgba(28,25,23,0.22)',
      }}
    >
      <div
        style={{
          fontSize: '10px',
          color: 'rgba(255,255,255,0.42)',
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-figtree)',
          fontWeight: 500,
        }}
      >
        Est.
      </div>
      <div
        style={{
          fontSize: '22px',
          color: 'var(--bg)',
          fontFamily: 'var(--font-cardo)',
          fontWeight: 400,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
        }}
      >
        2020
      </div>
    </div>

    {/* Status pill — bottom */}
    <div
      className="absolute flex items-center gap-2"
      style={{
        bottom: '42px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '999px',
        padding: '8px 16px',
        boxShadow: '0 2px 12px rgba(28,25,23,0.08)',
        whiteSpace: 'nowrap',
      }}
    >
      <div
        style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-status-active)', flexShrink: 0 }}
      />
      <span
        style={{
          fontSize: '11px',
          color: 'var(--fg)',
          fontFamily: 'var(--font-figtree)',
          fontWeight: 500,
        }}
      >
        Accepting new projects
      </span>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-16">
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(193,122,91,0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(213,197,181,0.10) 0%, transparent 40%)`,
        }}
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            <div className="section-label mb-8">Software studio</div>

            <h1
              className="mb-6"
              style={{
                fontSize: 'clamp(2.6rem, 6vw, 4.2rem)',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                lineHeight: 1.1,
                color: 'var(--fg)',
              }}
            >
              Software built<br />
              <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>carefully.</em>
              <br />
              Shipped with care.
            </h1>

            <p
              className="mb-10 max-w-md"
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: 'var(--muted)',
              }}
            >
              We build mobile apps, web platforms, and AI-integrated products for founders and companies who care about the details.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">
                Start a project
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#work" className="btn-ghost">
                See our work
              </a>
            </div>

            {/* What we build */}
            <div
              className="mt-12 pt-8"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                {['Mobile apps', 'Web platforms', 'AI integration', 'POS systems'].map(domain => (
                  <span
                    key={domain}
                    className="text-sm"
                    style={{ color: 'var(--muted)' }}
                  >
                    {domain}
                  </span>
                ))}
              </div>
              <p className="text-xs mt-2.5" style={{ color: 'var(--muted)' }}>
                What we build · Based in Malaysia
              </p>
            </div>
          </div>

          {/* Right — visual */}
          <div className="hidden lg:flex items-center justify-center">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

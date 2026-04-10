'use client'

import React from 'react';

const MINT = '#5AFAC5';

const HeroVisual = () => (
  <div
    className="relative"
    style={{ width: '380px' }}
    aria-hidden="true"
  >
    {/* Terminal dashboard panel */}
    <div
      style={{
        border: '1px solid #1F1F1F',
        background: '#0A0A0A',
        overflow: 'hidden',
      }}
    >
      {/* Titlebar */}
      <div
        style={{
          padding: '10px 16px',
          borderBottom: '1px solid #1F1F1F',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#2A2A2A' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#2A2A2A' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: MINT }} />
        </div>
        <span
          style={{
            fontSize: 10,
            color: '#444',
            fontFamily: 'monospace',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          studio.status
        </span>
      </div>

      {/* Stats grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {[
          { value: '10+', label: 'shipped' },
          { value: '2023', label: 'founded' },
          { value: '3+', label: 'countries' },
          { value: '24h', label: 'response' },
        ].map(({ value, label }, i) => (
          <div
            key={label}
            style={{
              padding: '22px 20px',
              borderRight: i % 2 === 0 ? '1px solid #1F1F1F' : 'none',
              borderBottom: i < 2 ? '1px solid #1F1F1F' : 'none',
            }}
          >
            <div
              style={{
                fontSize: 34,
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                fontFamily: 'var(--font-figtree)',
              }}
            >
              {value}
            </div>
            <div
              style={{
                fontSize: 10,
                color: '#555',
                marginTop: 6,
                textTransform: 'uppercase',
                letterSpacing: '0.07em',
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Recent builds */}
      <div style={{ borderTop: '1px solid #1F1F1F' }}>
        <div
          style={{
            padding: '12px 16px',
            borderBottom: '1px solid #141414',
            fontSize: 10,
            color: '#444',
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
          }}
        >
          Recent builds
        </div>
        {[
          { name: 'Myway', cat: 'Islamic · AI' },
          { name: 'Lumiq', cat: 'Fintech · Web' },
          { name: 'Tour with Nour', cat: 'Tourism' },
        ].map(({ name, cat }) => (
          <div
            key={name}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 16px',
              borderBottom: '1px solid #141414',
            }}
          >
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <span
                style={{
                  fontSize: 13,
                  color: '#FFFFFF',
                  fontWeight: 500,
                  fontFamily: 'var(--font-figtree)',
                }}
              >
                {name}
              </span>
              <span style={{ fontSize: 10, color: '#555' }}>{cat}</span>
            </div>
            <span
              style={{
                fontSize: 9,
                color: MINT,
                background: 'rgba(90,250,197,0.08)',
                padding: '3px 8px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              live
            </span>
          </div>
        ))}
      </div>

      {/* Status footer */}
      <div
        style={{
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          borderTop: '1px solid #1F1F1F',
          background: 'rgba(90,250,197,0.03)',
        }}
      >
        <div
          style={{ width: 6, height: 6, borderRadius: '50%', background: MINT, flexShrink: 0 }}
        />
        <span
          style={{
            fontSize: 11,
            color: MINT,
            fontFamily: 'var(--font-figtree)',
            fontWeight: 500,
          }}
        >
          Accepting new projects
        </span>
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-16">
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse at 70% 40%, rgba(90,250,197,0.04) 0%, transparent 55%)`,
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
                fontSize: 'clamp(2.8rem, 6.5vw, 4.6rem)',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                lineHeight: 1.08,
                color: 'var(--fg)',
              }}
            >
              Software crafted<br />
              <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>pixel</em>
              {' '}by{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>pixel.</em>
            </h1>

            <p
              className="mb-10 max-w-md"
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: 'var(--muted)',
              }}
            >
              We build mobile apps, web platforms, AI tools, and custom systems — for founders and companies who care about the details.
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
                {['Mobile apps', 'Web platforms', 'AI tools', 'Custom systems'].map(domain => (
                  <span
                    key={domain}
                    className="text-sm"
                    style={{ color: 'var(--muted)' }}
                  >
                    {domain}
                  </span>
                ))}
              </div>
              <p className="text-xs mt-2.5" style={{ color: 'var(--subtle)' }}>
                What we build · Based in Singapore
              </p>
            </div>
          </div>

          {/* Right — terminal visual */}
          <div className="hidden lg:flex items-center justify-center">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

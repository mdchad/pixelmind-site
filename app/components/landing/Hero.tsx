'use client'

import React, { useState, useEffect } from 'react';
import AsciiCanvas from './AsciiCanvas';

const Hero = () => {
  const [blinkVisible, setBlinkVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlinkVisible(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <AsciiCanvas />

      <div className="relative z-[2] text-center mix-blend-exclusion">
        <h1 className="lowercase text-[clamp(2rem,5vw,4rem)] mb-4 font-mono font-normal tracking-tight">
          digital<br />architecture<br />lab<span className={blinkVisible ? 'opacity-100' : 'opacity-0'}>_</span>
        </h1>
        <a
          href="#contact"
          onClick={handleScrollToContact}
          className="btn-minimal lowercase inline-block mt-8 font-sans text-sm border border-[var(--dim)] px-8 py-3 bg-transparent text-white transition-all duration-300 relative overflow-hidden hover:text-black hover:border-white"
        >
          initiate_project
        </a>
      </div>
    </section>
  );
};

export default Hero;

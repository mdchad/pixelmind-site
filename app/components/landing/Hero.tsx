'use client'

import React from 'react';
import DitherCanvas from '../DitherCanvas';
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#E6E6E6] p-16 relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-[600px] mb-16">
      <div className="hero-content">
				<Image
					src="/apple-touch-icon.png"
					alt="Pixelmind logo"
					width={30}
					height={30}
				/>
        <span className="mono-label mb-4 block font-mono uppercase text-[0.85rem] tracking-wider">
          Pixelmind Studio
        </span>
        <h1 className="text-5xl md:text-6xl leading-tight mb-8 font-normal tracking-tight text-black">
          Engineered for the Next Intelligence.
        </h1>
        <p className="mb-8 text-lg text-[#444444] leading-relaxed">
          We construct high-performance software solutions, mobile architectures, responsive web ecosystems for enterprise scalability.
        </p>
        <div>
          <a href="#contact" className="btn-primary">
            Initiate Project
          </a>
        </div>
      </div>
      <div className="hero-visual w-full h-full relative overflow-hidden flex items-center justify-center bg-gray-300">
        <DitherCanvas />
      </div>
    </section>
  );
};

export default Hero;

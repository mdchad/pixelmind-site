'use client'

import React, { useState } from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  category: string;
  description: string;
  year: string;
  platform: string;
  image: string;
  link?: string;
}

const ProjectCard = ({ title, category, description, year, platform, image, link }: Project) => {
  const [hovered, setHovered] = useState(false);

  const content = (
    <article
      className="overflow-hidden flex flex-col transition-all duration-300"
      style={{
        background: 'var(--bg-card)',
        border: hovered ? '1px solid #333' : '1px solid var(--border)',
        boxShadow: hovered ? 'var(--shadow-hover)' : 'none',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: '200px', background: '#111' }}
      >
        {image ? (
          <Image
            src={image}
            alt={`${title} — ${category}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500"
            style={{ transform: hovered ? 'scale(1.03)' : 'scale(1)' }}
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: '#111' }}
          >
            <span
              className="text-3xl font-semibold"
              style={{ color: '#2A2A2A', letterSpacing: '-0.04em' }}
            >
              {title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between">
          <span
            className="text-xs font-medium uppercase tracking-wider"
            style={{ color: 'var(--accent)' }}
          >
            {category}
          </span>
          <span
            className="text-xs tabular-nums"
            style={{ color: 'var(--muted)' }}
          >
            {year}
          </span>
        </div>

        <h3
          className="text-lg font-medium"
          style={{ color: 'var(--fg)', letterSpacing: '-0.025em' }}
        >
          {title}
        </h3>

        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: 'var(--muted)' }}
        >
          {description}
        </p>

        <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--border)' }}>
          <span
            className="text-xs px-2.5 py-1"
            style={{ background: '#111', color: '#999', border: '1px solid #2A2A2A' }}
          >
            {platform}
          </span>
          {link && (
            <span
              className="text-xs font-medium flex items-center gap-1"
              style={{
                color: hovered ? 'var(--accent)' : 'var(--muted)',
                transition: 'color 0.2s ease',
              }}
            >
              View project
              <span className="sr-only"> (opens in new tab)</span>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                <path d="M2 9L9 2M9 2H4M9 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          )}
        </div>
      </div>
    </article>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Lumiq',
      category: 'Wealth management',
      platform: 'Web · AI',
      year: '2023',
      description: 'Financial portfolio optimisation platform powered by Monte Carlo simulations and real-time market data. Built for institutional-grade wealth analytics.',
      image: '/projects/lumiq.png',
      link: 'https://www.lumiq.com/',
    },
    {
      title: 'Myway',
      category: 'Islamic app',
      platform: 'Web · Mobile · AI',
      year: '2023',
      description: 'Comprehensive hadith collection with AI-powered Q&A, semantic search, and voiceover narration. Cross-platform with Next.js and Expo.',
      image: '/projects/myway.png',
      link: 'https://www.myway.my',
    },
    {
      title: 'Tebuk',
      category: 'Islamic app',
      platform: 'Mobile',
      year: '2024',
      description: 'Quran memorisation testing app featuring randomised ayat generation for self-assessment. Distraction-free and built for consistency.',
      image: '',
      link: 'https://www.tebuk.app/',
    },
    {
      title: 'Tour with Nour',
      category: 'Tourism',
      platform: 'Web · Mobile',
      year: '2026',
      description: 'Tour guide booking platform for a Singapore-based guide. Features trip selection, transport coordination, and a seamless booking experience.',
      image: '/projects/tour.png',
      link: 'https://thetourwithnour.com',
    },
  ];

  return (
    <section
      id="work"
      className="py-24 md:py-32"
      style={{ background: 'var(--bg-soft)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="section-label mb-4">Selected work</div>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                color: 'var(--fg)',
              }}
            >
              Things we&apos;ve shipped
            </h2>
          </div>
          <p
            className="max-w-xs text-sm"
            style={{ color: 'var(--muted)', lineHeight: 1.7 }}
          >
            A selection of projects across fintech, Islamic apps, and tourism.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

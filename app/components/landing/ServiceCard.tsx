import React from 'react';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, description, tags }) => {
  return (
    <div
      className="group grid grid-cols-[40px_1fr] md:grid-cols-[56px_1fr_20px] gap-x-6 py-10"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      {/* Number */}
      <div className="pt-0.5">
        <span
          style={{
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.06em',
            color: 'var(--accent)',
            fontFamily: 'var(--font-figtree)',
          }}
        >
          {number}
        </span>
      </div>

      {/* Content */}
      <div>
        <h3
          className="mb-3"
          style={{ fontSize: '1.1rem', color: 'var(--fg)' }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: '0.9rem',
            lineHeight: 1.75,
            color: 'var(--muted)',
            maxWidth: '52ch',
          }}
        >
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-5">
          {tags.map(tag => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1"
              style={{
                background: '#111',
                color: '#666',
                border: '1px solid #222',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Trailing arrow — decorative, desktop only, revealed on hover */}
      <div
        className="hidden md:flex items-start pt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        aria-hidden="true"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default ServiceCard;

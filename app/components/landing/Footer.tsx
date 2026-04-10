import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12"
      style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
							<Image
								src="/logo.png"
								alt=""
								width={28}
								height={28}
								className="transition-transform duration-200 group-hover:scale-105 bg-black"
							/>
              <span
                className="text-sm font-semibold tracking-tight"
                style={{ color: 'var(--fg)' }}
              >
                Pixelmind Studio
              </span>
            </div>
            <p className="text-xs" style={{ color: 'var(--subtle)' }}>
              © {currentYear} Pixelmind Studio. All rights reserved.
            </p>
          </div>

          {/* Links — py-3 for 44px touch target on mobile */}
          <nav className="flex items-center gap-1 flex-wrap" aria-label="Footer navigation">
            {[
              { label: 'Services', href: '#services' },
              { label: 'Work', href: '#work' },
              { label: 'Contact', href: '#contact' },
              { label: 'Privacy policy', href: '/privacy' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="footer-link text-xs py-3 px-3 transition-colors duration-200"
                style={{ color: 'var(--subtle)' }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Status */}
          <div className="flex items-center gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: 'var(--color-status-active)' }}
            />
            <span className="text-xs" style={{ color: 'var(--subtle)' }}>
              Accepting new projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

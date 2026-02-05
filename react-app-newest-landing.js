import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const customStyles = {
  root: {
    '--color-bg-primary': '#1F3AFF',
    '--color-bg-secondary': '#2E4CFF',
    '--color-card-bg': '#E6E6E6',
    '--color-text-main': '#000000',
    '--color-text-muted': '#444444',
    '--color-accent': '#000000',
    '--color-accent-text': '#FFFFFF',
    '--radius': '0px',
    '--grid-unit': '8px',
    '--spacing-sm': '16px',
    '--spacing-md': '32px',
    '--spacing-lg': '64px',
    '--container-width': '1200px'
  },
  body: {
    backgroundColor: 'var(--color-bg-primary)',
    backgroundImage: 'radial-gradient(var(--color-bg-secondary) 20%, transparent 20%)',
    backgroundSize: '16px 16px',
    backgroundPosition: '0 0',
    fontFamily: "'Inter', sans-serif",
    color: 'var(--color-text-main)',
    lineHeight: '1.4',
    overflowX: 'hidden',
    width: '1440px',
    height: '1024px',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    WebkitFontSmoothing: 'antialiased'
  }
};

const DitherCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      }
    };

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      const step = 6;

      ctx.fillStyle = '#E6E6E6';
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = '#1F3AFF';

      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          const val1 = Math.sin(x * 0.005 + time) * Math.cos(y * 0.005 - time);
          const val2 = Math.sin((x + y) * 0.003 + time * 0.5);
          const val3 = Math.cos(Math.sqrt(x * x + y * y) * 0.01 - time);

          const intensity = (val1 + val2 + val3 + 1.5) / 3;

          if (intensity > 0.1) {
            const size = Math.min(step, intensity * step * 1.2);
            const ox = (step - size) / 2;
            const oy = (step - size) / 2;
            ctx.fillRect(x + ox, y + oy, size, size);
          }
        }
      }

      time += 0.015;
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }}
    />
  );
};

const Button = ({ children, onClick, href }) => {
  const buttonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--color-accent)',
    color: 'var(--color-accent-text)',
    fontFamily: "'Space Mono', monospace",
    textTransform: 'uppercase',
    fontSize: '0.8rem',
    letterSpacing: '0.1em',
    padding: '16px 24px',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    borderRadius: 'var(--radius)'
  };

  if (href) {
    return (
      <a href={href} style={buttonStyle} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

const ServiceCard = ({ icon, title }) => {
  return (
    <div
      className="service-card"
      style={{
        background: 'var(--color-card-bg)',
        padding: 'var(--spacing-md)',
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <div
        className="service-icon"
        style={{
          fontFamily: "'Space Mono', monospace",
          width: '48px',
          height: '48px',
          background: 'var(--color-text-main)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {icon}
      </div>
      <div>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="container" style={{
      maxWidth: 'var(--container-width)',
      margin: '0 auto',
      padding: 'var(--spacing-lg) var(--spacing-md)'
    }}>
      <section
        className="card hero-card"
        style={{
          background: 'var(--color-card-bg)',
          borderRadius: 'var(--radius)',
          padding: 'var(--spacing-lg)',
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-lg)',
          alignItems: 'center',
          minHeight: '600px',
          marginBottom: 'var(--spacing-lg)'
        }}
      >
        <div className="hero-content">
          <span
            className="mono-label"
            style={{
              fontFamily: "'Space Mono', monospace",
              textTransform: 'uppercase',
              fontSize: '0.85rem',
              letterSpacing: '0.05em',
              marginBottom: 'var(--spacing-sm)',
              display: 'block'
            }}
          >
            Vertex Digital Systems
          </span>
          <h1 style={{
            fontSize: '3.5rem',
            lineHeight: '1.1',
            marginBottom: 'var(--spacing-md)',
            fontWeight: '400',
            letterSpacing: '-0.02em'
          }}>
            Engineered for the Next Intelligence.
          </h1>
          <p style={{
            marginBottom: '2rem',
            fontSize: '1.1rem',
            color: 'var(--color-text-muted)',
            lineHeight: '1.6'
          }}>
            We construct high-performance mobile architectures, responsive web ecosystems, and neural networks for enterprise scalability.
          </p>
          <div>
            <Button href="#">Initiate Project</Button>
          </div>
        </div>
        <div
          className="hero-visual"
          style={{
            width: '100%',
            height: '100%',
            background: '#d4d4d4',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <DitherCanvas />
        </div>
      </section>

      <section>
        <div style={{
          marginBottom: '1rem',
          color: 'white',
          fontFamily: "'Space Mono', monospace"
        }}>
          /// CAPABILITIES
        </div>
        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'var(--spacing-md)'
          }}
        >
          <ServiceCard icon="M" title="Mobile Architecture" />
          <ServiceCard icon="W" title="Web Ecosystems" />
          <ServiceCard icon="P" title="POS & Retail" />
          <ServiceCard icon="AI" title="Neural Solutions" />
        </div>
      </section>

      <footer style={{
        textAlign: 'center',
        color: 'rgba(255,255,255,0.5)',
        fontFamily: "'Space Mono'",
        fontSize: '0.8rem',
        marginTop: '3rem'
      }}>
        VERTEX DIGITAL © 2024. SYSTEM OPERATIONAL.
      </footer>
    </div>
  );
};

const App = () => {
  useEffect(() => {
    const link1 = document.createElement('link');
    link1.rel = 'preconnect';
    link1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://fonts.gstatic.com';
    link2.crossOrigin = 'anonymous';
    document.head.appendChild(link2);

    const link3 = document.createElement('link');
    link3.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap';
    link3.rel = 'stylesheet';
    document.head.appendChild(link3);

    const style = document.createElement('style');
    style.textContent = `
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
      }
      
      h1, h2, h3, h4 {
        font-weight: 400;
        letter-spacing: -0.02em;
      }
      
      p {
        font-size: 1.1rem;
        color: var(--color-text-muted);
        line-height: 1.6;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
      document.head.removeChild(link3);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Router basename="/">
      <div style={{ ...customStyles.root, ...customStyles.body }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
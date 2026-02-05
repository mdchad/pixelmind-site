import React, { useState, useEffect, useRef } from 'react';

const customStyles = {
  root: {
    '--bg': '#000000',
    '--fg': '#ffffff',
    '--dim': '#444444',
    '--accent': '#ffffff',
    '--font-main': "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    '--font-mono': "'Space Mono', 'Courier New', monospace"
  }
};

const AsciiCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let A = 0, B = 0;
    let animationFrameId;

    const renderAscii = () => {
      const chars = ".,-~:;=!*#$@";
      let b = [];
      let z = [];
      const width = 80;
      const height = 40;

      for(let k = 0; k < width*height; k++) {
        b[k] = " ";
        z[k] = 0;
      }

      for(let j=0; j < 6.28; j += 0.07) {
        for(let i=0; i < 6.28; i += 0.02) {
          let c = Math.sin(i);
          let d = Math.cos(j);
          let e = Math.sin(A);
          let f = Math.sin(j);
          let g = Math.cos(A);
          let h = d + 2;
          let D = 1 / (c * h * e + f * g + 5);
          let l = Math.cos(i);
          let m = Math.cos(B);
          let n = Math.sin(B);
          let t = c * h * g - f * e;
          
          let x = 0 | (40 + 30 * D * (l * h * m - t * n));
          let y = 0 | (20 + 15 * D * (l * h * n + t * m));
          let o = x + width * y;
          
          let N = 0 | (8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n));
          
          if(y < height && y >= 0 && x >= 0 && x < width && D > z[o]) {
            z[o] = D;
            b[o] = chars[N > 0 ? N : 0];
          }
        }
      }
      
      let output = "";
      for(let i=0; i<width*height; i++) {
        output += (i % width === 0) ? "\n" : b[i];
      }
      
      if (canvasRef.current) {
        canvasRef.current.innerText = output;
      }
      
      A += 0.04;
      B += 0.02;
      
      animationFrameId = requestAnimationFrame(renderAscii);
    };

    renderAscii();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
        opacity: 0.8,
        fontFamily: "var(--font-mono)",
        fontSize: '10px',
        lineHeight: '10px',
        whiteSpace: 'pre',
        textAlign: 'center',
        color: 'var(--fg)',
        userSelect: 'none'
      }}
    />
  );
};

const Header = () => {
  const [time, setTime] = useState('14:10');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      padding: '1.5rem 2rem',
      zIndex: 100,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      mixBlendMode: 'difference',
      pointerEvents: 'none'
    }} className="mono lowercase">
      <div style={{ pointerEvents: 'auto' }} className="hud-element">
        <span>{time}</span>
        <span style={{ marginLeft: '1rem', color: '#444' }}>system_ready</span>
      </div>
      <div style={{ pointerEvents: 'auto' }} className="hud-element">
        <span>menu</span>
      </div>
    </header>
  );
};

const Hero = () => {
  const [blinkVisible, setBlinkVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlinkVisible(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      borderBottom: 'none'
    }} className="hero">
      <AsciiCanvas />
      
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        mixBlendMode: 'exclusion'
      }} className="hero-content">
        <h1 className="lowercase" style={{
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          marginBottom: '1rem',
          fontFamily: 'var(--font-mono)',
          fontWeight: 400,
          letterSpacing: '-0.02em'
        }}>
          digital<br />architecture<br />lab<span style={{ opacity: blinkVisible ? 1 : 0 }}>_</span>
        </h1>
        <a href="#contact" onClick={handleScrollToContact} className="btn-minimal lowercase" style={{
          display: 'inline-block',
          marginTop: '2rem',
          fontFamily: 'var(--font-main)',
          fontSize: '0.9rem',
          border: '1px solid var(--dim)',
          padding: '0.8rem 2rem',
          background: 'transparent',
          color: 'var(--fg)',
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden'
        }}>initiate_project</a>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        background: isHovered ? '#050505' : 'var(--bg)',
        padding: '4rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '300px',
        transition: 'background 0.3s'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="service-card"
    >
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '1.5rem',
        marginBottom: '1rem',
        whiteSpace: 'pre'
      }} className="service-icon">
        {icon}
      </div>
      <div>
        <h3 className="service-title mono" style={{
          fontSize: '1.1rem',
          marginBottom: '0.5rem',
          textTransform: 'lowercase'
        }}>{title}</h3>
        <p className="lowercase" style={{ color: '#888' }}>{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: `+-------+
|  APP  |
|       |
+   o   +`,
      title: 'mobile_engineering',
      description: 'native ios / android solutions tailored for high-performance environments.'
    },
    {
      icon: `/ > _
root@web`,
      title: 'web_platforms',
      description: 'scalable react / node architectures. full-stack deployment.'
    },
    {
      icon: `[ $$$ ]
| === |
-------`,
      title: 'point_of_sale',
      description: 'integrated transaction systems. hardware/software bridging.'
    },
    {
      icon: ` .:-.
( AI )
 \`:-'`,
      title: 'neural_networks',
      description: 'predictive modeling and llm integration services.'
    }
  ];

  return (
    <section id="services" style={{ padding: '8rem 0', position: 'relative', borderBottom: '1px solid #111' }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
        <div style={{ marginBottom: '2rem' }} className="mono lowercase text-dim">
          // modules_loaded
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1px',
          background: '#111',
          borderTop: '1px solid #111'
        }} className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonial = ({ quote, author }) => {
  return (
    <div style={{
      minWidth: '300px',
      fontFamily: 'var(--font-mono)',
      borderLeft: '2px solid #222',
      paddingLeft: '1.5rem'
    }} className="testimonial">
      <p style={{ color: '#ccc', marginBottom: '1rem' }}>{quote}</p>
      <cite style={{
        fontStyle: 'normal',
        fontSize: '0.8rem',
        color: '#666'
      }} className="mono lowercase">{author}</cite>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: '"system architecture deployed ahead of schedule. code quality exceptional. minimal bugs reported in production."',
      author: '— cto, fintech_global'
    },
    {
      quote: '"the ai integration reduced our manual processing load by 40%. highly recommended for enterprise solutions."',
      author: '— director, logistics_inc'
    },
    {
      quote: '"clean code, brutal efficiency. the mobile app performs flawlessly under high load."',
      author: '— product_lead, startup_x'
    }
  ];

  return (
    <section id="testimonials" style={{ padding: '8rem 0', position: 'relative', borderBottom: '1px solid #111' }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
        <div style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between' }} className="mono lowercase">
          <span>// user_logs</span>
          <span>status: verified</span>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '4rem',
          overflowX: 'auto',
          paddingBottom: '2rem',
          scrollbarWidth: 'none'
        }} className="testimonial-track">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Transmission sent! We will respond within 24 hours.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" style={{ padding: '8rem 0', position: 'relative', borderBottom: '1px solid #111' }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem'
        }} className="contact-layout">
          <div>
            <h2 className="lowercase mono" style={{ marginBottom: '1rem', fontWeight: 400, letterSpacing: '-0.02em' }}>uplink</h2>
            <p style={{ maxWidth: '300px', color: '#888' }}>Available for new contracts. Response time &lt; 24h.</p>
          </div>
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            <div style={{ position: 'relative' }} className="input-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                placeholder="client_id"
                required
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: focusedField === 'name' ? '1px solid var(--fg)' : '1px solid #333',
                  color: 'var(--fg)',
                  padding: '1rem 0',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem',
                  borderRadius: 0,
                  outline: 'none'
                }}
              />
              <label htmlFor="name" className="mono" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                fontSize: '0.8rem',
                color: '#666',
                transform: 'translateY(-100%)',
                opacity: focusedField === 'name' ? 1 : 0,
                transition: 'opacity 0.3s'
              }}>name</label>
            </div>
            <div style={{ position: 'relative' }} className="input-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                placeholder="comms_channel"
                required
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: focusedField === 'email' ? '1px solid var(--fg)' : '1px solid #333',
                  color: 'var(--fg)',
                  padding: '1rem 0',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem',
                  borderRadius: 0,
                  outline: 'none'
                }}
              />
              <label htmlFor="email" className="mono" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                fontSize: '0.8rem',
                color: '#666',
                transform: 'translateY(-100%)',
                opacity: focusedField === 'email' ? 1 : 0,
                transition: 'opacity 0.3s'
              }}>email</label>
            </div>
            <div style={{ position: 'relative' }} className="input-group">
              <textarea
                id="msg"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                rows="4"
                placeholder="project_specs"
                required
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: focusedField === 'message' ? '1px solid var(--fg)' : '1px solid #333',
                  color: 'var(--fg)',
                  padding: '1rem 0',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem',
                  borderRadius: 0,
                  outline: 'none',
                  resize: 'vertical'
                }}
              />
              <label htmlFor="msg" className="mono" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                fontSize: '0.8rem',
                color: '#666',
                transform: 'translateY(-100%)',
                opacity: focusedField === 'message' ? 1 : 0,
                transition: 'opacity 0.3s'
              }}>message</label>
            </div>
            <button type="submit" className="btn-minimal lowercase" style={{
              width: 'fit-content',
              marginTop: '1rem',
              display: 'inline-block',
              fontFamily: 'var(--font-main)',
              fontSize: '0.9rem',
              border: '1px solid var(--dim)',
              padding: '0.8rem 2rem',
              background: 'transparent',
              color: 'var(--fg)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer'
            }}>
              send_transmission
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="mono lowercase" style={{
      padding: '4rem 2rem',
      borderTop: '1px solid #111',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }}>
      <div style={{ display: 'flex', gap: '2rem' }} className="footer-links">
        <a href="#" style={{ color: 'var(--fg)', textDecoration: 'none', transition: 'opacity 0.2s' }}>privacy</a>
        <a href="#" style={{ color: 'var(--fg)', textDecoration: 'none', transition: 'opacity 0.2s' }}>terms</a>
      </div>
      <div style={{ textAlign: 'right', color: '#444' }}>
        v.2.0.4<br />
        all systems normal
      </div>
    </footer>
  );
};

const App = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Space+Mono:wght@400;700&display=swap');
      
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        cursor: crosshair;
      }
      
      body {
        background-color: var(--bg);
        color: var(--fg);
        font-family: var(--font-main);
        overflow-x: hidden;
        font-size: 14px;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
      }
      
      .mono { font-family: var(--font-mono); }
      .lowercase { text-transform: lowercase; }
      
      h1, h2, h3 {
        font-weight: 400;
        letter-spacing: -0.02em;
      }
      
      a:hover { opacity: 0.6; }
      
      .btn-minimal::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: var(--fg);
        transition: width 0.3s ease;
        z-index: -1;
      }
      
      .btn-minimal:hover {
        color: var(--bg);
        border-color: var(--fg);
      }
      
      .btn-minimal:hover::before {
        width: 100%;
      }
      
      .testimonial-track::-webkit-scrollbar { display: none; }
      
      input::placeholder, textarea::placeholder {
        color: #444;
        text-transform: lowercase;
      }
      
      @media (max-width: 768px) {
        .contact-layout { grid-template-columns: 1fr !important; }
        .hero h1 { font-size: 2rem !important; }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={customStyles.root}>
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
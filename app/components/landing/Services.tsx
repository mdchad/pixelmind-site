import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      number: '01',
      title: 'Mobile development',
      description: 'Native-quality iOS and Android apps built with React Native and Expo. Performant, polished, and ready to scale from day one.',
      tags: ['React Native', 'Expo', 'iOS', 'Android'],
    },
    {
      number: '02',
      title: 'Web platforms',
      description: 'Full-stack applications from landing pages to complex SaaS products. We work with Next.js, React, and whatever fits the problem.',
      tags: ['Next.js', 'React', 'TypeScript', 'API design'],
    },
    {
      number: '03',
      title: 'AI integration',
      description: 'Practical AI features — semantic search, natural language interfaces, intelligent automation — built into products people actually use.',
      tags: ['LLMs', 'RAG', 'Embeddings', 'OpenAI'],
    },
    {
      number: '04',
      title: 'Systems & integrations',
      description: 'Backend infrastructure, third-party integrations, and automation pipelines that power your product behind the scenes. APIs, microservices, and custom tooling built to last.',
      tags: ['Node.js', 'APIs', 'Microservices', 'Automation'],
    },
  ];

  return (
    <section
      id="services"
      className="py-24 md:py-32"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="section-label mb-4">[ What we do ]</div>
            <h2
              className="max-w-sm"
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                color: 'var(--fg)',
              }}
            >
              Built for every layer of your product
            </h2>
          </div>
          <p
            className="max-w-xs text-sm md:text-right"
            style={{ color: 'var(--muted)', lineHeight: 1.7 }}
          >
            From idea to production, we cover the full stack — design, engineering, and delivery.
          </p>
        </div>

        {/* Editorial list */}
        <div style={{ borderTop: '1px solid var(--border)' }}>
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

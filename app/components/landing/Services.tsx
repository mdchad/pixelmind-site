import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      icon: 'M',
      title: 'Mobile Architecture',
      description: 'Native iOS and Android development with React Native and Expo. Cross-platform solutions optimized for performance, scalability, and seamless user experiences across devices.'
    },
    {
      icon: 'W',
      title: 'Web Ecosystems',
      description: 'Full-stack web applications built with Next.js, React, and modern frameworks. From MVPs to enterprise platforms, we architect scalable solutions with clean code and best practices.'
    },
    {
      icon: 'P',
      title: 'POS & Retail',
      description: 'Integrated point-of-sale systems connecting hardware and software. Real-time transaction processing, inventory management, and seamless payment integrations for modern retail environments.'
    },
    {
      icon: 'AI',
      title: 'AI Systems',
      description: 'AI-powered features including semantic search, natural language processing, and intelligent automation. From chatbots to predictive analytics, we integrate cutting-edge AI into your products.'
    }
  ];

  return (
    <section className="mb-16">
      <div className="mb-4 text-white font-mono">
        /// CAPABILITIES
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;

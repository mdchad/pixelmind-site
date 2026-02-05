import React from 'react';
import ServiceCard from './ServiceCard';

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
 \`:- '`,
      title: 'neural_networks',
      description: 'predictive modeling and llm integration services.'
    }
  ];

  return (
    <section id="services" className="py-32 relative border-b border-[#111]">
      <div className="container max-w-[1400px] mx-auto px-8 w-full">
        <div className="mb-8 font-mono lowercase text-[#444]">
          // modules_loaded
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#111] border-t border-[#111]">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

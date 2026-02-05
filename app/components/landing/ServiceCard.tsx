'use client'

import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-[#E6E6E6] p-8 flex flex-col gap-6">
      <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-mono text-sm">
        {icon}
      </div>
      <div>
        <h3 className="text-black text-xl font-normal mb-5">{title}</h3>
        <span className="text-[#444444] text-sm leading-relaxed">{description}</span>
      </div>
    </div>
  );
};

export default ServiceCard;

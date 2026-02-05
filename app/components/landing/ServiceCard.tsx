'use client'

import React, { useState } from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-black hover:bg-[#050505] p-8 md:p-16 md:py-16 flex flex-col justify-between h-[300px] transition-colors duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="font-mono text-2xl mb-4 whitespace-pre">
        {icon}
      </div>
      <div>
        <h3 className="font-mono lowercase text-lg mb-2">{title}</h3>
        <p className="lowercase text-[#888]">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

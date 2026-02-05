'use client'

import React, { useState, useEffect } from 'react';

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
    <header className="fixed top-0 left-0 w-full p-6 md:px-8 z-[100] flex justify-between items-start mix-blend-difference pointer-events-none">
      <div className="pointer-events-auto font-mono lowercase">
        <span>{time}</span>
        <span className="ml-4 text-[#444]">system_ready</span>
      </div>
      <div className="pointer-events-auto font-mono lowercase">
        <span>menu</span>
      </div>
    </header>
  );
};

export default Header;

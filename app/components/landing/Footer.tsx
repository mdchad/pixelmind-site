import React from 'react';

const Footer = () => {
  return (
    <footer className="font-mono lowercase p-16 px-8 border-t border-[#111] flex justify-between items-end">
      <div className="flex gap-8">
        <a href="#" className="text-white no-underline transition-opacity hover:opacity-60">privacy</a>
        <a href="#" className="text-white no-underline transition-opacity hover:opacity-60">terms</a>
      </div>
      <div className="text-right text-[#444]">
        v.2.0.4<br />
        all systems normal
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author }) => {
  return (
    <div className="min-w-[300px] font-mono border-l-2 border-[#222] pl-6">
      <p className="text-[#ccc] mb-4">{quote}</p>
      <cite className="not-italic text-xs text-[#666] font-mono lowercase">{author}</cite>
    </div>
  );
};

export default Testimonial;

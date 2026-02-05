import React from 'react';
import Testimonial from './Testimonial';

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
    <section id="testimonials" className="py-32 relative border-b border-[#111]">
      <div className="container max-w-[1400px] mx-auto px-8 w-full">
        <div className="mb-16 flex justify-between font-mono lowercase">
          <span>// user_logs</span>
          <span>status: verified</span>
        </div>

        <div className="flex gap-16 overflow-x-auto pb-8 scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

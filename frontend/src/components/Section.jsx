import React from 'react';

const Section = ({ id, title, content, bg = 'bg-white' }) => {
  return (
    <section id={id} className={`py-16 scroll-mt-20 ${bg}`}>
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="mb-6">
          <span className="inline-block w-12 h-1 bg-[#E2231A] mb-3" />
          <h2 className="text-3xl md:text-4xl font-black text-[var(--c-primary)]">{title}</h2>
        </div>
        <p className="text-gray-700 leading-relaxed text-base md:text-lg">{content}</p>
      </div>
    </section>
  );
};

export default Section;

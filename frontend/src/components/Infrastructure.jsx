import React from 'react';

const Infrastructure = ({ course }) => {
  return (
    <section id="estrutura" className="py-16 bg-white scroll-mt-20">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block w-12 h-1 bg-[#E2231A] mb-3" />
            <h2 className="text-3xl md:text-4xl font-black text-[#1E3A8A] mb-4">
              Estrutura Física
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              {course.infrastructure}
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-[#FFD23F] rounded-2xl" />
            <img
              src={course.heroImage}
              alt={`Estrutura ${course.name}`}
              className="relative w-full h-[340px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;

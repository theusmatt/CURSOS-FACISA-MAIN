import React, { useState } from 'react';

const CourseTabs = ({ course }) => {
  const tabs = [
    { id: 'about', label: 'Sobre o curso', content: course.about },
    { id: 'market', label: 'Mercado', content: course.market },
    { id: 'teaching', label: 'Ensino', content: course.teaching },
  ];
  const [active, setActive] = useState('about');
  const activeContent = tabs.find(t => t.id === active)?.content;

  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="flex flex-wrap gap-2 border-b-2 border-gray-100 mb-8">
          {tabs.map((tab) => {
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`px-5 py-3 font-bold text-sm md:text-base transition-colors relative -mb-0.5 ${
                  isActive
                    ? 'text-[#E2231A] border-b-4 border-[#E2231A]'
                    : 'text-gray-500 border-b-4 border-transparent hover:text-[#1E3A8A]'
                }`}
              >
                {tab.label.toUpperCase()}
              </button>
            );
          })}
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl md:text-3xl font-black text-[#1E3A8A] mb-4">
            {tabs.find(t => t.id === active)?.label}
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            {activeContent}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CourseTabs;

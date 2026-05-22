import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Differentials = ({ courseName, items }) => {
  return (
    <section id="diferenciais" className="bg-gradient-to-b from-white to-gray-50 py-16 scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block w-12 h-1 bg-[#E2231A] mb-3" />
          <h2 className="text-3xl md:text-4xl font-black text-[var(--c-primary)]">
            Diferenciais de {courseName} FACISA
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Conheça os pilares que tornam nossa formação uma das mais reconhecidas da Bahia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white border border-gray-100 rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--c-accent)]/20 flex items-center justify-center mb-4 group-hover:bg-[var(--c-accent)] transition-colors">
                <CheckCircle2 className="text-[var(--c-primary)]" size={24} />
              </div>
              <h3 className="font-bold text-lg text-[var(--c-primary)] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;

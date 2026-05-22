import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = ({ items }) => {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[900px] mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block w-12 h-1 bg-[#E2231A] mb-3" />
          <h2 className="text-3xl md:text-4xl font-black text-[var(--c-primary)]">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-3">
          {items.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div key={idx} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[var(--c-primary)] text-base md:text-lg">{item.q}</span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--c-accent)] text-[var(--c-primary)] flex items-center justify-center">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

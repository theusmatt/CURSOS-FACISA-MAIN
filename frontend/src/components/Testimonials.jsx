import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = ({ items }) => {
  return (
    <section id="depoimentos" className="py-16 bg-white scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block w-12 h-1 bg-[#E2231A] mb-3" />
          <h2 className="text-3xl md:text-4xl font-black text-[var(--c-primary)]">Depoimentos</h2>
          <p className="text-gray-600 mt-3">O que nossos alunos e egressos dizem sobre a FACISA.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, idx) => (
            <div key={idx} className="relative bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-xl transition-all">
              <Quote className="absolute top-5 right-5 text-[var(--c-accent)]" size={32} />
              <div className="flex gap-1 text-[var(--c-accent)] mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 italic leading-relaxed mb-5">“{t.quote}”</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-11 h-11 rounded-full bg-[var(--c-primary)] text-white flex items-center justify-center font-bold">
                  {t.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                </div>
                <div>
                  <p className="font-bold text-[var(--c-primary)] text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from 'react';
import { User } from 'lucide-react';

const Faculty = ({ items }) => {
  return (
    <section id="corpo-docente" className="py-16 bg-gray-50 scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block w-12 h-1 bg-[#E2231A] mb-3" />
          <h2 className="text-3xl md:text-4xl font-black text-[var(--c-primary)]">Corpo Docente</h2>
          <p className="text-gray-600 mt-3">Professores qualificados, mestres, doutores e especialistas.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
          {items.map((p, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--c-primary)] to-[var(--c-primary-dark)] flex items-center justify-center flex-shrink-0">
                <User size={26} className="text-[var(--c-accent)]" />
              </div>
              <div>
                <p className="font-bold text-[var(--c-primary)] text-sm leading-snug">{p.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{p.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;

import React from 'react';
import { BookOpen } from 'lucide-react';

const MatrizCurricular = ({ items }) => {
  return (
    <section id="matriz" className="py-16 bg-gray-50 scroll-mt-20">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block w-12 h-1 bg-[#E2231A] mb-3" />
          <h2 className="text-3xl md:text-4xl font-black text-[var(--c-primary)]">Matriz Curricular</h2>
          <p className="text-gray-600 mt-3">Conheça as principais disciplinas distribuídas ao longo do curso.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((sem, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-[var(--c-primary)] text-gray-600 px-5 py-3 flex items-center gap-2">
                <BookOpen size={18} className="text-[var(--c-accent)]" />
                <h3 className="font-bold text-base">{sem.semester}</h3>
              </div>
              <ul className="p-5 space-y-2 text-sm text-gray-700">
                {sem.subjects.map((sub, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E2231A] mt-2 flex-shrink-0" />
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MatrizCurricular;

import React from 'react';
import { ArrowRight, Building2 } from 'lucide-react';

const Coordination = ({ course, photo }) => {
  const primary = course.color;
  // Gradient from course color → darker shade (mix with black) → primary again
  const gradient = `linear-gradient(135deg, ${primary} 0%, color-mix(in srgb, ${primary} 55%, black) 100%)`;

  return (
    <>
      <section
        id="coordenacao"
        className="py-16 text-white scroll-mt-20"
        style={{ background: gradient }}
      >
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block w-12 h-1 bg-[var(--c-accent)] mb-3" />
            <h2 className="text-3xl md:text-4xl font-black">Coordenação do Curso</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-8 items-center">
              <div className="relative mx-auto md:mx-0">
                <div className="absolute -inset-2 bg-[var(--c-accent)] rounded-full opacity-30 blur-md" />
                <img
                  src={photo}
                  alt={course.coordinator.name}
                  className="relative w-44 h-44 md:w-48 md:h-48 rounded-full object-cover border-4 border-[var(--c-accent)] shadow-2xl"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-1">{course.coordinator.name}</h3>
                <p className="text-[var(--c-accent)] text-sm font-semibold mb-3">{course.coordinator.title}</p>
                <p className="text-WHITE text-sm md:text-base leading-relaxed">
                  Equipe acadêmica composta por professores qualificados, com experiência profissional e títulos de mestrado e doutorado, comprometidos com a formação de excelência em {course.name} na FACISA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="inscrever" className="py-16 bg-[var(--c-accent)]">
        <div className="max-w-[1100px] mx-auto px-4 text-center">
          <Building2 className="text-[var(--c-primary)] mx-auto mb-3" size={36} />
          <h2 className="text-3xl md:text-5xl font-black text-[var(--c-primary)] mb-3">
            Aqui o ensino é de verdade!
          </h2>
          <p className="text-[var(--c-primary)]/80 text-lg max-w-2xl mx-auto mb-8">
            Inscreva-se no Vestibular FACISA 2026.2 e construa uma carreira sólida em {course.name}.
          </p>
          <a
            href="https://wa.me/557399908225"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#E2231A] hover:bg-[#c41d15] text-white px-8 py-4 font-bold rounded-md shadow-lg transition-colors"
          >
            INSCRIÇÕES ABERTAS <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
};

export default Coordination;

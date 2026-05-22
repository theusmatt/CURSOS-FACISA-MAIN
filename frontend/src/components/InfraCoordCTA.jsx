import React from 'react';
import { Building2, GraduationCap, ArrowRight } from 'lucide-react';

const InfraCoordCTA = ({ course }) => {
  return (
    <>
      {/* Infrastructure */}
      <section className="py-16 bg-white">
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

      {/* Coordination */}
      <section className="py-16 bg-gradient-to-br from-[#1E3A8A] to-[#172554] text-white">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block w-12 h-1 bg-[#FFD23F] mb-3" />
            <h2 className="text-3xl md:text-4xl font-black">Coordenação do Curso</h2>
          </div>
          <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-[#FFD23F] mx-auto flex items-center justify-center mb-4">
              <GraduationCap className="text-[#1E3A8A]" size={36} />
            </div>
            <h3 className="text-xl font-bold mb-1">{course.coordinator.name}</h3>
            <p className="text-white/70 text-sm">{course.coordinator.title}</p>
            <p className="text-white/80 text-sm mt-4 leading-relaxed">
              Equipe acadêmica composta por professores qualificados, com experiência profissional e títulos de mestrado e doutorado, comprometidos com a formação de excelência.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="inscrever" className="py-16 bg-[#FFD23F]">
        <div className="max-w-[1100px] mx-auto px-4 text-center">
          <Building2 className="text-[#1E3A8A] mx-auto mb-3" size={36} />
          <h2 className="text-3xl md:text-5xl font-black text-[#1E3A8A] mb-3">
            Aqui o ensino é de verdade!
          </h2>
          <p className="text-[#1E3A8A]/80 text-lg max-w-2xl mx-auto mb-8">
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

export default InfraCoordCTA;

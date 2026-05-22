import React from 'react';
import { ArrowRight, Clock, MapPin, Award } from 'lucide-react';

const CourseHero = ({ course }) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={course.heroImage}
          alt={course.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" style={{ background: `linear-gradient(to right, ${course.color}F2 0%, ${course.color}CC 50%, ${course.color}66 100%)` }} />
        {/* Yellow accent stripe */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[var(--c-accent)]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 py-20 md:py-28">
        <div className="max-w-2xl text-white">
          <span className="text-[#ffffff] inline-block bg-[var(--c-accent)] px-3 py-1 text-xs font-bold tracking-wider rounded-sm mb-4 uppercase" >
            FACISA — Vestibular 2026.2
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            {course.name}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
            {course.tagline}
          </p>

          <div className="flex flex-wrap gap-4 mb-8 text-sm">
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Clock size={16} className="text-[var(--c-accent)]" /> {course.duration}
            </span>
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <MapPin size={16} className="text-[var(--c-accent)]" /> {course.modality}
            </span>
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Award size={16} className="text-[var(--c-accent)]" /> Vagas abertas
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#inscrever"
              className="color: white inline-flex items-center gap-2 bg-[var(--c-accent)] hover:bg-yellow-300 px-7 py-3.5 font-bold rounded-md shadow-lg transition-colors"
              //style={{ color: course.color }}
            >
              INSCREVA-SE NO VESTIBULAR <ArrowRight size={18} />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/40 text-white px-7 py-3.5 font-bold rounded-md transition-colors"
            >
              SAIBA MAIS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;

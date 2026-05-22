import React, { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const InfrastructureCarousel = ({ course, images }) => {
  const [index, setIndex] = useState(0);
  const count = images.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  // Auto-play every 5s
  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section id="estrutura" className="py-16 bg-white scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block w-12 h-1 bg-[#E2231A] mb-3" />
            <h2 className="text-3xl md:text-4xl font-black text-[var(--c-primary)] mb-4">
              Estrutura Física
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              {course.infrastructure}
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-[var(--c-accent)] rounded-2xl" />
            <div className="relative w-full h-[380px] rounded-2xl overflow-hidden shadow-xl bg-gray-100">
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${course.name} - imagem ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    i === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}

              {/* Controls */}
              <button
                onClick={prev}
                aria-label="Anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[var(--c-primary)] flex items-center justify-center shadow-lg transition-colors z-10"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                aria-label="Próxima"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[var(--c-primary)] flex items-center justify-center shadow-lg transition-colors z-10"
              >
                <ChevronRight size={20} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Ir para imagem ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? 'w-8 bg-[var(--c-accent)]' : 'w-2 bg-white/70 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureCarousel;

import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, GraduationCap, Menu, X } from 'lucide-react';
import { COURSE_LIST } from '../data/courses';

const SECTIONS = [
  { id: 'diferenciais', label: 'Diferenciais' },
  { id: 'sobre', label: 'Sobre o Curso' },
  { id: 'mercado', label: 'Mercado' },
  { id: 'ensino', label: 'Ensino' },
  { id: 'matriz', label: 'Matriz Curricular' },
  { id: 'estrutura', label: 'Estrutura' },
  { id: 'depoimentos', label: 'Depoimentos' },
  { id: 'coordenacao', label: 'Coordenação' },
];

const SubMenu = ({ courseName, color = '#1E3A8A' }) => {
  const [active, setActive] = useState('diferenciais');
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Highlight active section while scrolling
  useEffect(() => {
    const onScroll = () => {
      const offsets = SECTIONS.map((s) => {
        const el = document.getElementById(s.id);
        if (!el) return { id: s.id, top: Infinity };
        const top = el.getBoundingClientRect().top;
        return { id: s.id, top };
      });
      // pick the section whose top is closest to (and above) ~140px (under sticky bar)
      const threshold = 160;
      const visible = offsets.filter((o) => o.top <= threshold);
      const current = visible.length ? visible[visible.length - 1].id : 'diferenciais';
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCoursesOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: 'smooth' });
    setMobileOpen(false);
  };

  const goToCourse = (slug) => {
    setCoursesOpen(false);
    setMobileOpen(false);
    navigate(`/curso/${slug}`);
  };

  return (
    <nav className="sticky top-0 z-40 text-white shadow-md" style={{ backgroundColor: color }}>
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Desktop */}
        <div className="hidden lg:flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 py-3 mr-2 flex-shrink-0">
            <GraduationCap size={18} className="text-[#FFD23F]" />
            <span className="font-bold text-xs xl:text-sm tracking-wide whitespace-nowrap">{courseName}</span>
          </div>
          <ul className="flex items-center flex-1 justify-end min-w-0">
            {SECTIONS.map((s) => {
              const isActive = active === s.id;
              return (
                <li key={s.id}>
                  <button
                    onClick={() => scrollToId(s.id)}
                    className={`relative whitespace-nowrap px-3 xl:px-4 py-4 text-xs xl:text-sm font-semibold tracking-wide transition-colors ${
                      isActive ? 'text-[#FFD23F]' : 'text-white/85 hover:text-white'
                    }`}
                  >
                    {s.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#FFD23F] rounded-t" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
          {/* Cursos dropdown - placed OUTSIDE ul so it's not clipped */}
          <div className="relative flex-shrink-0 ml-1" ref={dropdownRef}>
            <button
              onClick={() => setCoursesOpen((v) => !v)}
              className={`flex items-center gap-1 px-4 py-2 rounded-md text-xs xl:text-sm font-bold tracking-wide transition-colors ${
                coursesOpen ? 'bg-[#FFD23F] text-[#1E3A8A]' : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              CURSOS <ChevronDown size={14} className={`transition-transform ${coursesOpen ? 'rotate-180' : ''}`} />
            </button>
            {coursesOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white text-[#1E3A8A] rounded-md shadow-2xl min-w-[240px] overflow-hidden border border-gray-100 z-50">
                {COURSE_LIST.map((c) => {
                  const isCurrent = location.pathname === `/curso/${c.slug}`;
                  return (
                      <button
                        key={c.slug}
                        onClick={() => goToCourse(c.slug)}
                        className={`w-full text-left px-4 py-2.5 text-sm font-semibold border-b border-gray-100 last:border-0 transition-colors ${
                          isCurrent ? 'text-white' : 'hover:bg-[#FFD23F]/40'
                        }`}
                        style={isCurrent ? { backgroundColor: color } : {}}
                      >
                      {c.name}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <GraduationCap size={18} className="text-[#FFD23F]" />
            <span className="font-bold text-sm">{courseName}</span>
          </div>
          <button onClick={() => setMobileOpen((v) => !v)} aria-label="menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="lg:hidden pb-3 max-h-[70vh] overflow-y-auto">
            <ul className="flex flex-col gap-1 pb-2 border-b border-white/15">
              {SECTIONS.map((s) => {
                const isActive = active === s.id;
                return (
                  <li key={s.id}>
                    <button
                      onClick={() => scrollToId(s.id)}
                      className={`block w-full text-left px-3 py-2 rounded text-sm font-semibold ${
                        isActive ? 'bg-[#FFD23F] text-[#1E3A8A]' : 'hover:bg-white/10'
                      }`}
                    >
                      {s.label}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="pt-3">
              <p className="px-3 text-xs font-bold text-[#FFD23F] tracking-widest mb-2">CURSOS</p>
              <ul className="flex flex-col gap-1">
                {COURSE_LIST.map((c) => {
                  const isCurrent = location.pathname === `/curso/${c.slug}`;
                  return (
                    <li key={c.slug}>
                      <button
                        onClick={() => goToCourse(c.slug)}
                        className={`block w-full text-left px-3 py-2 rounded text-sm ${
                          isCurrent ? 'bg-white/15 font-semibold' : 'hover:bg-white/10'
                        }`}
                      >
                        {c.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default SubMenu;

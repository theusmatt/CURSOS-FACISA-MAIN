import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle, Menu, X, ChevronDown } from 'lucide-react';
import { COURSE_LIST } from '../data/courses';

const FacisaLogo = () => (
  <div className="flex items-center gap-2">
    <div className="bg-white rounded-md px-4 py-2">
      <div className="flex flex-col items-center leading-none">
        <svg viewBox="0 0 60 44" className="w-10 h-8 text-[#E2231A]" fill="currentColor" aria-hidden="true">
          {/* Stylized arch/portico like FACISA logo */}
          <path d="M30 2 L58 32 L52 32 L52 42 L46 42 L46 26 L40 26 L40 42 L34 42 L34 18 L26 18 L26 42 L20 42 L20 26 L14 26 L14 42 L8 42 L8 32 L2 32 Z" />
        </svg>
        <span className="text-[#E2231A] font-black text-lg tracking-tight mt-0.5 leading-none">FACISA</span>
      </div>
    </div>
  </div>
);

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'INÍCIO', href: '#' },
    { label: 'VESTIBULAR', href: '#' },
    { label: 'FACISA', href: '#' },
    { label: 'ACADÊMICO', href: '#' },
    { label: 'BIBLIOTECA', href: '#' },
  ];

  return (
    <header className="w-full bg-white">
      {/* Top bar with logo and social */}
      <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/curso/medicina-veterinaria" className="flex items-center">
          <FacisaLogo />
        </Link>
        <div className="flex items-center gap-3">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
            <Facebook size={20} fill="currentColor" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
            <Instagram size={20} />
          </a>
          <a href="https://wa.me/557399908225" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
            <MessageCircle size={20} />
          </a>
        </div>
      </div>

      {/* Red navigation bar */}
      <nav className="bg-[#E2231A] text-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="hidden lg:flex items-center justify-between">
            <ul className="flex items-center divide-x divide-white/30">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="block px-6 py-4 font-bold text-sm tracking-wide hover:bg-[#c41d15] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
              {/* Courses dropdown */}
              <li className="relative">
                <button
                  onMouseEnter={() => setCoursesOpen(true)}
                  onMouseLeave={() => setCoursesOpen(false)}
                  onClick={() => setCoursesOpen(!coursesOpen)}
                  className="flex items-center gap-1 px-6 py-4 font-bold text-sm tracking-wide hover:bg-[#c41d15] transition-colors w-full"
                >
                  CURSOS <ChevronDown size={16} />
                </button>
                {coursesOpen && (
                  <div
                    onMouseEnter={() => setCoursesOpen(true)}
                    onMouseLeave={() => setCoursesOpen(false)}
                    className="absolute left-0 top-full bg-white text-[#1E3A8A] shadow-lg z-50 min-w-[260px] border-t-2 border-[#FFD23F]"
                  >
                    {COURSE_LIST.map((c) => {
                      const active = location.pathname === `/curso/${c.slug}`;
                      return (
                        <Link
                          key={c.slug}
                          to={`/curso/${c.slug}`}
                          className={`block px-5 py-3 text-sm font-semibold border-b border-gray-100 hover:bg-[#FFD23F] hover:text-[#1E3A8A] transition-colors ${active ? 'bg-[#FFD23F]' : ''}`}
                          onClick={() => setCoursesOpen(false)}
                        >
                          {c.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </li>
              <li>
                <a href="#" className="block px-6 py-4 font-bold text-sm tracking-wide hover:bg-[#c41d15] transition-colors">INTRANET</a>
              </li>
              <li>
                <a href="#" className="block px-6 py-4 font-bold text-sm tracking-wide hover:bg-[#c41d15] transition-colors">CONTATO</a>
              </li>
            </ul>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center justify-between py-3">
            <span className="font-bold tracking-wide">MENU</span>
            <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {mobileOpen && (
            <div className="lg:hidden pb-3">
              <ul className="flex flex-col gap-1">
                {navItems.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href} className="block px-3 py-2 font-bold text-sm hover:bg-[#c41d15] rounded">{item.label}</a>
                  </li>
                ))}
                <li className="px-3 py-2 font-bold text-sm border-t border-white/30 mt-2 pt-3">CURSOS</li>
                {COURSE_LIST.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to={`/curso/${c.slug}`}
                      className="block px-6 py-2 text-sm hover:bg-[#c41d15] rounded"
                      onClick={() => setMobileOpen(false)}
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

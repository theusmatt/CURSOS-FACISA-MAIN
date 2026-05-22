import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { COURSE_LIST } from '../data/courses';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-[1400px] mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="bg-white inline-block rounded-md px-4 py-3 mb-4">
            <div className="flex flex-col items-center leading-none">
              <svg viewBox="0 0 60 44" className="w-10 h-8 text-[#E2231A]" fill="currentColor" aria-hidden="true">
                <path d="M30 2 L58 32 L52 32 L52 42 L46 42 L46 26 L40 26 L40 42 L34 42 L34 18 L26 18 L26 42 L20 42 L20 26 L14 26 L14 42 L8 42 L8 32 L2 32 Z" />
              </svg>
              <span className="text-[#E2231A] font-black text-lg tracking-tight mt-0.5 leading-none">FACISA</span>
            </div>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Faculdade do Sul da Bahia — Ensino superior 100% presencial, formando profissionais para o mercado.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-90 transition-opacity">
              <Facebook size={18} fill="currentColor" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-90 transition-opacity">
              <Instagram size={18} />
            </a>
            <a href="https://wa.me/557399908225" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-90 transition-opacity">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-[#FFD23F] mb-4">CURSOS</h4>
          <ul className="space-y-2 text-sm">
            {COURSE_LIST.slice(0, 5).map(c => (
              <li key={c.slug}>
                <Link to={`/curso/${c.slug}`} className="text-gray-300 hover:text-white transition-colors">{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-[#FFD23F] mb-4">MAIS CURSOS</h4>
          <ul className="space-y-2 text-sm">
            {COURSE_LIST.slice(5).map(c => (
              <li key={c.slug}>
                <Link to={`/curso/${c.slug}`} className="text-gray-300 hover:text-white transition-colors">{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-[#FFD23F] mb-4">CONTATO</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2"><Phone size={16} className="text-[#FFD23F] mt-0.5 flex-shrink-0" /> (73) 3294-3690</li>
            <li className="flex items-start gap-2"><MessageCircle size={16} className="text-[#FFD23F] mt-0.5 flex-shrink-0" /> (73) 99908-2250</li>
            <li className="flex items-start gap-2"><Mail size={16} className="text-[#FFD23F] mt-0.5 flex-shrink-0" /> contato@facisaba.edu.br</li>
            <li className="flex items-start gap-2"><MapPin size={16} className="text-[#FFD23F] mt-0.5 flex-shrink-0" /> Itamaraju — Bahia</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 py-4 text-xs text-gray-400 flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} FACISA — Faculdade do Sul da Bahia. Todos os direitos reservados.</span>
          <span>facisaba.edu.br</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

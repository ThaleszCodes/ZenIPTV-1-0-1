import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { Rocket } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800/50 mt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Rocket className="text-emerald-400" size={20} />
            <span className="text-lg font-bold">ZenIPTV</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#planos" className="text-neutral-400 hover:text-white transition-colors">Planos</a>
            <a href="#catalogo" className="text-neutral-400 hover:text-white transition-colors">Catálogo</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">Suporte</a>
          </div>
          
          <p className="text-neutral-500 text-sm">
            &copy; {currentYear} ZenIPTV. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
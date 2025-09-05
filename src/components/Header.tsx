import React, { useState } from 'react';
import { Rocket, X, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { WHATSAPP_LINK } from '../constants';

const navLinks = [
  { name: 'Planos', href: '#planos' },
  { name: 'Catálogo', href: '#catalogo' },
  { name: 'Dúvidas', href: '#duvidas' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/50 backdrop-blur-lg border-b border-neutral-800/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2" aria-label="ZenIPTV Home">
          <Rocket className="text-emerald-400" size={24} />
          <span className="text-xl font-bold">ZenIPTV</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-neutral-300 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-2 px-4 rounded-lg transition-transform hover:scale-105"
        >
          Falar no WhatsApp
        </a>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-neutral-950/80 backdrop-blur-lg pb-4"
        >
          <nav className="flex flex-col items-center gap-4 pt-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-neutral-300 hover:text-white transition-colors text-lg">
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-2 px-6 rounded-lg transition-transform hover:scale-105 mt-2"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;

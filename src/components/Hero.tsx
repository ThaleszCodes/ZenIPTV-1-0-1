import React from 'react';
import { motion } from 'framer-motion';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="container mx-auto px-6 py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            variants={itemVariants}
          >
            Seu entretenimento <br />
            <span className="bg-gradient-to-r from-emerald-400 to-violet-500 bg-clip-text text-transparent">
              sem limites
            </span>
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg text-neutral-300 max-w-lg mx-auto md:mx-0"
            variants={itemVariants}
          >
            +80 mil conteúdos, atualizados diariamente. Todas as plataformas em um só lugar. Estabilidade, qualidade e suporte dedicado.
          </motion.p>
          <motion.div 
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-black font-bold py-3 px-8 rounded-lg text-lg transition-transform hover:scale-105 shadow-lg shadow-emerald-500/20"
            >
              Quero assinar
            </a>
            <a
              href="#planos"
              className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all"
            >
              Ver planos
            </a>
          </motion.div>
        </motion.div>
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="aspect-video bg-neutral-900 rounded-2xl shadow-2xl shadow-violet-500/20 overflow-hidden relative">
             <img src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?q=80&w=1280&auto=format&fit=crop" alt="Poltronas de cinema vazias com tela ao fundo" className="w-full h-full object-cover"/>
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

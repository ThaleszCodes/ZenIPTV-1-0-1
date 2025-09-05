import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Tv2, Film, Trophy } from 'lucide-react';

const catalogData = [
    {
        icon: <PlayCircle size={32} className="text-emerald-400" />,
        title: 'Plataformas de Streaming',
        items: ['Netflix', 'Prime Video', 'Globoplay+', 'Disney+', 'HBO Max', 'Paramount+', 'Star+', 'Apple TV+'],
    },
    {
        icon: <Tv2 size={32} className="text-emerald-400" />,
        title: 'Canais Ao Vivo',
        items: ['Globo', 'SBT', 'Record', 'Band', 'SporTV', 'ESPN', 'Premiere', 'Discovery', 'Warner Channel'],
    },
    {
        icon: <Film size={32} className="text-emerald-400" />,
        title: 'Filmes e Séries',
        items: ['Telecine', 'HBO Filmes', 'Megapix', 'Lançamentos', 'Clássicos', 'Produções Originais', 'Animes', 'Doramas'],
    },
    {
        icon: <Trophy size={32} className="text-emerald-400" />,
        title: 'Esportes',
        items: ['Premiere', 'Combate', 'SporTV', 'ESPN', 'DAZN', 'NBA League Pass', 'Fórmula 1 TV', 'UFC Fight Pass'],
    }
];

const Catalog: React.FC = () => {
  return (
    <section id="catalogo" className="py-20 bg-neutral-950/50">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Todo o universo do entretenimento, <br /> em um só lugar
          </h2>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
            Explore catálogos completos das principais plataformas, canais ao vivo, esportes, filmes e séries. Tudo atualizado diariamente.
          </p>
        </motion.div>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {catalogData.map((category, index) => (
            <motion.div
              key={index}
              className="bg-neutral-900/50 border border-neutral-800/60 rounded-xl p-6 transition-all hover:border-emerald-400/50 hover:bg-neutral-900"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-neutral-800/50 p-3 rounded-lg">
                    {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-neutral-400 text-sm bg-neutral-800/40 px-3 py-1 rounded-md">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;

import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, MonitorSmartphone, Rocket, Shield } from 'lucide-react';

const featuresData = [
  {
    icon: <PlayCircle size={32} className="text-emerald-400" />,
    title: '+80 mil conteúdos',
    description: 'Atualizações diárias com filmes, séries e canais ao vivo.',
  },
  {
    icon: <MonitorSmartphone size={32} className="text-emerald-400" />,
    title: 'Funciona em tudo',
    description: 'TV, Smart Box, celular, tablet e computador.',
  },
  {
    icon: <Rocket size={32} className="text-emerald-400" />,
    title: 'Ativação instantânea',
    description: 'Comece a assistir em minutos, sem burocracia.',
  },
  {
    icon: <Shield size={32} className="text-emerald-400" />,
    title: 'Suporte dedicado',
    description: 'Atendimento ágil e acompanhamento pós-venda.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
    }
  },
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-neutral-950/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-neutral-900/50 border border-neutral-800/60 rounded-xl p-6 flex flex-col items-start gap-4 transition-all hover:border-emerald-400/50 hover:bg-neutral-900"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <div className="bg-neutral-800/50 p-3 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
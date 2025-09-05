import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
    {
      question: 'Como funciona a ativação?',
      answer: 'Você faz o pedido no WhatsApp e recebe seu login em minutos. Enviamos um passo a passo simples para começar.',
    },
    {
      question: 'Posso assistir em qualquer dispositivo?',
      answer: 'Sim! Smart TVs, TV Box, Android, iOS, PCs e tablets são compatíveis.',
    },
    {
      question: 'O que tem no catálogo?',
      answer: 'Filmes, séries, canais ao vivo, esportes e os catálogos das principais plataformas, sempre atualizados.',
    },
    {
      question: 'E o suporte?',
      answer: 'Atendimento rápido e cordial, com acompanhamento para garantir a melhor experiência.',
    },
];

const AccordionItem: React.FC<{
  item: typeof faqData[0];
  isOpen: boolean;
  onClick: () => void;
}> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-neutral-800 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-neutral-300">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="duvidas" className="py-20 bg-neutral-950/50">
            <div className="container mx-auto px-6 max-w-3xl">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Dúvidas Frequentes
                    </h2>
                    <p className="mt-4 text-lg text-neutral-400">
                        Encontre respostas para as perguntas mais comuns.
                    </p>
                </motion.div>

                <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-2 md:p-4">
                    {faqData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
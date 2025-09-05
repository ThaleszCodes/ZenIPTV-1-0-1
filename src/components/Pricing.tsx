import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const plans = [
    {
      name: '1 Tela',
      prices: {
          monthly: '20',
          quarterly: '70',
      },
      features: ['Qualidade HD e FHD', 'Acesso a todo o catálogo', 'Suporte Básico'],
      popular: false,
    },
    {
      name: '2 Telas',
      prices: {
        monthly: '25',
        quarterly: '75',
      },
      features: ['Qualidade até 4K', 'Acesso a todo o catálogo', 'Suporte Prioritário'],
      popular: true,
    },
];

const PricingCard: React.FC<{ plan: typeof plans[0] }> = ({ plan }) => {
    return (
        <div className={`relative bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 flex flex-col h-full ${plan.popular ? 'border-violet-500' : ''}`}>
            {plan.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                    MAIS POPULAR
                </div>
            )}
            <h3 className="text-2xl font-bold">{plan.name}</h3>
            
            <div className="mt-6">
                {'lifetime' in plan.prices ? (
                    <div>
                        <span className="text-5xl font-extrabold">R${(plan.prices as { lifetime: string }).lifetime}</span>
                        <p className="text-neutral-400 mt-1">Pagamento único</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <span className="text-3xl font-bold">R${(plan.prices as { monthly: string }).monthly}</span>
                            <p className="text-neutral-400 text-sm">/ 30 dias</p>
                        </div>
                         <div>
                            <span className="text-3xl font-bold">R${(plan.prices as { quarterly: string }).quarterly}</span>
                            <p className="text-neutral-400 text-sm">/ 90 dias</p>
                        </div>
                    </div>
                )}
            </div>

            <ul className="mt-8 space-y-4 text-neutral-300 flex-grow">
                {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                        <CheckCircle size={20} className="text-emerald-400" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={`mt-8 w-full text-center font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105 ${plan.popular ? 'bg-violet-600 hover:bg-violet-700 text-white' : 'bg-emerald-500 hover:bg-emerald-600 text-black'}`}>
                Assinar Agora
            </a>
        </div>
    )
}

const Pricing: React.FC = () => {
    return (
        <section id="planos" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Planos que cabem no seu bolso
                    </h2>
                    <p className="mt-4 text-lg text-neutral-400">
                        Escolha o plano ideal para você e comece a assistir agora mesmo.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {plans.map((plan, index) => (
                         <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <PricingCard plan={plan} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;

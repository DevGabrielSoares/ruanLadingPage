"use client";

import { Gavel, Landmark, Users, Scale, HeartHandshake, ShieldCheck } from 'lucide-react';
import CTAButton from './CTAButton';
import { motion, Variants } from 'framer-motion';

const areas = [
  { icon: <Gavel size={32} />, title: 'Direito Criminal', description: 'Defesa completa em processos criminais para proteger os direitos dos clientes.'},
  { icon: <Landmark size={32} />, title: 'Direito Civil', description: 'Consultoria e solução de conflitos em contratos e disputas familiares.'},
  { icon: <ShieldCheck size={32} />, title: 'Direito do Consumidor', description: 'Defesa dos direitos do consumidor em questões de produtos, serviços e práticas comerciais.'},
  { icon: <Scale size={32} />, title: 'Direito do Trabalho', description: 'Representação em disputas trabalhistas e prevenção de conflitos.'},
  { icon: <Users size={32} />, title: 'Direito de Família e Sucessões', description: 'Assistência em divórcios, guarda de filhos e sucessões.'},
  { icon: <HeartHandshake size={32} />, title: 'Direito Previdenciário', description: 'Assessoria para concessão de aposentadorias, pensões e benefícios junto ao INSS.'},
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      // A linha 'ease: "easeOut"' foi REMOVIDA daqui para corrigir o erro
    }
  },
};

export default function PracticeAreas() {
  return (
    <section id="areas" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nossas principais áreas de atuação
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-400 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Saiba como nós podemos te ajudar
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {areas.map((area) => (
            <motion.div 
              key={area.title} 
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.1)" 
              }}
            >
              <div className="text-blue-600 mb-4">{area.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{area.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{area.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16">
          <CTAButton text="Solicitar atendimento" />
        </div>
      </div>
    </section>
  );
}
"use client";

import { Handshake, MessageCircle, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

const diferenciais = [
  {
    icon: <Handshake size={32} />,
    title: 'Atendimento Personalizado',
    description: 'Cada cliente recebe atenção individualizada, garantindo que suas necessidades específicas sejam o foco da nossa estratégia.',
  },
  {
    icon: <MessageCircle size={32} />,
    title: 'Comunicação Transparente',
    description: 'Mantemos você informado sobre cada etapa do seu caso, com clareza e honestidade, para que você sempre saiba o que esperar.',
  },
  {
    icon: <BrainCircuit size={32} />,
    title: 'Experiência e Inovação',
    description: 'Combinamos anos de experiência jurídica com o uso de tecnologia para otimizar processos e alcançar os melhores resultados possíveis.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nossos Diferenciais
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-400 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Entenda por que somos a escolha certa para você
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {diferenciais.map((item) => (
            <motion.div 
              key={item.title} 
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.1)" 
              }}
            >
              <div className="text-blue-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
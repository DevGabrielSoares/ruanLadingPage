"use client";

import Image from 'next/image';
import { Scale, MessageCircle, UserCheck } from 'lucide-react';
import { motion, Variants } from 'framer-motion'; // Importe 'Variants' aqui

// Adicione o tipo 'Variants' aqui
const listContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// E adicione o tipo 'Variants' aqui também
const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

export default function AboutSection(){
  return (
    <div id="sobre" className="bg-gray-50 dark:bg-gray-900">
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          <div className="lg:pr-8 lg:pt-4">
            <motion.div 
              className="lg:max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-base font-semibold leading-7 text-blue-600">Quem Somos</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Compromisso com a Justiça e a Defesa dos Seus Direitos
              </p>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                Fundado por Ruan Carlos, nosso escritório nasceu da paixão pelo direito e do desejo de oferecer uma advocacia moderna, acessível e focada em resultados. Acreditamos que cada cliente merece atenção individualizada e estratégias jurídicas pensadas para suas necessidades específicas.
              </p>
            </motion.div>
            
            <motion.dl 
              className="mt-10 max-w-xl space-y-8 text-base leading-7 text-slate-600 dark:text-slate-400 lg:max-w-none"
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="relative pl-9" variants={listItemVariants}>
                <dt className="inline font-semibold text-slate-900 dark:text-white">
                  <Scale className="absolute left-1 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                  Ética e Transparência.
                </dt>
                <dd className="inline"> Mantemos você informado sobre cada etapa do seu caso, com clareza e honestidade, para que você sempre saiba o que esperar.</dd>
              </motion.div>
              <motion.div className="relative pl-9" variants={listItemVariants}>
                <dt className="inline font-semibold text-slate-900 dark:text-white">
                  <UserCheck className="absolute left-1 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                  Atendimento Personalizado.
                </dt>
                <dd className="inline"> Dedicamos tempo para entender profundamente sua situação, garantindo uma representação que verdadeiramente atenda aos seus interesses.</dd>
              </motion.div>
              <motion.div className="relative pl-9" variants={listItemVariants}>
                <dt className="inline font-semibold text-slate-900 dark:text-white">
                  <MessageCircle className="absolute left-1 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                  Comunicação Clara.
                </dt>
                <dd className="inline"> Explicamos questões jurídicas complexas de forma simples e direta, assegurando que você tenha total compreensão e segurança no processo.</dd>
              </motion.div>
            </motion.dl>
          </div>
          
          <motion.div 
            className="relative h-96 w-full lg:h-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/lawyer-image.jpg"
              alt="Foto do Dr. Ruan Carlos"
              className="absolute inset-0 h-full w-full rounded-2xl bg-slate-50 object-cover shadow-lg"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

        </div>
      </section>
    </div>
  );
};
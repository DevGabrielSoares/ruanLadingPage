"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      staggerChildren: 0.2 
    }
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <motion.footer 
      className="bg-gray-50 text-gray-700 dark:bg-gray-900 dark:text-white py-6"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <motion.div className="flex flex-col items-start text-left" variants={columnVariants}>
            <div className="flex items-center mb-4">
              <Image src="/lightLogo3.png" alt="Ruan Carlos Advocacia Logo" width={100} height={100} className="mr-4 block dark:hidden"/>
              <Image src="/darkLogo.png" alt="Ruan Carlos Advocacia Logo" width={100} height={100} className="mr-4 hidden dark:block"/>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                RUAN CARLOS <br /> ADVOCACIA
              </span>
            </div>
            <p className="text-sm mt-4 text-gray-600 dark:text-gray-300">
              Compromisso com a justiça e a defesa dos seus direitos.
            </p>
          </motion.div>
          
          <motion.div className="flex flex-col items-start text-left md:items-center md:text-center" variants={columnVariants}>
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Menu</h3>
            <ul className="space-y-2">
              <li><Link href="#areas" className="hover:text-blue-600 dark:hover:text-gray-400">Áreas de Atuação</Link></li>
              <li><Link href="#diferenciais" className="hover:text-blue-600 dark:hover:text-gray-400">Diferenciais</Link></li>
              <li><Link href="#depoimentos" className="hover:text-blue-600 dark:hover:text-gray-400">Depoimentos</Link></li>
              <li><Link href="#sobre" className="hover:text-blue-600 dark:hover:text-gray-400">Quem Somos</Link></li>
            </ul>
          </motion.div>
          
          <motion.div className="flex flex-col items-start md:items-end text-left md:text-right text-gray-600 dark:text-gray-300" variants={columnVariants}>
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Contato</h3>
            <p className="text-sm">Av. Paulino Félix, 932<br/>Acopiara - CE, 63560-000</p>
            <p className="text-sm mt-2">(88) 9 8150-5012</p>
            <p className="text-sm">adv.rcarlos@gmail.com</p>
            <p className="text-sm font-bold text-gray-900 dark:text-white mt-4">Horário: Seg-Sex: 8h às 17h</p>
            <div className="flex space-x-4 mt-4">
              <motion.a href="https://www.instagram.com/adv_ruan_carlos/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-gray-400" whileHover={{ y: -3, scale: 1.1 }}>
                <FaInstagram size={24} />
              </motion.a>
              <motion.a href="#" aria-label="LinkedIn" className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-gray-400" whileHover={{ y: -3, scale: 1.1 }}>
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a href="#" aria-label="Facebook" className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-gray-400" whileHover={{ y: -3, scale: 1.1 }}>
                <FaFacebook size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p>&copy; {new Date().getFullYear()} Ruan Carlos Advocacia. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
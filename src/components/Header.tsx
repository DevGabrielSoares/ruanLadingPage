'use client';

import Link from 'next/link';
import Image from 'next/image';
import ThemeToggleButton from './ThemeToggleButton';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const navLinks = [
  { href: "#areas", label: "Áreas de atuação" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#sobre", label: "Quem somos" },
];

const mobileMenuVariants: Variants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { ease: [0.22, 1, 0.36, 1], duration: 0.5 }
  },
  exit: {
    x: "100%",
    transition: { ease: [0.6, 0.05, -0.01, 0.9], duration: 0.4 }
  }
} as const;

const mobileLinkContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const mobileLinkVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavLink = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void; }) => (
    <Link
      href={href}
      onClick={onClick}
      className="relative text-lg font-medium text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
      {label}
      <motion.span
        className="absolute bottom-[-4px] left-0 h-[2px] w-full bg-blue-600 dark:bg-blue-400"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: 'left' }}
      />
    </Link>
  );

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          hasScrolled
            ? 'bg-white/90 shadow-md dark:bg-gray-900/90 backdrop-blur-sm'
            : 'bg-white dark:bg-gray-900'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <nav className={`container mx-auto px-6 flex justify-between items-center transition-all duration-300 ${
          hasScrolled ? 'py-2' : 'py-4'
        }`}>
          <div className="text-xl font-bold">
            <Link href="/">
              <Image src="/lightLogo3.png" alt="Logo RC Advocacia" width={45} height={45} className="block dark:hidden"/>
              <Image src="/darkLogo.png" alt="Logo RC Advocacia" width={45} height={45} className="hidden dark:block"/>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}><NavLink href={link.href} label={link.label} /></li>
              ))}
            </ul>
            <ThemeToggleButton />
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} aria-label="Abrir menu" className="text-gray-800 dark:text-white">
              <Menu size={28} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-white dark:bg-gray-900 md:hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col">
              <div className="flex justify-end items-center">
                <button onClick={toggleMenu} aria-label="Fechar menu" className="self-end text-gray-800 dark:text-white">
                  <X size={32} />
                </button>
              </div>
              
              <motion.ul
                className="flex flex-col items-center justify-center space-y-8 mt-16"
                variants={mobileLinkContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {navLinks.map((link) => (
                  <motion.li key={link.href} variants={mobileLinkVariants}>
                    <NavLink href={link.href} label={link.label} onClick={toggleMenu} />
                  </motion.li>
                ))}
                <motion.li className="mt-8" variants={mobileLinkVariants}>
                  <ThemeToggleButton />
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
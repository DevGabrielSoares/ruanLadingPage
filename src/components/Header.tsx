'use client';

import Link from 'next/link';
import Image from 'next/image';
import ThemeToggleButton from './ThemeToggleButton';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: "#areas", label: "Áreas de atuação" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#sobre", label: "Quem somos" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">
            <Link href="/">
              <Image
                src="/lightLogo.png" 
                alt="Logo do escritório RC Advocacia" 
                width={50}
                height={50}
                className="block dark:hidden"
              />
              <Image
                src="/darkLogo.png"
                alt="Logo do escritório RC Advocacia" 
                width={50}
                height={50}
                className="hidden dark:block"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeToggleButton />
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} aria-label="Abrir menu">
              <Menu size={28} />
            </button>
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-gray-900 md:hidden">
          <div className="container mx-auto px-6 py-4 flex flex-col">
            <div className="flex justify-between items-center">
              <button onClick={toggleMenu} aria-label="Fechar menu" className="self-end text-gray-800 dark:text-white">
                <X size={32} />
              </button>
            </div>
            
            <ul className="flex flex-col items-center justify-center space-y-8 mt-16">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-2xl font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
               <li className="mt-8">
                <ThemeToggleButton />
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
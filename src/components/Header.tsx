import Link from 'next/link';
import Image from 'next/image';
import ThemeToggleButton from './ThemeToggleButton';

export default function Header() {
  return (
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
        
        <div className="flex items-center space-x-4">
          <ul className="hidden md:flex space-x-6">
            <li><Link href="#areas" className="hover:text-blue-600 dark:hover:text-blue-400">Áreas de atuação</Link></li>
            <li><Link href="#diferenciais" className="hover:text-blue-600 dark:hover:text-blue-400">Diferenciais</Link></li>
            <li><Link href="#depoimentos" className="hover:text-blue-600 dark:hover:text-blue-400">Depoimentos</Link></li>
            <li><Link href="#quem-somos" className="hover:text-blue-600 dark:hover:text-blue-400">Quem somos</Link></li>
          </ul>
          
          <ThemeToggleButton />
        </div>

      </nav>
    </header>
  );
}
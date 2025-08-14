import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 dark:bg-gray-900 dark:text-white py-6">
      <div className="container mx-auto px-6">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="flex flex-col items-start mb-4">
            <div className="flex items-center mb-4">
              <Image
                src="/lightLogo.png"
                alt="Ruan Carlos Advocacia Logo"
                width={100}
                height={100}
                className="mr-4 block dark:hidden"
              />
              <Image
                src="/darkLogo.png"
                alt="Ruan Carlos Advocacia Logo"
                width={100}
                height={100}
                className="mr-4 hidden dark:block"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                RUAN CARLOS
                <br />
                ADVOCACIA
              </span>
            </div>
            <p className="text-sm mt-4 text-gray-600 dark:text-gray-300">
              Compromisso com a justiça e a defesa dos seus direitos.
            </p>
          </div>
          <div className="flex flex-col md:items-center">
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">
              Menu
            </h3>
            <ul className="space-y-2">
              <li><Link href="/areas-de-atuacao" className="hover:text-blue-600 dark:hover:text-gray-400">Áreas de Atuação</Link></li>
              <li><Link href="/diferenciais" className="hover:text-blue-600 dark:hover:text-gray-400">Diferenciais</Link></li>
              <li><Link href="/depoimentos" className="hover:text-blue-600 dark:hover:text-gray-400">Depoimentos</Link></li>
              <li><Link href="/quem-somos" className="hover:text-blue-600 dark:hover:text-gray-400">Quem Somos</Link></li>
              <li><Link href="/contato" className="hover:text-blue-600 dark:hover:text-gray-400">Contato</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-start md:items-end text-gray-600 dark:text-gray-300">
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">
              Contato
            </h3>
            <p className="text-sm">Av. Paulino Félix, 932</p>
            <p className="text-sm">Acopiara - CE, 63560-00</p>
            <p className="text-sm">(88) 9 9809-0096</p>
            <p className="text-sm mb-4">adv.rcarlos@gmail.com</p>
            <p className="text-sm font-bold text-gray-900 dark:text-white">
              Horário: Seg-Sex: 8h às 17h
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" aria-label="Instagram" className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-gray-400">
                <FaInstagram size={24} />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-gray-400">
                <FaLinkedin size={24} />
              </Link>
              <Link href="#" aria-label="Facebook" className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-gray-400">
                <FaFacebook size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ruan Carlos Advocacia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
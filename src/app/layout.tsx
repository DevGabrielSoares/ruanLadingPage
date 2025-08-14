import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RC Advocacia',
  description: 'Landing page para serviços de advocacia sob responsabilidade de RC Advocacia.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const script = `
    (function() {
      const theme = localStorage.getItem('theme');
      if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    })();
  `;

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <script dangerouslySetInnerHTML={{ __html: script }} />
        {children}
      </body>
    </html>
  );
}
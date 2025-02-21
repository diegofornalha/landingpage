'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  style: ['normal'],
});

// Interface para tipagem das páginas do portfólio
interface PortfolioPage {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  tags: string[];
}

// Dados mockados para exemplo
const mockPages: PortfolioPage[] = [
  {
    id: '1',
    title: 'Landing Page Moderna',
    description: 'Uma landing page moderna com design responsivo e animações suaves.',
    imageUrl: '/images/idevibelogo.png',
    createdAt: '2024-03-20',
    tags: ['Next.js', 'Tailwind CSS', 'React']
  },
  {
    id: '2',
    title: 'Portfolio Profissional',
    description: 'Portfolio elegante para apresentação de trabalhos e projetos.',
    imageUrl: '/images/idevibelogo.png',
    createdAt: '2024-03-19',
    tags: ['Design', 'UI/UX', 'Portfolio']
  },
  {
    id: '3',
    title: 'Blog Tech',
    description: 'Blog com foco em conteúdo tecnológico e desenvolvimento.',
    imageUrl: '/images/idevibelogo.png',
    createdAt: '2024-03-18',
    tags: ['Blog', 'Tech', 'Content']
  }
];

export default function PortfolioPage() {
  const [pages, setPages] = useState<PortfolioPage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulando carregamento de dados
    const loadPages = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setPages(mockPages);
      setIsLoading(false);
    };

    loadPages();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className={`text-2xl md:text-3xl font-medium ${playfair.className}`}>
              FlowDev.ai
            </Link>
            <nav className="flex items-center gap-6">
              <Link 
                href="/" 
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/pagpub" 
                className="text-white font-medium"
              >
                Portfolio
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-medium mb-4 ${playfair.className}`}>
            Nosso Portfolio
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Explore nossa coleção de páginas e projetos criados com FlowDev.ai. 
            Cada projeto demonstra o poder da programação assistida por IA.
          </p>
        </div>

        {/* Portfolio Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-neutral-800 h-48 rounded-lg mb-4"></div>
                <div className="h-4 bg-neutral-800 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-neutral-800 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pages.map((page) => (
              <article 
                key={page.id}
                className="bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 hover:border-red-500/20 transition-all duration-300 group"
              >
                <div className="relative aspect-video overflow-hidden bg-neutral-800">
                  <img
                    src={page.imageUrl}
                    alt={page.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h2 className={`text-xl font-medium mb-2 group-hover:text-red-400 transition-colors ${playfair.className}`}>
                    {page.title}
                  </h2>
                  <p className="text-neutral-400 mb-4">
                    {page.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {page.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 text-sm bg-red-500/10 text-green-400 rounded-full border border-red-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-neutral-500">
                    Criado em {new Date(page.createdAt).toLocaleDateString('pt-BR')}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-neutral-400 text-sm">
              © 2024 FlowDev.ai. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 
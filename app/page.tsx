'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  style: ['normal'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function Page() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className={`flex flex-col min-h-screen bg-black text-foreground bg-dotted-grid ${inter.className}`}>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        
        .glimmer-card {
          position: relative;
          background: rgb(23, 23, 23);
          border-radius: 12px;
          overflow: hidden;
        }
        
        .glimmer-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(236, 72, 153, 0.03),
            rgba(236, 72, 153, 0.06),
            rgba(236, 72, 153, 0.03),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .glimmer-pill {
          position: relative;
          background: rgb(23, 23, 23);
          border-radius: 9999px;
          overflow: hidden;
        }
        
        .glimmer-pill::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(236, 72, 153, 0.03),
            rgba(236, 72, 153, 0.06),
            rgba(236, 72, 153, 0.03),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .hero-glow {
          position: absolute;
          top: 85%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 140%;
          height: 600px;
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.03) 35%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 0;
          filter: blur(50px);
        }

        .scroll-animation {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scroll-animation.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-delay-1 { transition-delay: 0.1s; }
        .scroll-delay-2 { transition-delay: 0.2s; }
        .scroll-delay-3 { transition-delay: 0.3s; }
      `}</style>

      {/* Navigation */}
      <header className="flex items-center justify-between py-4 px-6 border-b border-neutral-800/50">
        <Link href="/" className={`text-2xl md:text-3xl font-medium ${playfair.className}`}>
          FlowDev.ai
        </Link>
        <nav className="flex items-center gap-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <span className="sr-only">GitHub</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-6 relative">
          <div className="hero-glow" />
          <div className="max-w-[1200px] mx-auto text-center relative z-10">
            {/* Logo Placeholder */}
            <div className="mb-4">
              <img 
                src="/images/idevibelogo.png" 
                alt="FlowDev Logo" 
                className="w-36 h-36 mx-auto object-contain"
              />
            </div>
            <div className="inline-flex items-center px-6 py-2 text-base font-medium text-purple-400 mb-8 glimmer-pill fade-in bg-purple-500/10 border border-purple-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
              <span className={playfair.className}>Transforme Prompts em Código com IA</span>
            </div>
            <h1 className={`text-4xl md:text-5xl font-medium mb-6 tracking-tight fade-in delay-1 ${playfair.className}`}>
              A Maneira Mais Fácil de<br />Programar com o Cursor
            </h1>
            <p className="text-lg text-neutral-400 mb-8 fade-in delay-2">
              FlowDev é sua IDE para Programação com Flow
            </p>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-20 px-6">
          <div className="max-w-[1200px] mx-auto scroll-animation">
            <div className="glimmer-card">
              <div className="bg-neutral-900">
                <div className="flex flex-col md:flex-row h-auto md:h-[600px]">
                  {/* Input Section */}
                  <div className="w-full md:w-1/2 md:border-r border-neutral-800 p-6 flex flex-col">
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-neutral-400 mb-2">O que o Cursor deve fazer?</label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Descreva o que você quer construir..."
                          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500/30"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-green-500/10 rounded-lg text-green-400 hover:bg-green-500/20 transition-colors">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 2L11 13"/>
                            <path d="M22 2L15 22L11 13L2 9L22 2Z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-neutral-400 mb-4">Começar com</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {[...Array(2)].map((_, i) => (
                          <button
                            key={i}
                            className="flex items-center gap-3 p-4 bg-neutral-800/50 rounded-lg hover:bg-neutral-800 transition-colors text-left group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-green-500/10 text-green-400 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                              </svg>
                            </div>
                            <span className="text-sm font-medium">Modelo {i + 1}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Cursor Composer Section - Hidden on mobile */}
                  <div className="hidden md:flex md:w-1/2 md:flex-col">
                    <div className="p-4 border-b border-neutral-800">
                      <h2 className="text-lg font-medium">Compositor Cursor</h2>
                    </div>
                    <div className="flex-1 p-4 overflow-y-auto space-y-4">
                      {/* First Message */}
                      <div className="flex justify-end">
                        <div className="max-w-[85%] p-4 bg-neutral-800 rounded-lg">
                          <p className="text-sm text-neutral-300 text-right">
                            Claro, posso fazer essas alterações para você.
                          </p>
                        </div>
                      </div>

                      {/* Status Updates */}
                      <div className="flex flex-col gap-2">
                        <div className="self-end max-w-[85%] p-3 bg-neutral-800 rounded-lg">
                          <p className="text-sm font-medium text-green-400 text-right">Arquivo gerado</p>
                        </div>
                        <div className="self-end max-w-[85%] p-3 bg-neutral-800 rounded-lg">
                          <p className="text-sm font-medium text-green-400 text-right">Arquivo gerado</p>
                        </div>
                        <div className="self-end max-w-[85%] p-3 bg-neutral-800 rounded-lg">
                          <p className="text-sm font-medium text-green-400 text-right">Arquivo gerado</p>
                        </div>
                        <div className="self-end max-w-[85%] p-3 bg-neutral-800 rounded-lg">
                          <p className="text-sm font-medium text-green-400 text-right">Arquivo gerado</p>
                        </div>
                      </div>

                      {/* Completion Message */}
                      <div className="flex justify-end">
                        <div className="max-w-[85%] p-4 bg-neutral-800 rounded-lg">
                          <p className="text-sm text-neutral-300 text-right">
                            Criei seu app com sucesso
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border-t border-neutral-800">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Digite sua mensagem..."
                          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500/30"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-green-500/10 rounded-lg text-green-400 hover:bg-green-500/20 transition-colors">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 2L11 13"/>
                            <path d="M22 2L15 22L11 13L2 9L22 2Z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 border-t border-neutral-800">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16 scroll-animation">
              <h2 className={`text-3xl md:text-4xl font-medium mb-3 ${playfair.className}`}>Crie em Minutos, Não em Meses</h2>
              <p className="text-neutral-400 text-lg">Transforme suas ideias em realidade com três comandos simples.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 relative">
              <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800/80 hover:border-green-500/20 transition-colors scroll-animation scroll-delay-1 group">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                </div>
                <h3 className={`text-xl font-medium mb-3 group-hover:text-green-400 transition-colors ${playfair.className}`}>Baixe o Modelo</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Comece com nosso modelo pronto para produção. Ele vem com tudo que você precisa para criar uma landing page incrível.
                </p>
              </div>

              <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800/80 hover:border-green-500/20 transition-colors scroll-animation scroll-delay-2 group">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4z"/>
                  </svg>
                </div>
                <h3 className={`text-xl font-medium mb-3 group-hover:text-green-400 transition-colors ${playfair.className}`}>Diga ao FlowDev o que Deseja</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Descreva sua visão em português simples. O FlowDev controlará o Cursor para transformar suas palavras em um design bonito e funcional.
                </p>
              </div>

              <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800/80 hover:border-green-500/20 transition-colors scroll-animation scroll-delay-3 group">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
                  </svg>
                </div>
                <h3 className={`text-xl font-medium mb-3 group-hover:text-green-400 transition-colors ${playfair.className}`}>Publique na Vercel</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Publique sua landing page na Vercel com um clique. Compartilhe sua criação com o mundo instantaneamente em uma rede global.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-neutral-800/50 scroll-animation">
          <div className="max-w-[1200px] mx-auto flex items-center justify-between">
            <div className="text-sm text-neutral-400">
              © 2024 Software Composer LP. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                <span className="sr-only">Discord</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6h0a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3v0"/>
                  <path d="M6 18v-7a3 3 0 0 1 3-3h7"/>
                  <circle cx="8" cy="12" r="1"/>
                  <circle cx="16" cy="12" r="1"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
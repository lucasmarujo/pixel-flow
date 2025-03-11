import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import pixelFlowLogo from '../Logo/pixel flow logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Efeito para bloquear o scroll do body quando o menu estiver aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup ao desmontar o componente
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    toggleMenu();
    
    // Scroll suave para a seção
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <motion.header 
      className="fixed w-full z-50 bg-white bg-opacity-80 backdrop-blur-sm shadow-sm py-2 md:py-4 h-[70px] md:h-[80px] lg:h-[90px]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 h-full">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={pixelFlowLogo} 
            alt="PixelFlow Logo" 
            className="h-10 md:h-12 lg:h-14 transition-all duration-300" 
          />
        </div>
        
        {/* Navegação Desktop */}
        <nav className="hidden md:flex space-x-8">
          <a href="#hero" className="text-gray-800 hover:text-primary font-medium transition-colors">Início</a>
          <a href="#about" className="text-gray-800 hover:text-primary font-medium transition-colors">Sobre</a>
          <a href="#services" className="text-gray-800 hover:text-primary font-medium transition-colors">Serviços</a>
          <a href="#portfolio" className="text-gray-800 hover:text-primary font-medium transition-colors">Portfólio</a>
          <a href="#testimonials" className="text-gray-800 hover:text-primary font-medium transition-colors">Depoimentos</a>
          <a href="#contact" className="text-gray-800 hover:text-primary font-medium transition-colors">Contato</a>
        </nav>
        
        {/* Botão de Orçamento - Desktop */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-primary text-white font-bold py-2 px-4 md:py-2 md:px-6 rounded-full shadow-md hover:shadow-lg transition-shadow text-sm md:text-base"
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Faça seu orçamento
        </motion.button>
        
        {/* Botão Menu Mobile */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none z-[102] relative"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay de fundo para garantir que o conteúdo da página não seja visível */}
            <motion.div
              className="fixed inset-0 bg-white z-[100]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            
            {/* Menu com navegação - Modificado para descer e ocupar o espaço necessário */}
            <motion.div 
              className="fixed top-[70px] left-0 right-0 bg-white bg-opacity-95 backdrop-blur-md z-[101] flex flex-col items-center px-4 shadow-sm"
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: "auto", 
                opacity: 1,
                transition: {
                  height: { duration: 0.5, ease: "easeOut" },
                  opacity: { duration: 0.3 }
                }
              }}
              exit={{ 
                height: 0, 
                opacity: 0,
                transition: {
                  height: { duration: 0.5, ease: "easeIn" },
                  opacity: { duration: 0.3 }
                }
              }}
            >
              <div className="flex flex-col items-center space-y-6 py-8 w-full max-w-md mx-auto">
                {[
                  { 
                    href: "#hero", 
                    label: "Início",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    )
                  },
                  { 
                    href: "#about", 
                    label: "Sobre",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  },
                  { 
                    href: "#services", 
                    label: "Serviços",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )
                  },
                  { 
                    href: "#portfolio", 
                    label: "Portfólio",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    )
                  },
                  { 
                    href: "#testimonials", 
                    label: "Depoimentos",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    )
                  },
                  { 
                    href: "#contact", 
                    label: "Contato",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )
                  }
                ].map((item, index) => (
                  <motion.a 
                    key={item.href}
                    href={item.href} 
                    className="text-gray-800 hover:text-primary font-medium text-xl transition-colors flex items-center w-full justify-center"
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        duration: 0.3, 
                        delay: index * 0.1,
                        ease: "easeOut" 
                      }
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.icon}
                    {item.label}
                  </motion.a>
                ))}
                
                {/* Botão de Orçamento - Mobile */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-shadow text-base mt-4 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.3, 
                      delay: 0.6,
                      ease: "easeOut" 
                    }
                  }}
                  onClick={() => {
                    toggleMenu();
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Faça seu orçamento
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header; 
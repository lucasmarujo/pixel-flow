import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import portfolioImage from '../assets/images/portfolio.png';
import storeImage from '../assets/images/store.png';

// Imagens de exemplo (em um projeto real, você importaria imagens reais)
const projectTypes = [
  {
    id: 1,
    title: 'Portfólios Empresariais e Pessoais',
    description: 'Sites elegantes e responsivos que destacam sua marca e conquistas de forma profissional.',
    features: ['Design personalizado', 'Otimização para SEO', 'Integração com redes sociais', 'Galeria de projetos'],
    color: 'from-blue-500 to-purple-600',
    image: portfolioImage,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Sites com Sistema de Pagamento',
    description: 'Plataformas de e-commerce completas com processamento seguro de pagamentos e gestão de produtos.',
    features: ['Integração com gateways de pagamento', 'Carrinho de compras', 'Gestão de estoque', 'Área do cliente'],
    color: 'from-green-500 to-teal-600',
    image: storeImage,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Dashboards Funcionais',
    description: 'Painéis de controle intuitivos que transformam dados complexos em insights acionáveis.',
    features: ['Visualização de dados em tempo real', 'Relatórios personalizados', 'Controle de acesso', 'Análises avançadas'],
    color: 'from-red-500 to-orange-600',
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Função para avançar para o próximo slide
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectTypes.length);
  };

  // Função para voltar para o slide anterior
  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectTypes.length) % projectTypes.length);
  };

  // Avançar automaticamente a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Variantes de animação
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section id="portfolio" className="py-20 pt-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossos Projetos</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desenvolvemos soluções digitais personalizadas para atender às necessidades específicas do seu negócio
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Controles do carrossel */}
          <button 
            onClick={prevSlide} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg text-primary hover:bg-gray-100 transition-colors"
            aria-label="Slide anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg text-primary hover:bg-gray-100 transition-colors"
            aria-label="Próximo slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carrossel */}
          <div className="overflow-hidden rounded-xl shadow-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'tween', duration: 0.5 }}
                className={`bg-gradient-to-br ${projectTypes[currentIndex].color} p-8 md:p-12`}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-white">
                    <div className="mb-6 inline-block p-4 bg-white bg-opacity-20 rounded-lg">
                      {projectTypes[currentIndex].icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{projectTypes[currentIndex].title}</h3>
                    <p className="text-lg mb-6 opacity-90">{projectTypes[currentIndex].description}</p>
                    <ul className="space-y-2">
                      {projectTypes[currentIndex].features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white bg-opacity-10 p-6 rounded-lg h-80 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="border-4 border-white border-opacity-30 rounded-lg p-8 mb-4">
                        <img src={projectTypes[currentIndex].image} alt={projectTypes[currentIndex].title} className="h-full w-full object-cover mx-auto opacity-100" />
                      </div>
                      <p className="text-sm opacity-70">Imagem ilustrativa do projeto</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-8 space-x-2">
            {projectTypes.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel; 
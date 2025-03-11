import React from 'react';
    import { motion } from 'framer-motion';
    import { RocketLaunchIcon, CodeBracketSquareIcon, BoltIcon } from '@heroicons/react/24/outline';

    const featuresData = [
      {
        icon: RocketLaunchIcon,
        title: 'Entrega Rápida',
        description: 'Seu site pronto e funcionando em tempo recorde.',
      },
      {
        icon: CodeBracketSquareIcon,
        title: 'Tecnologia de Ponta',
        description: 'Integrações e inovações para um site moderno e eficiente.',
      },
      {
        icon: BoltIcon,
        title: 'Solução Completa',
        description: 'Sites responsivos para todos os tipos de negócio.',
      },
    ];

    const Features = () => {
      return (
        <div id="services" className="py-16 pt-24">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Nossos Diferenciais</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuresData.map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <feature.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      );
    };

    export default Features;

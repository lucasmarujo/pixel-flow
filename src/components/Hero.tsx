//import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="hero" className="bg-primary text-white py-20 pt-32">
      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-4"
        >
          Soluções Rápidas e Eficazes para o Seu Negócio Online
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-8"
        >
          Sites responsivos, integrações e tecnologia de ponta para impulsionar o seu sucesso.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white text-primary font-bold py-3 px-8 rounded-full"
        >
          Comece Agora
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;

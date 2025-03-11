//import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 pt-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Sobre a PixelFlow
          </motion.h2>
          <motion.div 
            variants={fadeIn}
            className="w-20 h-1 bg-primary mx-auto mb-8"
          />
          <motion.p 
            variants={fadeIn}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Transformando ideias em experiências digitais excepcionais desde 2018
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Nossa Missão</h3>
            <p className="text-lg text-gray-600 mb-6">
              Na PixelFlow, nossa missão é transformar a visão dos nossos clientes em realidade digital, 
              criando soluções web inovadoras que impulsionam o crescimento e o sucesso dos negócios.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Combinamos design criativo, desenvolvimento técnico avançado e estratégias de negócios 
              para entregar produtos digitais que não apenas atendem, mas superam as expectativas.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-xl text-primary mb-2">+500</h4>
                <p className="text-gray-600">Projetos Entregues</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-xl text-primary mb-2">98%</h4>
                <p className="text-gray-600">Clientes Satisfeitos</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Desenvolvimento Ágil</h3>
              <p className="text-gray-600">
                Utilizamos metodologias ágeis para garantir entregas rápidas e eficientes, 
                mantendo você envolvido em cada etapa do processo. Nossa abordagem iterativa 
                permite ajustes contínuos, garantindo que o produto final atenda perfeitamente às suas necessidades.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Tecnologia de Ponta</h3>
              <p className="text-gray-600">
                Trabalhamos com as mais recentes tecnologias e frameworks, como React, Next.js, 
                Node.js e muito mais, para criar soluções modernas, escaláveis e de alto desempenho 
                que se destacam no mercado digital atual.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Suporte Contínuo</h3>
              <p className="text-gray-600">
                Nosso relacionamento não termina com a entrega do projeto. Oferecemos suporte 
                contínuo, atualizações e manutenção para garantir que sua solução digital 
                continue funcionando perfeitamente e evoluindo com seu negócio.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 
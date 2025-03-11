//import React from 'react';
    import { motion } from 'framer-motion';

    const testimonialsData = [
      {
        name: 'João Silva',
        company: 'Empresa X',
        testimonial: 'A agência transformou nossa presença online. Estamos muito satisfeitos com o resultado!',
      },
      {
        name: 'Maria Oliveira',
        company: 'Loja Y',
        testimonial: 'Entrega rápida e um site incrível. Recomendo a todos!',
      },
    ];

    const Testimonials = () => {
      return (
        <div id="testimonials" className="bg-gray-100 py-16 pt-24">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">O que nossos clientes dizem</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonialsData.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <p className="text-gray-600 italic mb-4">"{testimonial.testimonial}"</p>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.company}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      );
    };

    export default Testimonials;

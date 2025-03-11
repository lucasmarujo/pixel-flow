import React from 'react';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Verificar se os dados estão sendo enviados corretamente
    console.log('Dados do formulário:', formData);
    console.log('Formulário HTML:', form.current);

    // Preparar os dados para envio
    const templateParams = {
      from_name: formData.from_name,
      from_email: formData.from_email,
      to_name: 'Pixel Flow',
      message: formData.message,
      reply_to: formData.from_email
    };

    console.log('Parâmetros do template:', templateParams);

    // Usar sendForm para enviar o formulário
    emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    )
      .then((result) => {
        console.log('Email enviado com sucesso:', result.text);
        setSubmitStatus({
          success: true,
          message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
        });
        setFormData({ from_name: '', from_email: '', message: '' });
      })
      .catch((error) => {
        console.error('Erro ao enviar email:', error.text);
        setSubmitStatus({
          success: false,
          message: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.'
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="bg-white py-16 pt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para transformar suas ideias em realidade. Envie-nos uma mensagem!
          </p>
        </div>
        
        {submitStatus && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 p-4 rounded-lg ${
              submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {submitStatus.message}
          </motion.div>
        )}
        
        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            placeholder="Seu Nome"
            className="w-full py-3 px-4 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
            required
          />
          <input
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            placeholder="Seu Email"
            className="w-full py-3 px-4 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Sua Mensagem"
            className="w-full py-3 px-4 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
            rows={4}
            required
          ></textarea>
          <button 
            type="submit"
            disabled={isSubmitting}
            className={`bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 transition-colors duration-300 ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

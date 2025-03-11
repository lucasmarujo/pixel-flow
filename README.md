# 🌟 PixelFlow - Agência de Desenvolvimento Web

![Versão](https://img.shields.io/badge/versão-1.0.0-blue)
![Licença](https://img.shields.io/badge/licença-MIT-green)

## 🚀 Sobre o Projeto

PixelFlow é uma agência especializada no desenvolvimento de websites funcionais, responsivos e esteticamente atraentes. Nosso foco é criar experiências digitais que combinam design moderno com alta performance técnica.

### 💻 Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utilitário para design responsivo
- **Vite** - Build tool e servidor de desenvolvimento
- **EmailJS** - Serviço para envio de emails diretamente do frontend

### 🎯 Recursos Principais

- **Design Responsivo** - Experiência perfeita em todos os dispositivos
- **Performance Otimizada** - Carregamento rápido e experiência fluida
- **Acessibilidade** - Seguindo as melhores práticas de acessibilidade web
- **SEO Amigável** - Estrutura otimizada para mecanismos de busca
- **Formulário de Contato** - Integração com EmailJS para comunicação direta

## 📧 Configuração do EmailJS

O formulário de contato utiliza o serviço EmailJS para enviar mensagens diretamente para o email configurado. 

### ⚙️ Configuração do Template
O template do EmailJS deve conter os seguintes campos para funcionar corretamente com o formulário:
- `name`: Nome do remetente
- `email`: Email do remetente
- `message`: Mensagem enviada

### 🔄 Como funciona
1. O usuário preenche o formulário de contato
2. Ao clicar em "Enviar Mensagem", os dados são enviados para o EmailJS
3. O EmailJS processa a mensagem e a envia para o email configurado
4. O usuário recebe uma confirmação visual de que a mensagem foi enviada

### 🛠️ Personalização
Para alterar a configuração do EmailJS, edite o arquivo `src/config/emailjs.ts`.

## 📋 Estrutura do Projeto

```
project/
├── src/
│   ├── components/     # Componentes React reutilizáveis
│   ├── config/         # Arquivos de configuração
│   ├── Logo/           # Arquivos relacionados ao logo
│   ├── App.tsx         # Componente principal da aplicação
│   ├── main.tsx        # Ponto de entrada da aplicação
│   └── index.css       # Estilos globais
├── public/             # Arquivos estáticos
└── ...                 # Arquivos de configuração do projeto
```

## 🚀 Desenvolvimento

### 📥 Instalação
```bash
npm install
```

### 🏃‍♂️ Executar em desenvolvimento
```bash
npm run dev
```

### 🏗️ Build para produção
```bash
npm run build
```

### 🧪 Executar testes
```bash
npm test
```

## 📱 Recursos Responsivos

O projeto foi desenvolvido com uma abordagem mobile-first, garantindo que a experiência do usuário seja excelente em qualquer dispositivo:

- 📱 **Mobile**: Design otimizado para smartphones
- 💻 **Tablet**: Layout adaptativo para dispositivos de tamanho médio
- 🖥️ **Desktop**: Experiência completa para telas maiores

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 📞 Contato

Para mais informações, entre em contato através do formulário em nosso site ou envie um email para dev.pixelflow@gmail.com . 

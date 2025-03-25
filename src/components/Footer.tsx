import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-4 font-sans transition-all duration-300 transform translate-y-full hover:translate-y-0 group">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-3 md:mb-0 text-center md:text-left">
            <p className="text-sm md:text-base">
              &copy; {new Date().getFullYear()} Sistema de Gerenciamento de Usuários
            </p>
          </div>

          <div className="flex space-x-4 justify-center">
            <a href="#" className="text-white hover:text-purple-200 transition-colors">
              <span className="text-sm md:text-base">Termos de Serviço</span>
            </a>
            <a href="#" className="text-white hover:text-purple-200 transition-colors">
              <span className="text-sm md:text-base">Política de Privacidade</span>
            </a>
            <a href="#" className="text-white hover:text-purple-200 transition-colors">
              <span className="text-sm md:text-base">Contato</span>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-full left-0 right-0 h-4 group-hover:h-0 transition-all duration-300"></div>
    </footer>
  );
};

export default Footer;
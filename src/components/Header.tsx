import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, CircleUser } from 'lucide-react';
const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-neutral-950 text-white shadow-lg">
      <nav className="container mx-auto px-4 font-mono">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <CircleUser className="h-8 w-8" />
            <span className="font-bold text-xl">SeuCadastro</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-blue-200 transition-colors">
              Início
            </Link>
            <Link to="/register" className="hover:text-blue-200 transition-colors">
              Cadastro
            </Link>
            <Link to="/users" className="hover:text-blue-200 transition-colors">
              Lista de Usuários
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <Link
              to="/"
              className="block py-2 hover:text-blue-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              to="/register"
              className="block py-2 hover:text-blue-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cadastro
            </Link>
            <Link
              to="/users"
              className="block py-2 hover:text-blue-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Lista de Usuários
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
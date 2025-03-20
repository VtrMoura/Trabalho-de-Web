import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Bem-vindo ao Sistema de Gerenciamento de Usuários
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        Gerencie facilmente os usuários do seu sistema com nossa plataforma intuitiva.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Link
          to="/register"
          className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <UserPlus className="w-16 h-16 text-blue-600 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Cadastrar Usuário</h2>
          <p className="text-gray-600">
            Adicione novos usuários ao sistema com todas as informações necessárias.
          </p>
        </Link>

        <Link
          to="/users"
          className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <Users className="w-16 h-16 text-blue-600 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Lista de Usuários</h2>
          <p className="text-gray-600">
            Visualize, edite e gerencie todos os usuários cadastrados.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
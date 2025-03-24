import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="m-h-screen w-full  bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="min-h-screen w-full bg-black bg-opacity-60 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center px-4 py-12">
          <h1 className="text-4xl font-bold text-purple-300 mb-8">
            Bem-vindo ao Sistema de Gerenciamento de Usuários
          </h1>
          <p className="text-xl text-purple-200 mb-12">
            Gerencie facilmente os usuários do seu sistema com nossa plataforma intuitiva.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Link
              to="/register"
              className="flex flex-col items-center group transition-all hover:scale-105"
            >
              <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg group-hover:shadow-xl">
                <UserPlus className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-2 group-hover:text-cyan-400">Cadastrar Usuário</h2>
            </Link>

            <Link
              to="/users"
              className="flex flex-col items-center group transition-all hover:scale-105"
            >
              <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg group-hover:shadow-xl">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-2 group-hover:text-cyan-400">Lista de Usuários</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
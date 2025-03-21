import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputMask from 'react-input-mask';
import { createUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  phone: yup.string().required('Telefone é obrigatório'),
  login: yup.string().min(3, 'Login deve ter no mínimo 3 caracteres').required('Login é obrigatório'),
  password: yup.string().min(3, 'Senha deve ter no mínimo 3 caracteres').required('Senha é obrigatória'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'As senhas devem corresponder')
    .required('Confirmação de senha é obrigatória')
});

const UserRegister = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: any) => {
    try {
      const { confirmPassword, ...userData } = data;
      await createUser(userData);
      alert('Usuário cadastrado com sucesso!');
      reset();
      navigate('/users');
    } catch (error) {
      alert('Erro ao cadastrar usuário');
      console.error(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-neutral-900 mb-8">Cadastro de Usuário</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
        <div>
          <label className="block text-sm font-medium text-neutral-900">Nome Completo</label>
          <input
            type="text"
            {...register('name')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder=" Digite seu nome..."
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-900">E-mail</label>
          <input
            type="email"
            {...register('email')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder=" Digite seu sobrenome..."
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-900">Telefone</label>
          <InputMask
            mask="(99) 99999-9999"
            {...register('phone')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder=" Digite seu telefone..."
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-900">Nome de Usuário</label>
          <input
            type="text"
            {...register('login')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder=" Digite seu nome de usuário..."
          />
          {errors.login && <p className="mt-1 text-sm text-red-600">{errors.login.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-900">Senha</label>
          <input
            type="password"
            {...register('password')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder=" Digite sua senha..."
          />
          {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-900">Confirmar Senha</label>
          <input
            type="password"
            {...register('confirmPassword')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder=" Confirme sua senha..."
          />
          {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-neutral-950 hover:bg-zinc-300 hover:text-black"        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default UserRegister;
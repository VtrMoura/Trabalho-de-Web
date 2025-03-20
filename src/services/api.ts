import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001'
});

export const createUser = async (userData: any) => {
  const response = await api.post('/users', userData);
  return response.data;
};

export const getUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

export const updateUser = async (id: string, userData: any) => {
  const response = await api.put(`/users/${id}`, userData);
  return response.data;
};

export const deleteUser = async (id: string) => {
  await api.delete(`/users/${id}`);
};
// services/api.js
import axios from 'axios';

// Defina a URL base do seu backend
const api = axios.create({
  baseURL: 'http://localhost:5094/api' // Altere para o IP se estiver usando um dispositivo físico
});

// Função para obter usuários
export const getUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data; // Retorna os dados da resposta
  } catch (error) {
    console.error('Erro ao obter usuários:', error);
    throw error; // Repassa o erro para tratamento posterior
  }
};

// Função para criar um novo usuário
export const createUser = async (user) => {
  try {
    const response = await api.post('/users', user);
    return response.data; // Retorna os dados do novo usuário criado
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    throw error; // Repassa o erro para tratamento posterior
  }
};

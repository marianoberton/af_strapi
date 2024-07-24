import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1337/api', // Cambia esto a la URL de tu API de Strapi
});

export default api;

import axios from 'axios';

const api = axios.create({
  baseURL: process.env.BASE_URL_API || 'http://localhost:3001',
});

// const dev = axios.create({ baseURL: process.env.BASE_URL_DEVELOPMENT, }); const production = axios.create({ baseURL: process.env.BASE_URL_PRODUCTION, });
export default api;

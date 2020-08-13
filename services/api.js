import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.MAIN_API_ENDPOINT}`,
});

export default api;

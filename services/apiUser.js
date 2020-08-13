import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.USER_API_ENDPOINT}`,
});

export default api;

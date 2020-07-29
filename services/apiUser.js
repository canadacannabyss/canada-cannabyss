import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.userApiEndpoint}`,
});

export default api;

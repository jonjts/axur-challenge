import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

api.defaults.timeout = 60 * .3 * 1000; // 30 sec

export default api;
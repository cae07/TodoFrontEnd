import axios from 'axios';

const api = axios.create({
  baseURL: 'https://todo-backend-cae.herokuapp.com/',
});

export default api;

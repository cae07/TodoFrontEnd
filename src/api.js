import axios from 'axios';

const api = axios.create({
  baseurl: 'https://git.heroku.com/todo-list-trybe.git',
});

export default api;

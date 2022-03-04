import axios from 'axios';

axios.defaults.headers = {
  Accept: 'application/vnd.github.v3+json',
};
const api = axios.create({
  baseURL: 'https://api.github.com/',
});

export default api;

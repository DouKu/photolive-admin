import axios from 'axios';

axios.interceptors.request.use(config => {
  config.baseURL = '/api';
  config.headers = {
    authorization: `Bearer ${localStorage.getItem('token')}`
  }
  return config;
}, error => {
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  return response;
}, error => {
  console.error(error);
  return Promise.reject(error);
});

export default axios;
import axios from 'axios';
import Router from 'next/router';

axios.interceptors.request.use(config => {
  config.baseURL = '/api';
  config.headers = {
    ...config.headers,
    authorization: `Bearer ${localStorage.getItem('token')}`
  }
  return config;
}, error => {
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  return response;
}, error => {
  const status = error.response.status;
  if (status === 401) {
    return Router.replace('/auth/signin');
  }
  return Promise.reject(error);
});

export default axios;
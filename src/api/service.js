import axios from 'axios';
import SERVERS from './webappurl';

const apiUrl = SERVERS.URL_SERVICE + 'apisioncash/';
// const apiUrlTest ='http://10.2.10.96:4000/apisioncash/';
// const apiUrllocal ='http://192.168.0.23:4000/apisioncash/';

export const apiSionCash = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
  headers: {
    agente: 107,
    'Content-Type': 'application/json'
  }
});

apiSionCash.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log(config)
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


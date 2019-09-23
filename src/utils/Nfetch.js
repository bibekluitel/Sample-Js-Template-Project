import axios from 'axios';
import Auth from './Auth';


axios.interceptors.request.use(function (config) {
  
  config.headers.Authorization =  Auth.getAuthenticationToken();

  return config;
});

export default axios;
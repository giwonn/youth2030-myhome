import axios from 'axios';

interface apiConfig {
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
}
declare namespace axios {
  interface get {
    url: string;
    config;
  }
}
function callApi(url: string, config: object) {
  return axios(url, config);
}

export default callApi;

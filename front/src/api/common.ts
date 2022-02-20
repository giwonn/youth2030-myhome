import axios, { type AxiosRequestConfig } from 'axios';
import config from '@/config';
import type { Method } from '@/interfaces/api';

export function callApi(
  path: string,
  options?: AxiosRequestConfig,
  method: Method = 'get'
) {
  return axios({
    url: `${config.api.baseUrl}/${path}`,
    method,
    ...options,
    withCredentials: true,
  }).then((res) => ({ status: res.status, data: res.data }));
}

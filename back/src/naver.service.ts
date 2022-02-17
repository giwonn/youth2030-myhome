import { Injectable } from '@nestjs/common';
import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios';

interface SearchResponse {
  rss: any;
  channel: any;
  lastBuildDate: 
}

@Injectable()
export default class NaverService {
  url = 'https://openapi.naver.com/v1/search/local.json';

  getSearchResult(search: string): AxiosResponse<object> {
    const params = {
      query: search,
      display: 5,
    };
    const headers: AxiosRequestHeaders = {
      'X-Naver-Client-Id': process.env.NaverClientId,
      'X-Naver-Client-Secret': process.env.NaverClientSecret,
    };

    return axios
      .get(this.url, { params, headers })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
}

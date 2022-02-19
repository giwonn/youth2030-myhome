import { Injectable } from '@nestjs/common';
import axios from 'axios';

// interface SearchResponse {
//   rss: any;
//   channel: any;
//     lastBuildDate:
// }

@Injectable()
export class SearchService {
  private readonly url: string =
    'https://openapi.naver.com/v1/search/local.json';

  getSearchResult(search: string) {
    const params = {
      query: search,
      display: 5,
    };
    const headers = {
      'X-Naver-Client-Id': process.env.NAVER_SEARCH_CLIENT_ID,
      'X-Naver-Client-Secret': process.env.NAVER_SEARCH_CLIENT_SECRET,
    };
    const options = {
      params,
      headers,
    };
    return axios.get(this.url, options).then((res) => res.data);
  }
}

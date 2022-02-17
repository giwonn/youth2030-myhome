import { callApi } from './common';
import { AxiosRequestHeaders } from 'axios';

async function getSearchResult(search: string) {
  try {
    const { naver } = window;
    const url = 'v1/search/local.json';
    const params = {
      query: search,
      display: 5,
    };
    const headers: AxiosRequestHeaders = {
      'X-Naver-Client-Id': import.meta.env.VITE_NaverClientId!,
      'X-Naver-Client-Secret': import.meta.env.VITE_NaverClientSecret!,
    };
    console.log(headers);

    const data = await callApi(url, { params, headers });
    const { mapx, mapy } = data.items[0];
    const tm128 = new naver.maps.Point(mapx, mapy);
    const latLng = naver.maps.TransCoord.fromTM128ToLatLng(tm128);
    console.log(latLng);
  } catch (err) {
    console.log(err);
  }
}

export default {
  getSearchResult,
};

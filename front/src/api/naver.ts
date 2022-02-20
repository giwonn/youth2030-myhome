import { callApi } from '@/api/common';
import { fromMapToLatLng } from '@/function/naver';
import type { SearchResult } from '@/interfaces/naver';

async function getSearchResult(search: string) {
  try {
    const res: SearchResult = await callApi(`naver/search/${search}`);
    console.log('res', res);
    const { mapx, mapy } = res.data.items[0];
    const latLng = fromMapToLatLng(Number(mapx), Number(mapy));
    console.log('latLng', latLng);
  } catch (err) {
    console.log(err);
  }
}

export default {
  getSearchResult,
};

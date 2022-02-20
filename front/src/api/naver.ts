import { callApi } from '@/api/common';
import { fromMapToLatLng } from '@/function/naver';
import type { SearchResult } from '@/interfaces/naver';

async function getSearchResult(search: string) {
  try {
    const res: SearchResult = await callApi(`naver/search/${search}`);
    // console.log('res', res);
    return res.data.items;
    // const { mapx, mapy } = res.data.items[0];
    // const coordinates = res.data.items.map(({mapx, mapy}) => fromMapToLatLng(Number(mapx), Number(mapy)))
  } catch (err) {
    console.log(err);
  }
}

export default {
  getSearchResult,
};

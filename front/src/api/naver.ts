import { callApi } from '@/api/common';
import { fromMapToLatLng } from '@/lib/naver';

interface SearchResultItems {
  address: string;
  category: string;
  description: string;
  link: string;
  mapx: string;
  mapy: string;
  roadAddress: string;
  telephone: string;
  title: string;
} 

interface SearchResultData {
  display: number;
  items: SearchResultItems[];
  lastBuildDate: string;
  start: number;
  total: number;
}

interface SearchResult {
  data: SearchResultData;
  status: Number;
}

async function getSearchResult(search: string) {
  try {
    const res: SearchResult = await callApi(`naver/search/${search}`);
    console.log(res);
    const { mapx, mapy } = res.data.items[0];
    const latLng = fromMapToLatLng(Number(mapx), Number(mapy));
    console.log('latLng',latLng);
  } catch (err) {
    console.log(err);
  }
}

export default {
  getSearchResult,
};

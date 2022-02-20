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

export interface SearchResult {
  data: SearchResultData;
  status: number;
}

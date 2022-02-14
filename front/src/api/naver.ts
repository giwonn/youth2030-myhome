async function getSearchResult(search: string) {
  const url = '/api/v1/search/local.json';
  const params = {
    query: search,
    display: 5,
  };
  const headers = {
    'X-Naver-Client-Id': import.meta.env.NaverClientId,
    'X-Naver-Client-Secret': import.meta.env.NaverClientSecret,
  };
  const { data } = await axios.get(url, { params, headers });
  const { mapx, mapy } = data.items[0];
  const tm128 = new naver.maps.Point(mapx, mapy);
  const latLng = naver.maps.TransCoord.fromTM128ToLatLng(tm128);
  console.log(latLng);
}

export default {};

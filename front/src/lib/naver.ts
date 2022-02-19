export function fromMapToLatLng(mapx: number, mapy: number): naver.maps.LatLng {
  const tm128 = new naver.maps.Point(mapx, mapy);
  return naver.maps.TransCoord.fromTM128ToLatLng(tm128);
}

export default {
  fromMapToLatLng,
};

import { useState, useEffect } from 'react';
function NaverMap() {
  const container: string = 'map';
  const { naver } = window;
  const tm128 = new naver.maps.Point(314213, 545289); // mapx, mapy
  const latLng = naver.maps.TransCoord.fromTM128ToLatLng(tm128);
  const mapOptions = {
    // center: new naver.maps.LatLng(37.3595704, 127.105399),
    center: latLng,
    zoom: 20,
  };

  useEffect(() => {
    const map = new naver.maps.Map(container, mapOptions);
  }, []);

  return (
    <div className="NaverMap">
      <div id={container} style={{ width: '70vw', height: '90vh' }} />
    </div>
  );
}

export default NaverMap;

import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';

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
    <>
      <Card>
        <div id={container} style={{ width: '100%', height: '90vh' }} />
      </Card>
    </>
  );
}

export default NaverMap;

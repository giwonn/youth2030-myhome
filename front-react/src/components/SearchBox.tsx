import { useState } from 'react';
import axios from 'axios';
import { Input, Button } from '@mui/material';

function SearchBox() {
  const [value, setValue] = useState('');
  const { naver } = window;

  const getSearchResult = async () => {
    console.log('getSearchResult 호출!');
    const url = '/api/v1/search/local.json';
    const params = {
      query: value,
      display: 5,
    };
    const headers = {
      'X-Naver-Client-Id': 'Xdn2ySpXUUtweSJJEwS5',
      'X-Naver-Client-Secret': 'FivxLADhkF',
    };
    const { data } = await axios.get(url, { params, headers });
    const { mapx, mapy } = data.items[0];
    const tm128 = new naver.maps.Point(mapx, mapy);
    const latLng = naver.maps.TransCoord.fromTM128ToLatLng(tm128);
    console.log(latLng);
  };

  return (
    <div className="searchBox">
      <Input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <Button onClick={getSearchResult}>버튼</Button>
    </div>
  );
}

export default SearchBox;

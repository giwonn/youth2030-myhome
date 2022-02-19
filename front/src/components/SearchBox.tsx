import { useState } from 'react';
import { Input, Button } from '@mui/material';
import api from '@/api';

function SearchBox() {
  const [search, setSearch] = useState('');

  const getSearchResult = async () => {
    const res = await api.naver.getSearchResult(search);
  };
  const ariaLabel = { 'aria-label': 'description' };

  return (
    <div className="searchBox">
      <Input value={search} placeholder="검색할 장소를 입력해주세요!"
      
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <Button variant="contained" onClick={getSearchResult}>버튼</Button>
    </div>
  );
}

export default SearchBox;

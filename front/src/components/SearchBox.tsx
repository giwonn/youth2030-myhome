import { useState } from 'react';
import { Input, Button } from '@mui/material';
import api from '../api';

function SearchBox() {
  const [search, setSearch] = useState('');

  const getSearchResult = () => {
    return api.naver.getSearchResult(search);
  };

  return (
    <div className="searchBox">
      <Input
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <Button onClick={getSearchResult}>버튼</Button>
    </div>
  );
}

export default SearchBox;

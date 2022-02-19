import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import NaverMap from '@/components/NaverMap';
import SearchBox from '@/components/SearchBox';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Default() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{margin: '5vh'}}>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Item>
            <NaverMap />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <SearchBox />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Default;

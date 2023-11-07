import { Grid } from '@mui/material';
import React from 'react'
import Navbar from './Navbar';

function Layout() {
  return (
    <Grid container justifyContent={"center"} alignItems={'center'}>
      <Grid item xs={12}>
        <Navbar/>
      </Grid>
      <Grid item xs={11.5}>
        
      </Grid>
    </Grid>
  )
}

export default Layout;
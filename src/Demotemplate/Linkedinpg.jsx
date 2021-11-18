import React from 'react';
import Header from './Header';
import Navbar2 from './Navbar2';
import Aboutpg from './Aboutpg';
import Peopleviewpg from './Peopleviewedpg';
import Navbar from './Navbar';
import { Grid } from '@material-ui/core';

const linkedinpg=()=>{
    return(
       <>
       <Header/>
       <Navbar/>
       <Grid Grid container spacing={3}>
       <Grid item xs={6}>
       <Aboutpg/>
       </Grid>
      
       <Grid item xs={6}>
       <Peopleviewpg/>
       </Grid>
      
       </Grid>

       </>
    );
};
export default linkedinpg;
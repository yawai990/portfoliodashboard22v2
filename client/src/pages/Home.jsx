import React,{useState} from 'react';
import { Grid,Container } from '@mui/material';
import { YourProject,YourLanguages,YourExp,YourImg,Contact,View } from '../components/Home';


const Home = () => {

  return (
    <Container>
      <Grid container>
      <Grid item xs={12} lg={6}>
      <YourProject />
      <YourExp />
      </Grid>

      <Grid item xs={12} lg={6}>
      <YourLanguages />
      <YourImg />
      <View />
      <Contact />
      </Grid>

      </Grid>

    </Container>
  )
}

export default Home
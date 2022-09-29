import React,{useState} from 'react';
import { Grid,Container } from '@mui/material';
import { YourProject,YourLanguages,YourExp,YourImg,Contact } from '../components/Home';


const Home = () => {

  return (
    <Container>
      <Grid container>
      <Grid item sm={12} md={6}>
      <YourProject />
      <YourExp />
      </Grid>

      <Grid item sm={12} md={6}>
      <YourLanguages />
      <YourImg />
      <Contact />
      </Grid>

      </Grid>

    </Container>
  )
}

export default Home
import React from 'react';
import { Container,CircularProgress  } from '@mui/material';

const Loading = () => {
  return (
    <Container style={{
      padding:'20px'
    }}>
     <CircularProgress color='success' />
    </Container>
  )
}

export default Loading
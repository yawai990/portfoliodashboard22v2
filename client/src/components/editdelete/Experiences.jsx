import React from 'react';
import {Container,Card,Typography} from '@mui/material';
import { useStyles } from './style';

const ExperiencesEditDelete = () => {
  const {classes} = useStyles();

  return (
    <Container style={{
      minHeight:'75vh'
    }} className={classes.centering}>
      <Card className={classes.sm_padding}>
        <Typography variant='h3'>Comming Soon...</Typography>
      </Card>
    </Container>
  )
}

export default ExperiencesEditDelete
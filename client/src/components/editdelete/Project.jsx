import React from 'react';
import {Container,Grid,Typography} from '@mui/material';
import { useSelector } from 'react-redux';
import Projectcard from './card/Projectcard';


const ProjectEditDelete = () => {
  const projects = useSelector(state=>state.ProjectsReducer);

  return (
    <Container>
      <Typography variant='h5'>Your Projects</Typography>

        {
        projects.length > 0 ? <Projectcard />: <Typography>Loading...</Typography>
      }
    </Container>
  )
}

export default ProjectEditDelete
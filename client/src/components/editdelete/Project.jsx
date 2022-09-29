import React from 'react';
import {Paper,Typography,Container} from '@mui/material';
import { useSelector } from 'react-redux';
import Projectcard from './card/Projectcard';
import { useStyles } from './style';
import Loading from '../Loading/Loading';


const ProjectEditDelete = () => {
  const {classes}=useStyles();
  const projects = useSelector(state=>state.rootReducer.projects)

  return (
    <Paper className={classes.sm_padding}>
      <Typography variant='h6' textAlign='center' className={classes.sm_margin} fontWeight={550} letterSpacing={1.2}
      fontFamily='sans-serif'
      >Your Projects</Typography>

        {
        projects.length > 0 ? <Projectcard />: <Container>
                                                                      <Loading />
                                                                    </Container>
      }
    </Paper>
  )
}

export default ProjectEditDelete
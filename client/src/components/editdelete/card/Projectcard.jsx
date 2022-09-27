import React from 'react';
import {format} from 'date-fns';
import { Icon } from '@iconify/react';
import buyMeACoffeeFilled from '@iconify/icons-line-md/buy-me-a-coffee-filled';
import Masonry from 'react-masonry-css';
import {Card,Grid,CardMedia,CardContent,IconButton,CardHeader,Typography, Button,Paper} from '@mui/material';
import { useDispatch } from 'react-redux';
import {deleteProject} from '../../../actions/projects';
import { useSelector } from 'react-redux';


const breakpointColumnsObj = {
    default:3,
    1200: 3,
    1024:2,
    700:1,
    500: 1
  };

const Projectcard = () => {
    const dispatch = useDispatch();
    const projects = useSelector(state=>state.rootReducer.projects)

  return (
    <Masonry 
    breakpointCols={breakpointColumnsObj}
    className="my-masonry-grid"
    columnClassName="my-masonry-grid_column">
   {projects?.map(project=>(
    <Paper key={project._id}>
    <Card>
        <CardHeader
        action={
          <IconButton aria-label="settings" onClick={()=>dispatch(deleteProject(project._id))}>
          <Icon icon={buyMeACoffeeFilled} />
          </IconButton>
        }
        title={project.title}
        subheader={format(new Date(project.createAt),'MMM dd,yyyy')}
      />

<CardMedia
        component="img"
        height="195"
        image={project.selectedFile}
        alt={project.name + 'image'}
      />

      <CardContent>
        <Typography variant='body' component='div' style={{
            wordBreak:'break-all'
        }}>{project.message}</Typography>
      </CardContent>
    </Card>
    </Paper>
   ))}
   </Masonry>
  )
}

export default Projectcard
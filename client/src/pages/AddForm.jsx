import React from 'react';
import { useNavigate } from 'react-router';
import { Typography,List,ListItem,ListItemText,ListItemButton,ListItemIcon,Grid,Container } from '@mui/material';
import {addForm} from '../data';

const AddForm = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Typography variant='h5' gutterBottom>What You want to add ?</Typography>
    <Grid container>

    <Grid>

      <List sx={{
     width:220,
     padding:0,
    lineHeight:1,
    letterSpacing:0
      }}>
        {addForm.map(add=>(
             <ListItem key={add.id}
             onClick={()=>navigate(add.path)}
             >
             <ListItemButton
             sx={{
              padding:0
             }}
             >
              <ListItemIcon>
                {add.icon}
              </ListItemIcon>
               <ListItemText primary={add.name} />
             </ListItemButton>
           </ListItem>
        ))}   
      </List>

      </Grid>
    </Grid>
    </Container>
  )
}

export default AddForm;
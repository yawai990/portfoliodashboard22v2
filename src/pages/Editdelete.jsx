import React from 'react';
import {Container,Grid, Typography,List,ListItem,ListItemButton,ListItemIcon} from '@mui/material';
import { useNavigate } from 'react-router';
import {editdelete} from '../data';
import { Icon } from '@iconify/react';
import fileEditing from '@iconify/icons-icon-park-twotone/file-editing';
import { useStyles } from '../components/layoute';

const Editdelete = () => {
  const navigate = useNavigate();
  const {classes} = useStyles();

  return (
    <Container>
      <Typography variant='h5' fontWeight={500}>What You want to do ?</Typography>

      <Grid container>
      <List sx={{
     width:200,
     padding:0,
    lineHeight:1,
    letterSpacing:0,
    marginTop:'1rem'
      }}
      >
        {editdelete.map(link=>(

          <ListItem onClick={()=>navigate(link.path)} key={link.id}>
            <ListItemButton>
            <ListItemIcon>
              <Icon icon={fileEditing} />
            </ListItemIcon>
              {link.name}
            </ListItemButton>
          </ListItem>
        ))}
        </List>
      </Grid>
    </Container>
  )
}

export default Editdelete
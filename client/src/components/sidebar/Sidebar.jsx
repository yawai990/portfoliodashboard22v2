import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import {List,ListItem,ListItemText,ListItemButton,ListItemIcon, Button } from '@mui/material';
import { NavLinks } from '../../data';
import { useStyles } from '../layoute';
import {Logout} from '../../actions/Auth';
import { useDispatch } from 'react-redux';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {classes}= useStyles();
  const dispatch=useDispatch();

  return (
        <> 
            <List className={classes.list} >
                {NavLinks.map(link=>(
                <ListItem disablePadding
                button
                variant='outlined'
                 key={link.id}
                onClick={()=>navigate(link.path)}
                className={location.pathname === link.path ? classes.active:classes.navLinks}
                
                >
                <ListItemButton>
                  <ListItemIcon>
                    {link.icon}
                  </ListItemIcon>
                  <ListItemText primary={link.name} />
                </ListItemButton>
              </ListItem>    
                ))}
            </List>

               
            <Button variant='contained' 
            onClick={()=>dispatch(Logout())}
            style={{
              maxWidth:'130px',
              margin:'0 auto',
              color:'white'
            }}>Log Out</Button>
        </>
  )
}

export default Sidebar
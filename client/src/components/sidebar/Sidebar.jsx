import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import {List,ListItem,ListItemText,ListItemButton,ListItemIcon } from '@mui/material';
import { NavLinks } from '../../data';
import { useStyles } from '../layoute';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {classes}= useStyles();

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
        </>
  )
}

export default Sidebar
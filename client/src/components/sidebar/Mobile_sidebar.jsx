import React from 'react';
import {NavLinks} from '../../data';
import {Card,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Button,Container} from '@mui/material'
import { useStyles } from '../layoute';
import { useDispatch } from 'react-redux';
import {Logout} from '../../actions/Auth';
import { useGlobalContext } from '../../context';
import { useNavigate,useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import timesCircleSolid from '@iconify/icons-clarity/times-circle-solid';

const Mobile_sidebar = () => {
  const {classes} = useStyles();
  const {setMbsiderbar} = useGlobalContext();
  const navigate = useNavigate();
  const location =useLocation();
  const dispatch=useDispatch();

  const handleLogout=()=>{
    dispatch(Logout())
    navigate('/')
  }

  return (
    <Container className={classes.sidebar_wrapper} 
    onClick={()=>setMbsiderbar()}
    sx={{display:{sm:'none'}}}
    style={{
      height:document.body.clientHeight + 'px'
    }}>
    <div className={`${classes.mobile_sidebar} ${classes.centering}`}>

      <Card style={{
        minHeight:'90vh',
        position:'relative'
      }}
      sx={{width:{xs:'85%',sm:'80%'}}}
      className={classes.list}
      >
        <div className={classes.mobile_close_btn_container}>
        <Button className={classes.mobile_close_btn} onClick={()=>setMbsiderbar()}>
          <Icon icon={timesCircleSolid} onClick={()=>setMbsiderbar()} />
        </Button>
        </div>
        <List>
                {
                  NavLinks.map(link=>(
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
            onClick={()=>handleLogout()}
            style={{
              maxWidth:'130px',
              margin:'0 auto',
              color:'white'
            }}>Log Out</Button>
      </Card>
      </div>
      </Container>
  )
}

export default Mobile_sidebar
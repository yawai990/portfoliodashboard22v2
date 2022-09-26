import React,{useEffect} from 'react';
import { Button, Toolbar,Typography } from '@mui/material';
import { useStyles } from '../layoute';
import {format} from 'date-fns';

const AppbarCom = () => {
    const {classes} = useStyles();


  return (
      <div className={classes.appbar_container}>
        <Toolbar className={classes.welcome}>
            <Typography>Welcome 
              <span>&nbsp;</span>
               <Typography variant='' color="white" style={{
                display:'inline-block'
              }}>Yawai's Portfolio Dashboard</Typography>
            </Typography>
        </Toolbar>

        <Toolbar>
            <Typography>
                {format(new Date(),'dd-MM-YYY (EEEE)')}
                </Typography>
        </Toolbar>
        </div>

  )
}

export default AppbarCom
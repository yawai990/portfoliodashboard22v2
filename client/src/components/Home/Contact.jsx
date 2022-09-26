import React from 'react';
import {Grid,Typography,Card,CardContent,CardActions} from '@mui/material';
import { useStyles } from './Style';

const Contact = () => {
    const {classes} = useStyles();
    
  return (
    <Grid className={classes.margin}  item sm={12}>
            <Card>

                <CardContent>
                <Typography variant='h6' fontWeight={550} gutterBottom>Contact List</Typography>
                <Typography component='div'>
                    <Typography>Phone</Typography>
                    <Typography>LinkedIn</Typography>
                    <Typography>Whatapps</Typography>
                </Typography>
                </CardContent>
            </Card>
    </Grid>
  )
}

export default Contact
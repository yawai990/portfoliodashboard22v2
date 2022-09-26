import React from 'react';
import {Grid,Card,CardContent,Typography,CardMedia, CardActions, Button} from '@mui/material';
import { useStyles } from './Style';
import { about01 } from '../../assets';

const YourImg = () => {
    const {classes} = useStyles();
  return (
    <Grid className={classes.margin} item sm={12}>
        <Card>

            <CardContent>
            <Typography variant='h6' fontWeight={550} gutterBottom>Your Image In Portfolio</Typography>

            <Card className={classes.flex}>
            
                <CardMedia component='img' image={about01} height='220'  />
                <CardActions>
                    <Button size='small' variant='outlined' fontSize={14} className={classes.btn_submit} >Upload Photo</Button>
                </CardActions>
                </Card>

            </CardContent>
        </Card>
    </Grid>
  )
}

export default YourImg
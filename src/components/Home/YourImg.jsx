import React,{useState} from 'react';
import {Grid,Card,CardContent,Typography,CardMedia, CardActions,Box, Button,Modal} from '@mui/material';
import { useStyles } from './Style';
import {useSelector} from 'react-redux';
import { about01 } from '../../assets';
import UploadModal from './UploadModal';
import { useGlobalContext } from '../../context';


const YourImg = () => {
    const {classes} = useStyles();
    const profile=useSelector(state=>state.rootReducer.image);
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {handleReload} = useGlobalContext();

  return (
    <Grid className={classes.margin} item sm={12}>
        
        <UploadModal open={open} handleClose={handleClose} />

        <Card>
            

            <CardContent>
            <Typography variant='h6' fontWeight={550} gutterBottom>Your Image In Portfolio</Typography>

            <Card className={classes.flex} style={{
                flexWrap:'wrap'
            }}>
                
                <Card>
                <CardMedia component='img' image={profile?.length > 0  ? profile[0].img :about01} height='220'  />
                </Card>

                <CardActions className={classes.margin}>
                    <Button size='small' variant='outlined' fontSize={14} className={classes.btn_submit} 
                    onClick={handleOpen}
                    >Upload Photo</Button>
                </CardActions>
                </Card>

            </CardContent>
        </Card>
    </Grid>
  )
}

export default YourImg
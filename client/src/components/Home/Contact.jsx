import React from 'react';
import {Grid,Typography,Card,CardContent,CardActions} from '@mui/material';
import { useStyles } from './Style';
import { Icon } from '@iconify/react';
import linkedinIcon from '@iconify/icons-line-md/linkedin';
import telegramIcon from '@iconify/icons-line-md/telegram';

const contact=[
  {id:1,link:'',icon: <Icon icon={linkedinIcon} />},
  {id:2,link:'',icon: <Icon icon={telegramIcon} />},
]

const Contact = () => {
    const {classes} = useStyles();
    
  return (
    <Grid className={classes.margin}  item sm={12}>
            <Card>

                <CardContent>
                <Typography variant='h6' fontWeight={550} gutterBottom>Contact List</Typography>

                <Typography component='div' className={classes.flex} style={{
                  flexWrap:'wrap'
                }}>

                  {contact.map(c=>(
                                <Card key={c.id} className={classes.centering} style={{
                                  width:'50px',
                                  height:'50px',
                                  fontSize:'30px',
                                  padding:'2px',
                                  margin:'2px 10px',
                                  borderRadius:'50%'
                                }}
                                elevation={3}
                                >
                                  {c.icon}
                                </Card>
                  ))}
                    
           

                </Typography>
                </CardContent>
            </Card>
    </Grid>
  )
}

export default Contact
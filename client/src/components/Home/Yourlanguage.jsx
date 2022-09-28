import React from 'react';
import { Grid,Typography,Card,CardContent } from '@mui/material';
import { useStyles } from './Style';
import {useSelector} from 'react-redux';
import {languageData} from '../../data';

const Yourlanguage = () => {
    const {classes} = useStyles();
    const languages = useSelector(state=>state.rootReducer.languages);

    console.log(languages)

  return (
    <Grid className={classes.margin} item sm={12}>
    <Card variant='outlined' className={classes.card}>
    <CardContent >
       <Typography variant='h6' fontWeight={550} gutterBottom>Your Available Languages</Typography>
            
          <Typography className={classes.appbar_container} component='div'>
            <Grid container spacing={1}>
          {
            languages.length > 0 ?  [0,1,2]?.map(num=>(
              <Grid item key={num} sm={12} md={5} lg={4}>
              <Card className={classes.list} elevation={4}>
                  <Typography fontStyle='italic' fontWeight={550} textTransform='capitalize' letterSpacing={1} className={classes.sm_padding} marginTop={1} marginLeft={0.5}>
                    {num === 0 && 'front end'}
                    {num === 1 && 'Back end'}
                    {num === 2 && 'database'}
                  </Typography>

                  <CardContent>
                    {languages?.map(lang=>(
                        lang.useFor === num ? 
                        <Typography key={lang._id} textTransform='uppercase' letterSpacing={1}>
                       {
                        languageData.map(text=> text.id===lang.language && text.name )
                       }
                          </Typography>:''
                      ))}
                      </CardContent>
                </Card>
     
{/* 
                {lang.useFor === 0 &&    <Card className={classes.list}>
            <Typography fontStyle='italic' textTransform='capitalize' letterSpacing={1}>
              front end
            </Typography>

            <CardContent>

            </CardContent>
          </Card>
          } */}
           
          </Grid>
            )):
            <Typography>There didn't  any languages</Typography>
          }
          </Grid>

          </Typography>
    </CardContent>
    </Card>
</Grid>
  )
}

export default Yourlanguage
import React from 'react';
import { Grid,Typography,Card,CardContent,Container } from '@mui/material';
import { useStyles } from './Style';

const skillsdummy =[
    { id:1, for:0,language:[{name:'html',for:0}] },
    { id:2, for:1,language:[{name:'html',for:0}] },
    { id:3, for:2,language:[{name:'html',for:0}] }
  
  ]
  
const Yourlanguage = () => {
    const {classes} = useStyles();

  return (
    <Grid className={classes.margin} item sm={12}>
    <Card variant='outlined' className={classes.card}>
    <CardContent >
       <Typography variant='h6' fontWeight={550} gutterBottom>Your Available Languages</Typography>
            
          <Typography className={classes.appbar_container} component='div'>
            <Grid container spacing={1}>
          {
            skillsdummy.map(skill=>(
              <Grid item key={skill.id} sm={12} md={5} lg={4}>
              <Card className={classes.list}>
            <Typography fontStyle='italic' textTransform='capitalize' letterSpacing={1}>
              {(skill.for===0 && 'front end') || (skill.for===1 && 'back end' )|| (skill.for===2 && 'database')}
            </Typography>

            <CardContent>

            </CardContent>
          </Card>
          </Grid>
            ))
          }
          </Grid>

          </Typography>
    </CardContent>
    </Card>
</Grid>
  )
}

export default Yourlanguage
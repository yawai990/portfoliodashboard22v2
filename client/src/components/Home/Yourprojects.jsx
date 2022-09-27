import React from 'react';
import { Grid,Typography,Card,CardContent,Skeleton } from '@mui/material';
import { useStyles } from './Style';
import {useSelector} from 'react-redux';
import {RadialChart} from 'react-vis';

const dummy=[
    { id:1, status:0,totalProject:2 },
    { id:2, status:1,totalProject:5 },
    { id:3, status:2, totalProject:7 },
  
  ];

const Yourprojects = () => {
    const {classes} = useStyles();
    const projects = useSelector(state=>state.rootReducer.projects)

    //categorize by project status
    const pending = projects.filter(project=>project.status === 0);
    const finished = projects.filter(project=>project.status === 1);
    const abort = projects.filter(project=>project.status === 2);

    const penPercent = pending.length*100/projects.length
    const finPercent = finished.length*100/projects.length
    const abortPercent = abort.length*100/projects.length

    const myData = [
      {angle: pending.length,subLabel:`${penPercent.toLocaleString()}%`},
      {angle: finished.length,subLabel:`${finPercent.toLocaleString()}%`},
       {angle: abort.length,subLabel:`${abortPercent.toLocaleString()}%`},
  ];

   const colors=['tomato','steelblue','green']
  return (
    <Grid item sm={12} md={12}  className={classes.margin}>
    <Card elevation={4}>
  <Card variant='outlined' className={classes.card}>
      <CardContent >
         <Typography variant='h6' fontWeight={550}>Your Projects</Typography>
              
              <Grid container spacing={2}>
                          <Grid item xs={12} lg={6}>

                            <Card className={classes.margin}>
                              <CardContent className={`${classes.sm_padding} ${classes.centering}`}>
                                {
                                  projects.length > 0 ?
                              
                          <RadialChart data={myData} width={220} height={230}
                          showLabels={true} 
                          colorType={'category'}
                          stroke={'#ddd'}
                          strokeWidth={2}
                          colorRange={colors}/>:
                          <Skeleton variant="circular" width={220} height={220} />
                        }
                              </CardContent>
                            </Card>

                          </Grid>

                          <Grid item xs={12} lg={6}>

                            {projects.length > 0 ? <Card className={classes.margin}>
                              
                              {[0,1,2].map(dum=>(
                                  <CardContent key={dum} className={`${classes.flex} ${classes.away}`}>
                                  <Typography>
                                    {                             
                                    dum === 0 ? 'Pending':'' || 
                                    dum === 1 ? 'Finished':'' || 
                                   dum === 2 ? 'Abort':''}
                                   <span>&nbsp;</span>
                                     Projects</Typography>
                                  <Typography style={{
                                      backgroundColor:dum === 0 ? 'steelblue':'' || 
                                                                  dum === 1 ? 'green':'' || 
                                                                  dum === 2 ? 'tomato':''
                                  }} 
                                  className={`${classes.project_number} ${classes.centering}`}
                                  >
                                 {                             
                                    dum === 0 ? pending.length:'' || 
                                    dum === 1 ? finished.length:'' || 
                                   dum === 2 ? abort.length:''}
                                  </Typography>
                                </CardContent>
                              ))
                            }
                              <div className={classes.margin}>
                              <hr />
                              </div>

                              <CardContent 
                              className={`${classes.flex} ${classes.away}`}
                              >
                                    <Typography>Total Projects</Typography>
                                    <Typography 
                                    style={{
                                      backgroundColor:'blue'
                                    }} 
                                    className={`${classes.project_number} ${classes.centering}`}
                                    >
                                    {projects.length}
                                    </Typography>
                              </CardContent>
                            </Card>
                          :
                          <Card>
                            <Skeleton variant='rounded' animation='wave' width={500} height={250} />
                          </Card>  
                          }

                            

                          </Grid>
              </Grid>

      </CardContent>
      </Card>
      </Card>
  </Grid>
  )
}

export default Yourprojects
import React from 'react';
import {Box, Card,Grid, Paper, Typography} from  '@mui/material';
import {useStyles} from './Style';
import { Icon } from '@iconify/react';
import listIndented from '@iconify/icons-line-md/list-indented';
import thumbsUpTwotone from '@iconify/icons-line-md/thumbs-up-twotone';

const View = () => {
    const {classes} = useStyles();
  return (
    <Grid className={classes.margin} item sm={12}>
        <Card className={classes.sm_padding}>
            
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={8} lg={6}>
                        <Paper className={classes.flex}>

                            <Card style={{width:'30%',minHeight:'120px'}} elevation={0}>
                                <div>
                                <Icon icon={listIndented} style={{fontSize:'3.5rem'}} color='#FF577F' />
                                </div>
                                </Card>
                          

                                <Card elevation={0} style={{minHeight:'120px',flex:1}}>
                                <Typography marginTop={1}>View By</Typography>
                                <Typography fontSize='3rem' textAlign='start'>10
                                <Typography variant='caption'> people</Typography>
                                    </Typography>

                                </Card>
                        </Paper>
                    </Grid>
                   

                    {/* like card */}
                    <Grid item xs={12} sm={8} lg={6}>
                        <Paper className={classes.flex}>

                            <Card style={{width:'30%',minHeight:'120px'}} elevation={0}>
                                <div>
                                <Icon icon={thumbsUpTwotone} style={{fontSize:'3.5rem'}} color='#FF577F' />
                                </div>
                                </Card>
                          

                                <Card elevation={0} style={{minHeight:'120px',flex:1}}>
                                <Typography marginTop={1}>Your Projects Likes</Typography>
                                <Typography fontSize='3rem' textAlign='start'>10
                                <Typography variant='caption'> Likes</Typography>
                                    </Typography>

                                </Card>
                        </Paper>
                    </Grid>
                    </Grid>
        </Card>
   </Grid>
  )
}

export default View
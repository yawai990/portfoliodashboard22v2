import React from 'react';
import {Grid,Paper, Card, CardContent,Typography,Table, TableContainer, TableHead, TableBody, TableRow,Button, TableCell,Skeleton,Box} from '@mui/material';
import ExpTable from './ExpTable';
import { useStyles } from './Style';
import {useSelector} from 'react-redux';
import { expSkeleton } from '../../data';


const YourExp = () => {
  const {classes} = useStyles();
  const exp = useSelector(state=>state.rootReducer.exp);
    
  return (
    <Grid className={classes.margin} item sm={12}>
            <Card>
              <CardContent>
              <Typography variant='h6' fontWeight={550} gutterBottom>Your Experiences</Typography>

              {
                exp.length > 0 ?   <ExpTable exp={exp} />:
                <Box className={`${classes.flex} ${classes.sm_padding}`}>

                  <Table stickyHeader>
                    <TableHead>
                      <TableRow>
                  {
                    expSkeleton.map(skele=>(
                      <TableCell  key={skele.id}>
                      <Skeleton animation="wave">
                      <Typography style={{width:skele.width}}>.</Typography>
              </Skeleton>
              </TableCell>
                    ))
                  }
                  </TableRow>
                  </TableHead>

                  <TableBody>
                  {  
                  [1,2,3,4,5].map(num=>(
                    <TableRow key={num}>
                       {
                    expSkeleton.map(skele=>(
                      <TableCell  key={skele.id} style={{width:skele.width}}>
                      <Skeleton animation="wave">
                      <span style={{width:skele.width,display:'inline-block'}}>.</span>
              </Skeleton>
              </TableCell>
                    ))
                  }
                    </TableRow>
                  ))
                  }
        
                  </TableBody>
                  </Table>
                </Box>
              }

    

              </CardContent>
            </Card>
    </Grid>
  )
}

export default YourExp
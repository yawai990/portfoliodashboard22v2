import React from 'react';
import {Grid,Paper, Card, CardContent,Typography,Table, TableContainer, TableHead, TableBody, TableRow,Button, TableCell} from '@mui/material';
import { useStyles } from './Style';

const dummy =[
  {id:1,year:2018,desc:[
      {id:1,header:'Graduated From YUDE'},
      {id:2,header:"Certified from CVT(Electrical Profession)"},
     {id:3,header:"Participated in ASC 2018 Bangkok"}
  ]},
  {id:2,year:2019,desc:[
     {id:1,header:'Worked as an Electricla Engineer'}
  ]},
  {id:3,year:2021,desc:[
     {id:1,header:'Developer career started'}
  ]},
  {id:4,year:2022,desc:[
    {id:1,header:'Try Something new'}
]},
];

const YourExp = () => {
  const {classes} = useStyles();
  
  return (
    <Grid className={classes.margin} item sm={12}>
            <Card>
              <CardContent>
              <Typography variant='h6' fontWeight={550}>Your Experiences</Typography>

           <TableContainer component={Paper}>
              <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell align='center'>Year</TableCell>
                      <TableCell align='center'>Experienced Works</TableCell>
                      <TableCell align='center'></TableCell>
                    </TableRow>

                  </TableHead>
                  <TableBody>
                   {dummy.map(data=>(
                    <TableRow key={data.id}>
                      <TableCell>{data.year}</TableCell>
                      <TableCell>
                        {data.desc.map((des,ind)=>(
                              <Typography fontSize={14} component={Paper} key={des.id} className={`${classes.margin} ${classes.sm_padding}`}>{des.header}</Typography>
                      ))}
                      </TableCell>
                      <TableCell>
                      {data.desc.map(head=>(
                        <Typography key={head.id}
                        className={`${classes.margin} ${classes.sm_padding}`}
                        >
                          {/* delete function will need to added */}
                          <Button variant='contained' size='small'>
                            Delete</Button>
                        </Typography>
                      ))}
                      </TableCell>
                    </TableRow>
                   ))}
                  </TableBody>
              </Table>
              </TableContainer>

              </CardContent>
            </Card>
    </Grid>
  )
}

export default YourExp
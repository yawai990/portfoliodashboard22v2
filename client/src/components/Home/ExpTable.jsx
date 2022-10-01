import React from 'react';
import {Grid,Paper, Card, CardContent,Typography,Table, TableContainer, TableHead, TableBody, TableRow,Button, TableCell,Skeleton,Box} from '@mui/material';
import { useStyles } from './Style';
import {useSelector} from 'react-redux';

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
  

const ExpTable = ({exp}) => {
    const {classes} = useStyles();

  return (
    <TableContainer component={Paper}>
    <Table>
    <TableHead style={{backgroundColor:'#E2DEA9'}}>
          <TableRow>
            <TableCell align='center'>Year</TableCell>
            <TableCell style={{minWidth:'220px'}}  align='center'>Works</TableCell>
            <TableCell style={{minWidth:'200px'}} align='center'>Education</TableCell>
            <TableCell style={{minWidth:'200px'}} align='center'>Others</TableCell>
          </TableRow>

        </TableHead>
        <TableBody>
         {exp?.map(data=>(
          <TableRow key={data._id}>
            <TableCell align='center'>{data.year}</TableCell>
            <TableCell align='center'>{data.work}</TableCell>
            <TableCell align='center'>{data.education}</TableCell>
            <TableCell align='center'>{data.other}</TableCell>
          </TableRow>
         ))}
        </TableBody>
    </Table>
    </TableContainer>
  )
}

export default ExpTable
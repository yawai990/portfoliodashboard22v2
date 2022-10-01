import React from 'react';
import {Container,Card,Paper,Typography,Table,TableHead,TableBody,TableRow,TableCell, Tab, TableContainer, Button} from '@mui/material';
import {useSelector,useDispatch} from 'react-redux';
import { useStyles } from './style';
import { deleteExp } from '../../actions/experience';
import { useGlobalContext } from '../../context';

const ExperiencesEditDelete = () => {
  const {classes} = useStyles();
  const {handleReload} = useGlobalContext();
  const dispatch = useDispatch();
  const exp = useSelector(state=>state.rootReducer.exp);

  const hadleDelete=(id,year)=>{
    dispatch(deleteExp(id))
    handleReload(`one of ${year} Exp deleted`)
  }

  return (
    <Container>
      <Card className={classes.sm_padding}>
        <Typography variant='h6' textAlign='center' letterSpacing={0.8} fontWeight={600} gutterBottom>Your Experiences</Typography>

        <TableContainer component={Paper}>
        <Table>
          <TableHead style={{backgroundColor:'#D2DAFF'}}>
            <TableRow>
            <TableCell style={{minWidth:'150px'}} align='center'>Year</TableCell>
            <TableCell style={{minWidth:'220px'}}  align='center'>Works</TableCell>
            <TableCell style={{minWidth:'200px'}} align='center'>Education</TableCell>
            <TableCell style={{minWidth:'200px'}} align='center'>Others</TableCell>
            <TableCell style={{minWidth:'200px'}} align='center'></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
         {
         exp.length > 0 ? exp.map(data=>(
          <TableRow key={data._id}>
            <TableCell align='center'>{data.year}</TableCell>
            <TableCell align='center'>{data.work}</TableCell>
            <TableCell align='center'>{data.education}</TableCell>
            <TableCell align='center'>{data.other}</TableCell>
            <TableCell align='center'>
              <Button variant='contained' size='small' style={{backgroundColor:'#EB1D36',color:'#CFD2CF'}}
              onClick={()=>hadleDelete(data._id,data.year)}
              >
                Delete</Button>
            </TableCell>
          </TableRow>
         )): <TableRow>
          <TableCell>
          There is no data to display.
          </TableCell>
          </TableRow>
  
        }
        </TableBody>

        </Table>
        </TableContainer>
      </Card>
    </Container>
  )
}

export default ExperiencesEditDelete
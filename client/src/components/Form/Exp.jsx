import React,{useState,useEffect} from 'react';
import{Container,Card,Typography,TextField, Grid, Button} from '@mui/material';
import { useStyles } from './Style';
import {useDispatch,useSelector} from 'react-redux';
import { addExp } from '../../actions/experience';
import {useGlobalContext} from '../../context';

const init={
  year:'',work:'',education:'',other:''
}

const Exp = () => {
  const {classes} = useStyles();
  const dispatch=useDispatch();
  const [newexp,setNewExp] = useState(init);
  const [error,setError] = useState('');
  const {handleReload} = useGlobalContext();

  const onhandleSubmit=e=>{
    e.preventDefault()
    if(!newexp.work && !newexp.education && !newexp.other){
      setError('Please Fill at least one category')
    }else{
      dispatch(addExp(newexp));
      handleReload("New Exp added")
    }
    setNewExp(init)
  } ;

  useEffect(()=>{
    setTimeout(() => {
        setError('')
    }, 4000);
  },[error])

  return (
    <Container>
      <Card className={classes.sm_padding}>
     <Typography textAlign='center' gutterBottom variant='h5'>Waht's Your New Exp?</Typography>

     <Grid container spacing={2}>

      <Grid item xs={12} md={6}>
      <Card className={classes.sm_padding}>
        <Typography textAlign='center' fontSize={20}>New Experience</Typography>

        <form onSubmit={onhandleSubmit}>

        <TextField required className={classes.form_input} type='number' fullWidth name='year'  value={newexp.year} min={2000} max={2100} size='small' variant='standard' label='Year' onChange={(e)=>setNewExp({...newexp,[e.target.name]:e.target.value})} />
        <TextField className={classes.form_input} fullWidth name='work'  value={newexp.work} size='small' variant='standard' label='Work' onChange={(e)=>setNewExp({...newexp,[e.target.name]:e.target.value})} />
        <TextField className={classes.form_input} fullWidth name='education'  value={newexp.education} size='small' variant='standard' label='Education' onChange={(e)=>setNewExp({...newexp,[e.target.name]:e.target.value})} />
        <TextField className={classes.form_input} fullWidth name='other'  value={newexp.other} size='small' variant='standard' label='Other' onChange={(e)=>setNewExp({...newexp,[e.target.name]:e.target.value})} />

            {
              error && <Typography variant='caption' color='primary'>{error}</Typography>
            }
          
          <Button className={classes.btn_submit} 
          variant='outlined' size='small' type='submit' 
          fullWidth>
            Add New Exp
            </Button>
        </form>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
      <Card className={classes.sm_padding}>
        <Typography>Your Exp In Last Year</Typography>
        </Card>
      </Grid>

     </Grid>
        </Card>
        </Container>
  )
}

export default Exp
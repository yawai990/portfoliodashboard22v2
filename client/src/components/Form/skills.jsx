import React,{useState} from 'react';
import { Paper,TextField,Typography,Grid,Button,FormControl,FormLabel,FormControlLabel,RadioGroup,Radio,Box,Card,CardMedia,CardContent,Container
} from '@mui/material';
import { useStyles } from './Style';

const initSkills={
  language:'',
  date:new Date()
}

const Skills = () => {
  const {classes}= useStyles();
  const [formLoading,setFormLoading]= useState(false);
  const [skills,setSkills] = useState(initSkills);

  const onhandleSubmit =e=>{
    e.preventDafault()

 }
  return (
    <Container>
    <Box component='div' className={classes.form}>

    <Typography textAlign='center' gutterBottom variant='h5'>What is Your New Skills</Typography>

    <Grid container spacing={1.5}>
      <Grid item xs={12} md={8} lg={8}>
        <Paper className={classes.padding}>
    <form style={{width:'100%'}}>
        <Typography textAlign='center' variant='h6'>New Skills</Typography>
        <TextField className={classes.form_input} fullWidth name='name' value={skills.language}  size='small' variant='standard' label='Language' />
        <TextField className={classes.date} fullWidth name='language' value={skills.date} size='small' variant='standard' label='Calendar' />

        <Button className={classes.btn_submit} variant='outlined' size='small' type='submit' fullWidth>{!formLoading ? 'Add Skills':'adding skill'}</Button>
    </form>
    </Paper>
    </Grid>

    <Grid item xs={12} md={4}>
  <Paper className={classes.padding} elevation={1}>
      <Typography variant='h5' textAlign='center' gutterBottom>Your Languages</Typography>
      <Grid container rowSpacing={2}>
          
          </Grid>

      </Paper>
      </Grid>

    </Grid>

  </Box>
  </Container>
  )
}

export default Skills
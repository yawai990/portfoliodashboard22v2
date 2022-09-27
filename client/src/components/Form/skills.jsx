import React,{useState} from 'react';
import { Paper,TextField,Typography,Grid,Button,FormControl,InputLabel,Select,FormControlLabel,RadioGroup,Radio,Box,Card,CardMedia,CardContent,Container, MenuItem
} from '@mui/material';
import { useStyles } from './Style';
import { languages } from '../../data';
import {useSelector} from 'react-redux';
import * as image from '../../assets';

const initSkills={
  language:'',
  for:'',
}

const Skills = () => {
  const {classes}= useStyles();
  const [formLoading,setFormLoading]= useState(false);
  const [skills,setSkills] = useState(initSkills);
  const [useFor,setuseFor] = useState('');
  const languages = useSelector(state=>state.rootReducer.languages);


  const onhandleSubmit =e=>{
    e.preventDefault()

    console.log(skills)
 };

 const set=e=>{
  setSkills({...skills,[e.target.name]:e.target.value})
 }
  return (
    <Container>
    <Box component='div' className={classes.form}>

    <Typography textAlign='center' gutterBottom variant='h5'>What is Your New Skills</Typography>

    <Grid container spacing={1.5}>
      <Grid item xs={12} md={8} lg={8}>
        <Paper className={classes.padding}>

    <form style={{width:'100%'}} onSubmit={onhandleSubmit}>

        <Typography textAlign='center' variant='h6'>New Skills</Typography>

       <FormControl fullWidth variant='standard' className={classes.form_input}>
        <InputLabel>Language</InputLabel>
        <Select label='Language' name='language' className={classes.uppercase} value={skills.language} onChange={(e)=>set(e)}>
          {
            languages.map(lan=>(
              <MenuItem className={classes.uppercase} key={lan._id} value={lan._id}>{lan.language}</MenuItem>
            ))
          }

        </Select>
       </FormControl>

        <Button className={classes.btn_submit} variant='outlined' size='small' type='submit' fullWidth>{!formLoading ? 'Add Skills':'adding skill'}</Button>
    </form>
    </Paper>
    </Grid>

    <Grid item xs={12} md={4}>
  <Paper className={classes.padding} elevation={1}>
      <Typography variant='h5' textAlign='center' gutterBottom>Your Languages</Typography>
          
          <Paper style={{
            flexWrap:'wrap'
          }} className={`${classes.padding} ${classes.divider}`}
          elevation={2}
          >
      {
        languages.length > 0 && languages?.map(lang=>(
          <Card key={lang._id} className={`${classes.centering} ${classes.lang_card} ${classes.margin}`}>
              <img style={{
                width:'80%',
                height:'80%',
                objectFit:'cover',
                objectPosition:'center'
              }} src={image[lang.language]} alt='image' />
          </Card>
        ))
      }
      </Paper>

      </Paper>
      </Grid>

    </Grid>

  </Box>
  </Container>
  )
}

export default Skills
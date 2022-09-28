import React,{useState,useEffect} from 'react';
import { Paper,Typography,Grid,Button,FormControl,InputLabel,Select,Card,Container,Box,MenuItem
} from '@mui/material';
import { useStyles } from './Style';
import { languageData } from '../../data';
import {useSelector,useDispatch} from 'react-redux';
import {createLang} from '../../actions/languages';
import * as image from '../../assets';

const initSkills={
  language:'',
  useFor:'',
}

const Skills = () => {
  let error = [];
  const {classes}= useStyles();
  const [formLoading,setFormLoading]= useState(false);
  const [role,setRole] = useState('');
  const [usage,setUsage] = useState('');
  const [skills,setSkills] = useState(initSkills);
  const languages = useSelector(state=>state.rootReducer.languages);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(role){
      const filter = languageData.filter(lang=>lang.id === role);
      setUsage(filter[0].role);
    }
    setSkills({...skills,useFor:usage})
  },[role,usage]);

  const onhandleSubmit =e=>{
    e.preventDefault();
    setFormLoading(true)
        if(skills.language === '' || skills.useFor === ''){
          //call the api which does add the language to the db
          error.push('something went wrong')
          console.log(error)
        }

        if(!error.length){
          dispatch(createLang(skills))
        }
        setFormLoading(false)
        setSkills(initSkills)
 };
 const set=e=>{
  setSkills({...skills,[e.target.name]:e.target.value})
  setRole(e.target.value || '')
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

        <Select label='Language' name='language'
        className={`${classes.uppercase}`} value={skills.language} 
        onChange={(e)=>set(e)}
        >
             <MenuItem className={`${classes.uppercase} ${classes.form_menu}`} value=''>None</MenuItem>
          {
            languageData.map(lan=>(
              <MenuItem className={`${classes.uppercase} ${classes.form_menu}`} key={lan.id} value={lan.id}>{lan.name}</MenuItem>
            ))
          }
        </Select>
       </FormControl>

       <FormControl fullWidth variant='standard' className={classes.form_input} disabled>
        <InputLabel id="demo-simple-select-readonly-label">Usage</InputLabel>
        <Select
          className={classes.uppercase}
          value={usage}
          label="Language use for"
          onChange={e=>setSkills({...skills,usefor:e.target.value})}
          inputProps={{ readOnly: true }}
        >
          {
            ['',0,1,2].map((num,ind)=>(

              <MenuItem value={num} className={classes.uppercase} key={ind}>
                {num === 0 && 'frontend'}
                {num === 1 && 'backend'}
                {num === 2 && 'database'}
              </MenuItem>
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
        languages.length > 0 ? languages?.map(lang=>(
          <Card key={lang._id} 
          className={`${classes.centering} ${classes.lang_card} ${classes.margin}`}
          >
              <img style={{
                width:'80%',
                height:'80%',
                objectFit:'cover',
                objectPosition:'center',
              }} src={image[languageData.filter(name=>name.id === lang.language ? name:null)[0].name]} alt='image' />
          </Card>
        )):
        <Typography>hel hel</Typography>
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
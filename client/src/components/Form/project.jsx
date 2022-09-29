import React,{useState,useEffect} from 'react';
import { Paper,TextField,Typography,Grid,Button,FormControl,FormLabel,FormControlLabel,RadioGroup,Radio,Box,Card,CardMedia,CardContent
} from '@mui/material';
import FileBase64 from 'react-file-base64';
import { useStyles } from './Style';
import { useDispatch,useSelector } from 'react-redux';
import {addProject} from '../../actions/projects';
import Loading from '../Loading/Loading';


const initProject={
    title:'',
    language:'',
    codeLink:'',
    demoLink:'',
    status:null,
    selectedFile:'',
    message:''
}

const Project = () => {
  const {classes}=useStyles();
  const [newProject,setnewProject]=useState(initProject);
  const [err,setErr] = useState('');
  const [formLoading,setFormLoading] = useState(false);
  const recentProject = useSelector(state=>state.rootReducer.projects)
  const dispatch = useDispatch();

  const onhandleSubmit=e=>{
    e.preventDefault();

    if(
      !newProject.title || 
      !newProject.language || 
      !newProject.codeLink || 
      !newProject.demoLink || 
      !newProject.status || 
      !newProject.selectedFile || 
      !newProject.message ){
        setErr('Please Fill all fields')
      }else{
        setFormLoading(true)
        dispatch(addProject(newProject))
      }

    //here the new project data should be add to the database
    setTimeout(() => {
        setFormLoading(false)
    }, 2000);
    setnewProject(initProject);
  };

  useEffect(() => {
    setTimeout(() => {
      setErr('')
    }, 3000);
  }, [err]);

  return (
    <Box component='div' className={classes.form}>

      <Typography textAlign='center' gutterBottom variant='h5'>What is Your New Project</Typography>

      <Grid container spacing={1.5}>

        <Grid item xs={12} md={8}>
          <Paper className={classes.padding}>
      <form onSubmit={onhandleSubmit}>
          <Typography textAlign='center' variant='h6'>New Project</Typography>

          <Typography variant='caption' color="primary">{err ? `**${err}**`:null}</Typography>

          <TextField required className={classes.form_input} fullWidth name='title' value={newProject.title}  size='small' variant='standard' label='Project Name' onChange={(e)=>setnewProject({...newProject,[e.target.name]:e.target.value})} />
   
          <TextField  required className={classes.form_input} fullWidth name='language' value={newProject.language}  size='small' variant='standard' label='Language' onChange={(e)=>setnewProject({...newProject,[e.target.name]:e.target.value.split(',')})} />

          <TextField required className={classes.form_input} fullWidth name='codeLink' value={newProject.codeLink}  size='small' variant='standard' label='Code Link' onChange={(e)=>setnewProject({...newProject,[e.target.name]:e.target.value})} />
        
          <TextField required className={classes.form_input} fullWidth name='demoLink' value={newProject.demoLink} size='small' variant='standard' label='Demo Link'  onChange={(e)=>setnewProject({...newProject,[e.target.name]:e.target.value})} />


          <FormControl className={classes.form_input}>
            <FormLabel>Status</FormLabel>
             <RadioGroup required name='status' row value={newProject.status} onChange={(e)=>setnewProject({...newProject,[e.target.name]:e.target.value})}>

                      <FormControlLabel value={0} control={<Radio />} label='Pending' />   
                      <FormControlLabel value={1} control={<Radio />} label='Finished' />   
                      <FormControlLabel value={2} control={<Radio />} label='Abort' />   
             </RadioGroup>
          </FormControl>

          <div className={classes.form_file}>
          <FileBase64 name='selectedFile' type="file" value={newProject.selectedFile} multiple={ false } onDone={e=>setnewProject({...newProject,selectedFile:e.base64})} />
          </div>

          <TextField required className={classes.form_input}  name='message' fullWidth value={newProject.message} size='small' variant='standard' label='Project Description'  onChange={(e)=>setnewProject({...newProject,[e.target.name]:e.target.value})} />

          <Button className={classes.btn_submit} variant='outlined' size='small' type='submit' fullWidth>{!formLoading ? 'add project':'loading...'}</Button>
      </form>
      </Paper>
      </Grid>

      <Grid item xs={12} md={4}>

      <Paper className={classes.padding} elevation={1}>
        <Typography variant='h5' textAlign='center' gutterBottom>Your Recent Projects</Typography>
        <Grid container rowSpacing={2}>
            {
            recentProject.length > 0 ? recentProject?.slice(-2).map((project,ind)=>(
              <Grid item key={ind+project._id} xs={12}>
              <Card>
                <CardMedia component='img'
                height='160'
                 image={project.selectedFile} alt='project_image' style={{objectFit:'cover',objectPosition:'center'}} />

                <CardContent>
                  <Typography variant='h6' gutterBottom>{project.title}</Typography>

                  <Typography fontSize={14} style={{
                    wordBreak:'break-all'
                  }}>{project.message}</Typography>
                </CardContent>
              </Card>
              </Grid>
            )) : <Grid item>
            <Loading />
           </Grid>
          }
            </Grid>

        </Paper>
        </Grid>

      </Grid>

    </Box>
  )
}

export default Project;
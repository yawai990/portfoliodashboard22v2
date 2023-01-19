import React,{useEffect,useState} from 'react';
import { Icon } from '@iconify/react';
import bars420Solid from '@iconify/icons-heroicons/bars-4-20-solid';
import CssBaseline from '@mui/material/CssBaseline';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import {Drawer,Box,ThemeProvider,AppBar,Grid,Container, Typography, Button} from '@mui/material';
import {Home,AddForm,Editdelete} from './pages';
import {Sidebar,AppbarCom,SkillForm,ProjectForm, ExpForm,Login,MobileSidebar} from './components';
import { ProjectEditDelete,SkillsEditDelete,ContactEditDelete,ExperiencesEditDelete } from './components/editdelete';
import { useStyles } from './components/layoute';
import { useDispatch, useSelector } from 'react-redux';
import {getProjects} from './actions/projects';
import { getAllLanguages } from './actions/languages';
import {getImage} from './actions/image';
import { getAllExp } from './actions/experience';
import { getContact } from './actions/contact';
import { useGlobalContext } from './context';

const drawerWidth = 240;

const theme = createTheme({
  palette:{
    primary:{
      main:'#F96666'
    },
  }
})

const App = () => {
  // const [reload,setReload] = useState(null);
  const {reload,handleReload,mbSidebar,setMbsiderbar} = useGlobalContext();
  const {classes} = useStyles();
  const dispatch = useDispatch();
  const [user,setUser] = useState(null);
  const error = useSelector(state=>state.rootReducer.error);
  const auth=useSelector(state=>state.authReducer);

  useEffect(()=>{
    setUser(null)
    localStorage.removeItem('user')
  },[error])

  useEffect(()=>{
    const getuser =JSON.parse(localStorage.getItem('user'));
    setUser(getuser)
  },[auth,dispatch])


  useEffect(()=>{
    if(user){
      dispatch(getProjects())
      dispatch(getAllLanguages())
      dispatch(getImage())
      dispatch(getAllExp())
      dispatch(getContact())
    }
  },[reload,user,dispatch]);

  useEffect(()=>{
    setTimeout(() => {
      handleReload(null)
    }, 3000);
  },[reload,handleReload])

  return (
    <>
   <BrowserRouter>
    <ThemeProvider theme={theme}>
    <CssBaseline />

    {
      user === null ? <Login />:<>

            {mbSidebar && <MobileSidebar />}

            <AppBar className={classes.appbar} elevation={1} sx={{width: { sm: `calc(100% - ${drawerWidth}px)` }}}>
                <AppbarCom />
                </AppBar>

                <Box sx={{display:'flex'}}>

                  <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { xs: 0 } }}>
                  <Drawer 
                  variant='permanent'
                  anchor='left'
                  sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                  }}
                  open
                  >
                        <Sidebar />
                  </Drawer>
                  </Box>
                  
                  <Container 
                  component='main'
                  className={classes.container}
                  sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` },minHeight:'100vh' }}
                  >
                  <div className={classes.toolbar}></div>

                    <Button 
                    onClick={()=>setMbsiderbar()}
                    className={classes.mobile_btn} 
                    size='small' sx={{display:{sm:'none'}}}
                    >
                    <Icon icon={bars420Solid} />
                    </Button>

                      <Grid container paddingBottom={4}>
                    <Routes>
                      <Route path='/' element={<Home />} />
                      <Route path='/dashboard' element={<Home />} />
                      <Route path='/addform' element={<AddForm />} />
                      <Route path='/addform/addnewprojects' element={<ProjectForm />} />
                      <Route path='/addform/addnewskills' element={<SkillForm />} />
                      <Route path='/addform/addnewexp' element={<ExpForm />} />
                      <Route path='/addform/edit_delete' element={<Editdelete />} />
                      <Route path='/projects/edit_delete' element={<ProjectEditDelete />} />
                      <Route path='/experiences/edit_delete' element={<ExperiencesEditDelete />} />
                      <Route path='/skills/edit_delete' element={<SkillsEditDelete />} />
                      <Route path='/contact/edit_delete' element={<ContactEditDelete />} />
                    </Routes>

                    </Grid>

                    <Typography component='div' className={`${classes.Footer} ${classes.centering}`}>
                      <Typography fontSize={14}>All Right reserved. Copyright by : &copy; Yawai 2022</Typography>
                    </Typography>

                    </Container>

              </Box>

            {
              reload !== null &&  <div className={`${classes.pop_up} ${classes.centering}`}>
              <div className={classes.progress_container}>
              
                        <div style={{
                          animation:'ani 2.8s linear infinite'
                        }} className={classes.progress}></div>

                        </div>
                        <Typography>{reload}</Typography>
                      </div>
                      }

                  </>
    }
   </ThemeProvider>
   </BrowserRouter>
   </>
  )
}

export default App
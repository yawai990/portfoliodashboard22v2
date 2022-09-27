import React,{useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import {Drawer,Box,ThemeProvider,AppBar,Grid,Container, Typography} from '@mui/material';
import {Home,AddForm,Editdelete} from './pages';
import {Sidebar,AppbarCom,SkillForm,ProjectForm} from './components';
import { ProjectEditDelete,SkillsEditDelete,ContactEditDelete,ExperiencesEditDelete } from './components/editdelete';
import { useStyles } from './components/layoute';
import { useDispatch } from 'react-redux';
import {getProjects} from './actions/projects';

const drawerWidth = 240;

const theme = createTheme({
  palette:{
    primary:{
      main:'#F96666'
    },
  }
})

const App = () => {
  const {classes} = useStyles();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProjects())
  },[dispatch])

  return (
    <>
   <BrowserRouter>
    <ThemeProvider theme={theme}>
    <CssBaseline />

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
          <Grid container paddingBottom={4}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Home />} />
          <Route path='/addform' element={<AddForm />} />
          <Route path='/addform/addnewprojects' element={<ProjectForm />} />
          <Route path='/addform/addnewskills' element={<SkillForm />} />
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
   </ThemeProvider>
   </BrowserRouter>
   </>
  )
}

export default App
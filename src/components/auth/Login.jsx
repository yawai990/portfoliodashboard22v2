import React,{useState,useEffect} from 'react';
import {Container,Card,Typography, Button,InputAdornment,IconButton, OutlinedInput, InputLabel,Box,Modal} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Login } from '../../actions/Auth';
import {useStyles} from '../layoute';
import { useDispatch, useSelector } from 'react-redux';

const initState={
    email:'',
    password:'',
    showPassword:false
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#5F6F94',
  color:'#B7C4CFs',
  borderRadius:'10px',
  boxShadow: 24,
  p: 4,
};

const LoginForm = () => {
    const {classes} =useStyles();
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false);
    const [values,setValues] = useState(initState);
    const user = useSelector(state=>state.authRouter);
    const loginErrors= useSelector(state=>state.authReducer.error);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
      setOpen(false)
      setLoading(prev=>!prev)
    };

    useEffect(()=>{
      if(loginErrors.length > 0 ) handleOpen()
    },[loginErrors])

    useEffect(()=>{
      setLoading(false)
    },[user])

    const handleSubmit = e=>{
        e.preventDefault();
        dispatch(Login(values))
        setLoading(true)
        setValues(initState)
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

  return (
        <Container style={{minHeight:'100vh'}} className={classes.centering}>

           <Card style={{padding:'8px 10px'}}>
            <Typography variant='h6' textAlign='center'>Login</Typography>

              {
                loginErrors?.map((err,ind)=>(
                  <Modal
        open={open}
        onClose={handleClose}
        key={ind}
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {err.message}
          </Typography>
        <Button style={{
          marginTop:'0.5rem',
          backgroundColor:'#25316D'
        }} fullWidth 
        onClick={handleClose} 
        variant='contained'
        >
          Ok</Button>
        </Box>
      </Modal>
                ))
              }    

            <form className={classes.list} onSubmit={handleSubmit}>
                <div style={{marginBottom:'0.8rem'}}>
                <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                <OutlinedInput variant='outlined' size='small'
                value={values.email}
                fullWidth
                onChange={handleChange('email')}
                />
                </div>

                <div style={{marginBottom:'0.8rem'}}>
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput variant='outlined' size='small'
                  value={values.password}
                  id="outlined-adornment-password"
                  onChange={handleChange('password')}
                fullWidth type={values.showPassword ? 'text':'password'}
               endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility />:<VisibilityOff />}
                  </IconButton>
                </InputAdornment>
               }
                />
                </div>
                <Button type='submit' fullWidth variant='contained'>
                  {
                  !loading ? 'Log In':'Loading...'
                }</Button>
            </form>

            <Typography variant='caption' textAlign='center'>
             user :aungaung@gmail.com password:123
            </Typography>
           </Card>
        </Container>
  )
}

export default LoginForm
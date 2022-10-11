import React,{useState,useEffect} from 'react';
import {Container,Card,Typography, Button,InputAdornment,IconButton, OutlinedInput, InputLabel} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Login } from '../../actions/Auth';
import {useStyles} from '../layoute';
import { useDispatch, useSelector } from 'react-redux';

const initState={
    email:'',
    password:'',
    showPassword:false
}

const LoginForm = () => {
    const {classes} =useStyles();
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false);
    const [values,setValues] = useState(initState);
    const user = useSelector(state=>state.authRouter);

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
           </Card>
        </Container>
  )
}

export default LoginForm
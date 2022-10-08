import { Navigate } from 'react-router';
import * as api from '../api';

export const Login = (loginData)=>async(dispatch)=>{
    try {
        const {data} = await api.Login(loginData);

        dispatch({type:'LOGIN',payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const Logout =()=>async(dispatch)=>{
    localStorage.removeItem('user');
       dispatch({type:'LOGOUT',payload:null})
};

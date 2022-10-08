const authRoute = require('express').Router();
const {login,reigsterUser} =require('../controllers/auth/auth');

authRoute.post('/login',login)      
                .post('/signup',reigsterUser);

module.exports =authRoute;
const emailRouter =require('express').Router();
const {sendEmail} = require('../controllers/email');

emailRouter.post('/sends',sendEmail);

module.exports  = emailRouter;
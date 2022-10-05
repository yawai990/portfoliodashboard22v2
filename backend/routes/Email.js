const emailRouter =require('express').Router();
const {sendEmail} = require('../controllers/Email');

emailRouter.post('/sends',sendEmail);

module.exports  = emailRouter;
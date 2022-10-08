const contactRoute = require('express').Router();
const authenticateToken = require('../middleware/auth');
const {getContact,updateContact} = require('../controllers/Contact');

contactRoute.get('/get_contactlist',getContact)
                      .put('/update_contactlist/:id',authenticateToken,updateContact);

module.exports  = contactRoute;
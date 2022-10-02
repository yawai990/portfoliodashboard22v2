const contactRoute = require('express').Router();
const {getContact,updateContact} = require('../controllers/Contact');

contactRoute.get('/get_contactlist',getContact)
                      .put('/update_contactlist/:id',updateContact);

module.exports  = contactRoute;
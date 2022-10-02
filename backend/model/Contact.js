const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    email:String,
    phone:String,
    linkedIn:String,
    telegram:String,
    viber:String
});

const Contact = mongoose.model('Contact',ContactSchema);

module.exports = Contact;
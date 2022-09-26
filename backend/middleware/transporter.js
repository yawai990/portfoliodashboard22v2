const nodemailer = require('nodemailer');

const transporter =nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    service:'gmail',
    auth: {
        user: 'tristanhero990z@gmail.com',
        pass:'iffhththsizrpjll'
    },
});

module.exports = transporter;
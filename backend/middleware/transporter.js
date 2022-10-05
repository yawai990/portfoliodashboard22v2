const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter =nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, 
    service:'gmail',
    auth: {
        user:process.env.AUTH_EMAIL,
        pass:process.env.AUTH_PASS
    },
});

module.exports = transporter;
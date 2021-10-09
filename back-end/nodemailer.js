const nodemailer = require('nodemailer');
const env = require('dotenv');
env.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'miryam4465@gmail.com',
        pass: process.env.PASSWORD
    }
});

const mailOptions = {
    from: 'miryam4465@gmail.com',
    to: 'r0556723327@gmail.com',
    subject: 'hello simcha',
    text: 'bla bla bla bla bla bla bla bla bla!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

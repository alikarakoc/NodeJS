var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nodekitap@gmail.com',
        pass: 'Sifre12345678'
    }
});
transporter.sendMail({
    to: 'mehmetcanker@gmail.com',
    subject: 'NodeMailer Mail Başlık',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
});
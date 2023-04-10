const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mailSendRouter = express.Router();
const { getReceiversString } = require('../routes/prepare');
mailSendRouter.use(bodyParser.json({limit: '20mb'}))
mailSendRouter.use(bodyParser.urlencoded({limit: '20mb',extended: false}))
const multer = require('multer'); 
const upload = multer({ dest: 'uploads/' }); //папка в root директорията в която се запазват различните ъплоуди
const fs = require('fs'); // 34-и ред
let emailSubject, emailText, emailReceivers;
mailSendRouter.post('/send-email-data', upload.any(), (req, res) => {
    const data = req.body;
    emailSubject = data.subject;
    emailText = data.message;
    console.log(emailSubject);
    console.log(emailText);
    emailReceivers = getReceiversString();
    async function test () {
        let transportUnit = nodemailer.createTransport({
            service: '',
            auth: {
                user: "",
                pass: ""
            }
        });
        let infoMail = {
            from: '"" <>',
            to: emailReceivers,
            subject: emailSubject,
            text: emailText,
            attachments: req.files.map(file => ({
                filename: file.originalname,
                content: fs.readFileSync(file.path), //за да изпратя шибания content и да не ми корпутва скапания файл постоянно 
                contentType: file.mimetype
            })),
        }
        console.log(infoMail.attachments);
        console.log(req.body);
        console.log(req.files);
        transportUnit.sendMail(infoMail, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log(`Email sent: ${info.response}`);
            }
        })
    }
    test()
    res.end();
})
module.exports = mailSendRouter;


const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mailSendRouter = express.Router();
const { getReceiversString } = require('../routes/prepare');
mailSendRouter.use(bodyParser.json())
mailSendRouter.use(bodyParser.urlencoded({extended: false}))
let emailSubject, emailText, emailReceivers;
mailSendRouter.post('/send-email-data', (req, res) => {
    const data = req.body;
    emailSubject = data.subject;
    emailText = data.message;
    emailReceivers = getReceiversString();
    async function test () {
        let transportUnit = nodemailer.createTransport({
            service: 'outlook',
            auth: {
                user: "",
                pass: ""
            }
        });
        let infoMail = {
            from: '"Gosho Hubavecut" <Nikolai4ac@students.softuni.bg>',
            to: emailReceivers,
            subject: emailSubject,
            text: emailText
        }
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


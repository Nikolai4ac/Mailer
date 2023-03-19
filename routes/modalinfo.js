const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const router4 = express.Router();
const { getReceiversString } = require('../routes/prepare');
router4.use(bodyParser.json())
router4.use(bodyParser.urlencoded({extended: false}))
let emailSubject, emailText, emailReceivers;
router4.post('/send-email-data', (req, res) => {
    const data = req.body;
    emailSubject = data.subject;
    emailText = data.message;
    emailReceivers = getReceiversString();
    function test () {
        let transportUnit = nodemailer.createTransport({
            service: 'outlook',
            auth: {
                user: "user@domain.com",
                pass: "password"
            }
        });
    
        let infoMail = {
            from: '"Gosho hubaveca" <user@domain.com>',
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
module.exports = router4;


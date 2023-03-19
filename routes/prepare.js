const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const router3 = express.Router();
router3.use(bodyParser.json());
let receiversString;
router3.post('/send-email', (req, res) => {
    const data = req.body;
    let receivers = "";
    for (let i = 0; i < data.length; i++) {
        receivers += data[i].email += ', ';
    }
    receiversString = receivers.slice(0, -2);
    console.log(receiversString);
    res.end();
})
module.exports = router3;

// function test () {
//     let myAccount = nodemailer.createTestAccount();

//     let transportUnit = nodemailer.createTransport({
//         service: 'outlook',
//         auth: {
//             user: 
//             pass: 
//         }
//     });

//     let infoMail = {
//         from: '"Gosho hubaveca" <Nikolai4ac@students.softuni.bg>',
//         to: receiversString,
//         subject: "vechniqt ergen",
//         text: "az sum gosho hubavecat"
//     }

//     transportUnit.sendMail(infoMail, function (error, info) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log(`Email sent: ${info.response}`);
//         }
//     })
// }
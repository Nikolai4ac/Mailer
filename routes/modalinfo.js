const express = require('express');
const bodyParser = require('body-parser');
const router4 = express.Router();
router4.use(bodyParser.json())
router4.use(bodyParser.urlencoded({extended: false}))
let emailSubject, emailText;
router4.post('/send-email-data', (req, res) => {
    const data = req.body;
    emailSubject = data.subject;
    emailText = data.message;
    res.end();
})

module.exports = router4;
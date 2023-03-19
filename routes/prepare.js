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
    res.end();
})
module.exports = {router3, getReceiversString: function () {
    return receiversString;
  }};


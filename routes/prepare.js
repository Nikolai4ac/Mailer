const express = require('express');
const bodyParser = require('body-parser');
const router3 = express.Router();
const { deleteFromTable } = require('../routes/MySql');
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
router3.delete('/delete-user-data', (req, res) => {
    const data = req.body;
    for (let el of data) {
        const firstName = el.first_name;
        const lastName = el.last_name;
        const email = el.email;
        deleteFromTable([firstName, lastName, email])
    }
    res.end();
})
module.exports = {router3, getReceiversString: function () {
    return receiversString;
  }};


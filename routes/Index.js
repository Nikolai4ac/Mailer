const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}))
const { insertInTable } = require('../routes/MySql');
router.post('/create-list', (req,res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    insertInTable([fname, lname, email])   
    res.redirect('/receiver-list');
})

module.exports = router;
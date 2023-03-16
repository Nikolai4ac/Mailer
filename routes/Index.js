const express = require('express');
const router = express.Router();
const { insertInTable } = require('../routes/MySql');
router.post('/create-list', (req,res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    insertInTable([fname, lname, email])   
    res.redirect('/receiver-list');
})
module.exports = router;
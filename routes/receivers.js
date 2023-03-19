const express = require('express');
const router2 = express.Router();
const db = require('../dbconnection')

router2.get('/receiver-list', async function(req, res, next) {
    let sql = 'SELECT * FROM customers';
    db.query(sql, async function(err, data, fields) {
        if (err) { 
            throw err;
        }
        res.render('index', {userData: data})
    })
})
module.exports = router2;
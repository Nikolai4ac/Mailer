const express = require('express');
const router2 = express.Router();
const db = require('../dbconnection')

router2.get('/receiver-list', function(req, res, next) {
    let sql = 'SELECT * FROM customers';
    db.query(sql, function(err, data, fields) {
        if (err) { 
            throw err;
        }
        console.log(data);
        res.render('index', {userData: data})
    })
})
module.exports = router2;
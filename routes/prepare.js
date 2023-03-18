const express = require('express');
const router3 = express.Router();
router3.post('/send-email', (req, res) => {
    const data = req.body;
    console.log(data);
    res.end();
})
module.exports = router3;


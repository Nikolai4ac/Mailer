const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const Index = require('.//routes/Index')
const path = require('path')
const { router1 } = require('./routes/MySql')
const router2 = require('./routes/receivers')
const router3 = require('./routes/prepare')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))
app.use('/', Index);
app.use('/', router1);
app.use('/', router2);
app.use('/', router3)
app.get('/', (req,res) => {
    res.redirect('/receiver-list');
})
app.use("/public/", express.static('./public/'))
app.use(express.json());
app.listen(port, (error) => { 
    if (error) { 
        throw error;
    }
    else {
        console.log(`Server is listening on port: ${port}`);
    }
})
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const path = require('path');

const {database} = require('./config');
const {router} = require('./routes');

const PORT  = process.env.PORT || 8001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/pics',express.static('src/photos'));

app.use(cors());
app.use('/',router);

module.exports = {
    start : function(){
        app.listen(PORT, ()=>{
            console.log('App running on port:' + PORT);
            database();
        })
    }
}

const express = require('express');
require('dotenv').config();
const {database} = require('./config');
const {router} = require('./routes');
const cors = require('cors');
const app = express();
app.use(cors())
const PORT  = process.env.PORT || 8001;
app.use('/',router);

module.exports = {
    start : function(){
        app.listen(PORT, ()=>{
            console.log('App running on port:' + PORT);
            database();
        })
    }
}

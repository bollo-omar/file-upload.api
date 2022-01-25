const express = require('express');
const controller = require('../controller');
const {upload, uploadImage} = controller;
const path = require('path');
const {getimage} = require('../controller/imageurl');

const router = express.Router();

router.get('/application',(req,res,next) => {
    res.json(
        {
             application : "file upload",
             version : "1.0.0",
             api :{
                 POST : "localhost:3001/upload",
                 GET : "localhost:3001/upload"
             }
        })
});
router.post('/upload',uploadImage, upload);
router.post('/fetch-url',getimage);


module.exports = router;


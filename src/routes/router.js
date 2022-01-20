const express = require('express');
const { upload, uploadImage } = require('../controller');

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

module.exports = router;
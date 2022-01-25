const fetchUrl = require("../service/fetchImageUrl");
const path = require('path');
module.exports ={
    getimage : (req, res) => {

        const id = req.body.id;   
       
        fetchUrl(id).then(image=>{
            
            res.sendFile(image.fileName,{root : path.join(__dirname,'../photos/')});
        }).catch(err=>{
             res.json({error: err.message});
        });

      }
}


    

const { Image } = require("../model")

const fetchUrl = async (id)=>{
 try {

    const url = await Image.findOne({_id:id});
    
     return url;
 } catch (error) {
     return error.message;
 }
}
module.exports = fetchUrl;
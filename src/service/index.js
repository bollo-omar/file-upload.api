const {Image} = require("../model")

const createImage =  (file)=>{
    
    const{ fieldname, originalname, encoding, mimetype , destination , filename , size} = file;
    const url = process.env.IMAGE_URI+"/"+filename;
    try {
       const data = Image.create({
            fieldName : fieldname,
            originalName : originalname,
            encoding : encoding,
            mimeType : mimetype,
            destination : destination,
            fileName : filename,
            url,
            size: size
        });
        return data;
                      
    } catch (error) {
       console.log(error.message);
    }
    
}
module.exports = createImage;
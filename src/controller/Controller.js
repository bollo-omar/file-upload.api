const multer = require('multer');
const createImage = require('../service');

const multerConfig = multer.diskStorage({
    destination : (req,file,callback)=>{
        callback(null,'src/photos/')
    }
    ,filename : (req, file, callback)=>{
        const ext = file.mimetype.split('/')[1];

        const postfix = Date.now();

        callback(null,`img_${postfix}.${ext}`);
       
    } 
})

const isImage = (req, file, callback)=>{
    
    file.mimetype.startsWith('image')? callback(null,true) : callback(new Error(`Invalid file type, only image files are accepted`))
}
const uploader = multer({
    storage : multerConfig,
    fileFilter : isImage
})

module.exports = {
    uploadImage: uploader.single('photo'),
    upload : (req, res)=>{

        const file = req.file
        createImage(file).then((value) => {
            
            res.status(200).json({message: "image uploaded successfully",image:value._doc.fileName,mimeData:value._doc
        });
            
        }).catch((err) => {
            console.error(err);
        })    
    }
}
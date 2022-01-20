const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    fieldName : String,
    originalName : String,
    encoding : String,
    mimeType : String,
    destination : String,
    fileName : String,
    url : String,
    size: String
});

const Image = mongoose.model('Image',Schema);


module.exports = Image;
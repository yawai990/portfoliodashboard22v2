const mongoose = require('mongoose');

const ImageSchema=mongoose.Schema({
    img: { 
        type:String,
        required:true
    },
    upload_at:{
        type:Date,
        default:new Date()
    }
});

const Image=mongoose.model('Image',ImageSchema);

module.exports = Image;
const mongoose = require('mongoose');

const ExpSchema=mongoose.Schema({
    year:{
        type:Number,
        required:true
    },
    work:String,
    education:String,
    other:String,
});

const Experience =mongoose.model('Experience',ExpSchema);

module.exports = Experience;
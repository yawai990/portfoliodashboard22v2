const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    language:[String],
    demoLink:{
        type:String,
        required:true
    },
    codeLink:{
        type:String,
        required:true
    },
    selectedFile:String,
    message:String,
    like:{
        type:Number,
        default:0
    },
    status:{
        type:Number,
        default:0,
        // 0 = pending, 1=finished, 2=abort
    },
    createAt:{
        type:Date,
        default:new Date()
    }
});

const Projects = mongoose.model('Projects',projectSchema);

module.exports =  Projects;
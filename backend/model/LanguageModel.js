const moongoose = require('mongoose');

//usefor means like frontend,backend,database,ui/ux like this
const languageSchema = moongoose.Schema({
    language:{
        type:Number,
        required:true
    },
    useFor:Number
});

const Language = moongoose.model("Language",languageSchema);

module.exports = Language;
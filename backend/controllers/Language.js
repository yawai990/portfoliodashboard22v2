const Language = require('../model/LanguageModel');

const getLanguages = async(req,res)=>{
    try {
        const data = await Language.find();

        console.log(data)
    } catch (error) {
            res.status(400).json({
                message:error.message
            })
    }
};

module.exports = {getLanguages};
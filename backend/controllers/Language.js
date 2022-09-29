const Language = require('../model/LanguageModel');
const { default: mongoose } = require('mongoose');

const getLanguages = async(req,res)=>{
    try {
        const data = await Language.find();

        res.status(200).json({
            languages:data
        })
    } catch (error) {
            res.status(400).json({
                message:error.message
            })
    }
};

const addLanguage=async(req,res)=>{
    const language = req.body;

    const addLang = new Language(language)

    //before we add the new language i need to check the language is exist or not in the db
    try {
            await addLang.save();

            res.status(201).json({
                message:'New language added',
                languages:addLang
            })
    } catch (error) {
        console.log(error)
    }
};

const deleteLanguage = async(req,res)=>{
    const id = req.params.id;


    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({
        message:'No language with that id'
    });

    try {
        await Language.findByIdAndRemove(id)
        res.json({
            message:'Language deleted'
        })

    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}

module.exports = {getLanguages,addLanguage,deleteLanguage};
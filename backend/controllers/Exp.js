const { default: mongoose } = require('mongoose');
const Experience = require('../model/Experience');

const getExp = async(req,res)=>{
    try {   
            const data = await Experience.find();

            res.status(200).json({
                experience:data
            })
    } catch (error) {
            res.status(400).json({
                message:error.message
            })
    }
};

const addExp = async(req,res)=>{
    const exp = req.body;

    const newExp = new Experience(exp);

    try {   
        await newExp.save()

        res.status(201).json({
            message:'One Exp added',
            experience:newExp
        })
    } catch (error) {
            res.status(409).json({
                message:error.message
            })
    }
};

const deleteExp= async(req,res)=>{
    const id=  req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({
        message:'no exp with that id'
    })
    try {
        await Experience.findByIdAndDelete(id)
        
        res.json({
            message:`Experience(${id}) is deleted`
        })
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}

module.exports ={getExp,addExp,deleteExp}
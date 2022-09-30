const Image = require('../model/Image');
const { default: mongoose } = require('mongoose');

const getImage=async(req,res)=>{
    try {
           const data = await Image.find();

            res.status(200).json({
                data
            })
    } catch (error) {
            res.status(400).json({
                message:error.message
            })
    }
};

const updateImage=async(req,res)=>{
   const id = req.params.id;
    const updateImage = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({
        message:'No Image with that id'
    });

    try {
     const data = await Image.findByIdAndUpdate(id,{...updateImage,id},{new:true})

        res.json({
            data
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message:error.message
        })
    }
};

module.exports ={getImage,updateImage};
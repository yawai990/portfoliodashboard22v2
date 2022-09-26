const { default: mongoose } = require('mongoose');
const Projects = require('../model/ProjectModel');

const getAllProject =async(req,res)=>{
    try {
        const projects = await Projects.find();

        res.status(200).json(projects) 
    } catch (error) {
            res.status(404).json({
                message:error.message
            })
    }
};

const addNewProject=async(req,res)=>{
    const project= req.body;

    const newProject = new Projects(project)
    try {
        await newProject.save()

        res.status(201).json({
            message:'New Project added',
            data:newProject
        })
        
    } catch (error) {
            res.status(409).json({
                message:error.message
            })
    }
};

const deleteProject = async(req,res)=>{
    const {id}=req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({
        message:'No Project with that id'
    })
    try {
        await Projects.findByIdAndRemove(id)
        res.json({
            message:'Project deleted'
        })
    } catch (error) {
            res.status(400).json({
                message:error.message
            })
    }
};

module.exports = {getAllProject,addNewProject,deleteProject};
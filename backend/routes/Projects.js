const ProjectRoute = require('express').Router();
const {getAllProject,addNewProject,deleteProject}= require('../controllers/Project');

ProjectRoute.get('/all_projects',getAllProject)
                    .post('/add_new_project',addNewProject) 
                    .delete('/project_delete/:id',deleteProject);

module.exports = ProjectRoute;
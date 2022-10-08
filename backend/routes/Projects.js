const ProjectRoute = require('express').Router();
const authenticateToken =  require('../middleware/auth');
const {getAllProject,addNewProject,deleteProject}= require('../controllers/Project');

ProjectRoute.get('/all_projects',getAllProject)
                    .post('/add_new_project',authenticateToken,addNewProject) 
                    .delete('/project_delete/:id',authenticateToken,deleteProject);

module.exports = ProjectRoute;
const languageRoutes = require('express').Router();
const {getLanguages,addLanguage,deleteLanguage} =require('../controllers/Language');

languageRoutes.get('/get_languages',getLanguages)
                           .post('/add_language',addLanguage)
                           .delete('delete_language/:id',deleteLanguage)


module.exports =languageRoutes;
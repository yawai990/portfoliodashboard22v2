const languageRoutes = require('express').Router();
const authenticateToken =  require('../middleware/auth');
const {getLanguages,addLanguage,deleteLanguage} =require('../controllers/Language');

languageRoutes.get('/get_languages',getLanguages)
                           .post('/add_language',authenticateToken,addLanguage)
                           .delete('/delete_language/:id',authenticateToken,deleteLanguage)


module.exports =languageRoutes;
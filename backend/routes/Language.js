const languageRoutes = require('express').Router();
const {getLanguages} =require('../controllers/Language');

languageRoutes.get('/get_languages',getLanguages)


module.exports =languageRoutes;
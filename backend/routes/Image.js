const ImageRoute = require('express').Router();
const authenticateToken = require('../middleware/auth');
const {getImage,updateImage} = require('../controllers/Image');

ImageRoute.get('/get_image',getImage)
                    .put('/update_image/:id',authenticateToken,updateImage);

module.exports = ImageRoute;

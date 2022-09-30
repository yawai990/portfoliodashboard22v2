const ImageRoute = require('express').Router();
const {getImage,updateImage} = require('../controllers/Image');

ImageRoute.get('/get_image',getImage)
                    .put('/update_image/:id',updateImage);

module.exports = ImageRoute;

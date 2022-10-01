const expRouter = require('express').Router();
const {getExp,addExp,deleteExp} = require('../controllers/Exp');

expRouter.get('/get_exp',getExp)
                .post('/add_exp',addExp)
                .delete('/delete_exp/:id',deleteExp)


module.exports = expRouter;
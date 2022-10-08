const expRouter = require('express').Router();
const authenticateToken = require('../middleware/auth');
const {getExp,addExp,deleteExp} = require('../controllers/Exp');

expRouter.get('/get_exp',getExp)
                .post('/add_exp',authenticateToken,addExp)
                .delete('/delete_exp/:id',authenticateToken,deleteExp)


module.exports = expRouter;
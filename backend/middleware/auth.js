const jwt = require('jsonwebtoken');

const  authenticateToken =async(req,res,next)=>{

        const authHeaders =req.headers.authorization;
        const token = authHeaders && authHeaders.split(' ')[1];

        if(token === null) return res.statusCode(401)

        //verify token
        jwt.verify(token,process.env.TOKEN_SECRET,(err,user)=>{
            if(err){ 
               res.statusCode(403)
                throw new Error('Token is expired')
        }
            next(user)
        })
};
module.exports = authenticateToken;
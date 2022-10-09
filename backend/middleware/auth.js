const jwt = require('jsonwebtoken');

const  authenticateToken =async(req,res,next)=>{

        const authHeaders =req.headers.authorization;
        const token = authHeaders && authHeaders.split(' ')[1];

        if(token === null) return res.status(401)

        //verify token
        jwt.verify(token,process.env.TOKEN_SECRET,(err,user)=>{
            if(err){ 
               res.status(403).json({
                message:'Your Token is expired,please login again'
               })
        }else{
            next()
        }
        })
};
module.exports = authenticateToken;
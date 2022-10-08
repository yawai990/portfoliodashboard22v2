const errorHandler=(err,req,res,next)=>{

    const statusCode = res.statusCode ? res.statusCod:500;

    console.log(req,res)
    res.status(statusCode)
    
    res.json({
        message:err.message,
    })
};

module.exports = errorHandler;
const errorHandler=(err,req,res,next)=>{

    console.log(req)
    const statusCode = res.statusCode ? res.statusCod:500;

    res.status(statusCode)
    
    res.json({
        message:err.message,
    })
};

module.exports = errorHandler;
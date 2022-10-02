const transporter = require('../middleware/transporter');

const sendEmail =async (req,res)=>{
    const {name,email,phone,message} = await req.body;

    let err = false;
    
    if(!name || !email || !phone || !message){
        res.status(400).json({
            message:'please fill all the fields'
        })
        err = true;
    }
    if(message.length > 100){
        res.status(403).json({
            message:"message characters should be under 1000"
        });
        err = true;
    }
    if(!err){
      transporter.sendMail({
            from:`${name} <${req.body.email}>`, // sender address
            to: "Yawai Aung<yawaiaung.developer@gmail.com>", // list of receivers
            subject: "From portfolio mail", // Subject line
            text: `${message} .
            email:${email}
            this is sender name:${name} 
            Phone:${phone}`, // plain text body
          },(err,info)=>{
            if(err){
                console.log(err)
                res.status(400).json({
                    message:'Somerthing went wrong'
                });
            }else{
                res.status(202).json({
                    message:"message was send"
                  });
                  console.log(info)
            }
          });
    }
}

module.exports = {sendEmail}
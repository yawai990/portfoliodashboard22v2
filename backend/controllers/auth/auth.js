const userModel = require('../../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//@route /user/login
const login=async(req,res)=>{
    const {email,password} = req.body;
    //check the email & password fill or not
    if(!email || !password){
        res.status(400).json({  
            message:'All fields required'
        })
    }else{
        //check the user is registered or not
        const user =await userModel.findOne({email});

        if(user){
            //compare password
            const isMatch =await bcrypt.compare(password,user.password);

                //result responced as a boolean
                if(isMatch){
                    const tokendata={userName:user.userName,role:user.role};
                    //if success create token & send it to the client
                    const token = jwt.sign(tokendata,process.env.TOKEN_SECRET,{expiresIn:'2h'})
                    res.json({
                        user,
                        token
                    });

                }else{
                    res.status(400).json({
                        message:'Wrong Credentails'
                    })
                }
               
            
        }else{
            //if fail send wrong credentials
            res.status(400).json({
                message:'you are not registered with that email,'
            })
        }
    }
};

//@Route /user/signup
const reigsterUser = async(req,res)=>{
    const {userName,email,password,cpassword} = req.body;

    //check the all fields is filled or not
    if(!userName || !email || !password || !cpassword){ 
        res.status(400).json({
        message:'All fields required'
    });
    }else{
        
    //check password 
        if(password !== cpassword){ 
            res.status(400).json({
            message:'Password are not matching,please check password'
        });
     }
     else{
        try {
            //find out the user is exists or not in db with email
        const checkUser = await userModel.findOne({email});
    
        if(checkUser) {
           return res.status(400).json({
            message:'user already existed'
        })
                }else{
                //create user
                //hash password
                    await bcrypt.hash(password,14,(err,hashPassword)=>{
                        if(err){
                            res.status(400).json({
                                message:err.message
                            })
                        }else{
                            const newUser = new userModel({userName,email,password:hashPassword,role:1});

                            newUser.save()  

                            res.status(201).json({
                                message:'User Created'
                            })
                        }
                    })

                }
        } catch (error) {
                res.status(409).json({
                    message:error.message
                })
        }
    }
    }
}

module.exports = {login,reigsterUser};

const user=require('../models/registerUser')
const jwt =require('jsonwebtoken')
require('dotenv').config()

const createToken=(id)=>{
    return jwt.sign({id},process.env.SECRET_KEY,{expiresIn:'3d'})
}


const registerUser=async(req,res)=>{
        const userData=req.body
        // console.log("data fetched",userData);
        try {
            const response=await user.signup(userData)
            const token=createToken(response._id)
            res.status(200).json({
                    success:true,
                    data:{token:token,name:response.name},
                    message:"entry created successfuly" 
            })    

        } catch (error) {
            res.status(400).json(
                {
                    success:false,
                    data:"server error",
                    message:error.message
                }
            )
        }
}

module.exports=registerUser
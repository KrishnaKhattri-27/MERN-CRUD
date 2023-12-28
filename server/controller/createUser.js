const crud=require('../models/crudOperation')

const createUser= async (req,res)=>{
try{
    const {name,email,phone}=req.body;

    const response=await crud.create({name,email,phone,updatedAt:Date.now()});

    res.status(200).json(
        {
            success:true,
            data:response,
            message:"entry created succesfully"
        }
    )
}
catch(error){
    console.log(error);
    res.status(500).json(
        {
            success:false,
            data:"internal server error",
            message:error.message
        }
    )
}
}

module.exports=createUser;
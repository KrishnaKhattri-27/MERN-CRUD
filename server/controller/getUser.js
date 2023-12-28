const crud=require('../models/crudOperation')

const getUser=async(req,res)=>{
    try{
     const response=await crud.find()
     res.status(200).json(
        {
            success:true,
            data:response,
            message:"Fetched successfuly"
        }
     )
    }
    catch(error){
        console.log(error);
        res.status(500).json(
            {
                success:false,
                data:"server error",
                message:error.message
            }
        )
    }
}

module.exports=getUser;
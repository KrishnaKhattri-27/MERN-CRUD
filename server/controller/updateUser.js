const crud=require('../models/crudOperation')


const updateUser=async (req,res)=>{
    try {
        
        const {name,email,phone}=req.body;
        const id=req.params.id;
        const response= await crud.findByIdAndUpdate(
            {_id:id},
            {name,email,phone,updatedAt:Date.now()}
        )
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"entry UPDATED succesfully"
            }
        )

    } catch (error) {
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

module.exports=updateUser;
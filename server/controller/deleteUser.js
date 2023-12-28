const crud=require('../models/crudOperation')


const deleteUser=async (req,res)=>{
    try {
        const id=req.params.id;
        const response= await crud.deleteOne({_id:id})
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"entry deleted succesfully"
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

module.exports=deleteUser;
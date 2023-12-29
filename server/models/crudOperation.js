const mongoose  = require("mongoose");

const crudSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        phone:{
            type:String,
            required:true,
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now()
        },
        ID:{
            type:String,
            required:true,
        }
        
    }
)


module.exports=mongoose.model('crud',crudSchema);
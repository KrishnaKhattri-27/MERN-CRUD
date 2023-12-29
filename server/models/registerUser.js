const mongoose  = require("mongoose");
const bcrypt=require('bcrypt')

const registerUser=mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        phone:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },
        hearAbout:{
            type:Array,
            required:true
        },
        gender:{
            type:String,
            required:true
        },
        state:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },

    }
);

//stastic signup method
registerUser.statics.signup = async function(userData){
    const exists=await this.findOne({email:userData.email})
    
    if(exists)
    throw Error("Email already in use")

    const salt=await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(userData.password,salt)

    const response= await this.create({
        email:userData.email,
        gender:userData.gender,
        hearAbout:userData.hearAbout,
        city:userData.city,
        state:userData.state,
        name:userData.name,
        phone:userData.phone,
        password:hash,

    })

    return response;

};


//static log-in method
registerUser.statics.login = async function(email,password){
    
     
    if(!email || !password)
    throw Error("Email already in use")

    const user=await this.findOne({email})

    if(!user)
    throw Error("Email not exists. Please register first")

    const match=await bcrypt.compare(password,user.password)

    if(!match)
    throw Error("Incoreect Password")

    return user
};


module.exports=mongoose.model('user',registerUser);
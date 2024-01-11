const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"please add the user name"],
    },
    email:{
        type:String,
        required:[true,"please add the email name"],
        unique:[true,"Email address already taken"],
    },
    password:{
        type:String,
        required:[true,"please add password"],
    }
    
},{
    timestamps:true,
})
module.exports=mongoose.model("user",userSchema);
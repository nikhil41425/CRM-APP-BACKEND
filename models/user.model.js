var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var UserSchema=new Schema(
    {
        username:{
            type:String
            
        },
        firstname:{
            type:String,
            required:true
        },
        lastname:{
            type:String,
            required:true
        },
        mobile:{
            type:Number,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        emailId:{
            type:String,
            required:true,
            index:true
        }
    }
);

module.exports=mongoose.model('user',UserSchema)
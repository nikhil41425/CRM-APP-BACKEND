var JWT=require("jsonwebtoken");

var express= require("express");

var UserModel=require("../models/user.model");
var Config=require("../config/app.config");

exports.registerUser=(request,response)=>{

    console.log(request.body);
    var userData=request.body;
    var UserCollection=new UserModel(userData);
    UserCollection.save(function(err, doc){
        if(err){
            response.send({result:err.message})
        }
        if(doc._id){
            var payload={id:doc._id};
            var token=JWT.sign(payload,Config.config.JWT_SECRET)
          response.send({result:"success", token:token});   
        }
    })
}


exports.loginUser= (request,response) => {

    console.log("I am in login");
    var userData= request.body;
    console.log(userData);

        UserModel.findOne({emailId:userData.emailId},(err, doc) => {
            if(err){
                console.log(err);
                response.send({status:false, err:err.message})
            } 
             if(doc){

                console.log('doc found',doc);

                console.log(doc.role,userData.role)
                   
                   if(doc.role == userData.role){
                      console.log('role mathched');
                    if(doc.password == userData.password){
                        var payload={id:doc._id};
                        var token=JWT.sign(payload,Config.config.JWT_SECRET)
                      response.send({result:true,token:token});   
                       }
                       else
                       {
                         response.send({result:false, message:"Password incorrect"})
                       }

                   }
                   else
                   {
                       response.status(401).send({result:false, messaged:"Unauthorized access"});
                   }
                   
             }
        })
}

exports.checkUsername= (request,response) => {

    console.log("In check username");
 
    var userData= request.body;

     UserModel.findOne({username:userData.username},(err,doc) =>{
         if(err){
             console.log(err);
             response.send({status:false, err:err.message});
         }
         if(doc){
               response.send({status:true});
         }
         else
         {
             response.send({status:false});
         }
     })
}
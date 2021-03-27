var express=require('express');
var cors = require('cors');
var app=express();

var DB=require("./config/db.config");
var Config=require("./config/app.config");
var UserRouter=require("./routes/user.route");

app.use(express.json());

app.use(express.urlencoded({extended:true}))

DB.connect();
app.use(cors());
app.use('/user',UserRouter);



app.listen(Config.config.PORT,()=>{
    console.log("server connected tp port no : "+Config.config.PORT);
})
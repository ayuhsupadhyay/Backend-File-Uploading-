 const mongoose=require("mongoose");


 const fileSchma=new mongoose.Schema({
    name:{
        type: String,
        require:true,
    },
    imageUrl:{
        type:String,
    },
    tags:{
        type:String,
    },
    email:{
        type:String
    }
 });


 const File=mongoose.model("File",fileSchma);
 module.exports=File;
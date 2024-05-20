const mongoose=require("mongoose");
require("dotenv");


const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log("db connected successfuly..."))
    .catch((error)=>{
        console.log("db connection is failed ")
        console.error(error.message)
        process.exit(1);

    })
}
module.exports=dbConnect;
//app create 
const express=require("express");


const app=express();
require("dotenv").config();
const PORT=process.env.PORT|| 6000

//port find krna h 





//middleware add krna  h

app.use(express.json());
const fileupload=require("express-fileupload");
app.use(fileupload()); 





//db se connect
const dbConnect=require("./config/database")
dbConnect()




// cloud se connect krna h 
const cloudinary=require("./config/cloudinary")
cloudinary.cloudinaryConnect();



//api route mount krna h 
const upload = require("./routes/FileUpload");

app.use('/api/v1/upload', upload);




//activate krna h server  listen
app.listen(PORT,()=>{
    console.log(`app started successfully  at port ${PORT}`)
})

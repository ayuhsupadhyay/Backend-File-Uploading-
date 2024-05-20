const cloudinary =require("cloudinary").v2;
require("dotenv").config()


exports.cloudinaryConnect=()=>{
    try {
        cloudinary.config({
            clooudName:process.env.CLOUD_NAME,
            api_key:  process.eventNames.API_KEY,
            api_secret: process.env.API_SECRET

        })
        
    } catch (error) {
        console.log(error);

    }

}
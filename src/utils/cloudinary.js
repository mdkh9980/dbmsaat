import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadOnClodinary = async function(localFilePath){
    try {
        if(!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        })
        console.log("File path link : ", response.url);
        fs.unlinkSync(localFilePath);
    } catch (error) {
        console.log(`Error while uploading file to cloudinary ${error}`);
        fs.unlinkSync(localFilePath);
        return null;
    }
}

export { uploadOnClodinary }
const cloudinary = require('cloudinary').v2;
require('dotenv').config();
// Configure Cloudinary with your credentials
// Ensure the following environment variables are set in the .env file
const cloudinaryConnect = () => {
    try{
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
            secure: true,
        });
    }
    catch (error) {
        console.error(`Error connecting to Cloudinary: ${error.message}`);
        process.exit(1);
    }
};

module.exports = cloudinaryConnect;
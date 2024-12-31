const mongoose = require('mongoose')
require('dotenv').config()

const dbConnect = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Connection to DB successful.')
    }
    catch(error){
        console.log(`Error occured in connecting: ${error}`);
        process.exit(1);
    }
}

export default dbConnect;
const mongoose = require('mongoose')
require('dotenv').config()

exports.dbConnect = ()=>{
        mongoose.connect(process.env.MONGODB_URL)
        .then(()=>console.log('Connection to DB successful.'))
        .catch((error)=>{
        console.log(`Error occured in connecting: ${error}`);
        process.exit(1);
    })
}
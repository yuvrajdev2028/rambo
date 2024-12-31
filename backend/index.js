const express=require('express');
const dbConnect = require('./database/database')

require('dotenv').config();

const PORT=process.env.PORT || 5000;

const app=express();

app.listen(PORT,()=>{
    console.log(`App is listening to port ${PORT}`);
})

dbConnect();

app.get('/',(req,res)=>{
    res.send(`<h1>Hello World</h1>`);
})
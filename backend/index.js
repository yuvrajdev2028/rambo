const express=require('express');
const dbConnect= require('./config/database')
require('dotenv').config();
const user = require('./routes/userRoutes');
const response = require('./routes/responseRoutes');
const report = require('./routes/reportRoutes');
const cookieParser = require('cookie-parser');

const PORT=process.env.PORT || 5000;

const app=express();

app.use(cookieParser());
app.use(express.json());

app.use('/api/v1',user);
app.use('/api/v1',response);
app.use('/api/v1',report);

app.listen(PORT,()=>{
    console.log(`App is listening to port ${PORT}`);
})

dbConnect();

app.get('/',(req,res)=>{
    res.send(`<h1>Hello World</h1>`);
})
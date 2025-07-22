const mongoose=require('mongoose');
const User = require('./users');

const reportSchema = new mongoose.Schema({
    volunteerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    ngoId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    image_url:{
        type:String,
    },
    status:{
        type:String,
        enum:['pending','in progress','resolved','rejected'],
        default:'pending'
    },
}, {timestamps:true})

const Report = mongoose.model('Report',reportSchema);

module.exports = Report;
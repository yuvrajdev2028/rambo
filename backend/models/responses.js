const mongoose = require('mongoose');
const { default: User } = require('./users');
const Report = require('./reports');

const responseSchema = mongoose.Schema({
    ngoId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true,
    },
    reportId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Report,
        required:true,
    },
    responseMessage:{
        type:String,
        required:true,
    }
},{timestamps:true})

const Response = mongoose.model('Response',responseSchema);

module.exports = Response;
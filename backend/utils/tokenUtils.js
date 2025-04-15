const jwt=require('jsonwebtoken');
require('dotenv').config();

exports.generateAccessToken=({userId,role})=>{
    try{
        return jwt.sign({
                    userId: userId,
                    role: role,
                }, process.env.JWT_SECRET, {expiresIn: '15m'})
    }
    catch(error){
        console.log(error);
        return null;
    }
}

exports.generateRefreshToken=({userId,role})=>{
    try{
        return jwt.sign({
                    userId: userId,
                    role: role,
                }, process.env.REFRESH_SECRET, {expiresIn: '30d'})
    }
    catch(error){
        console.log(error);
        return null;
    }
}

exports.generateOTPToken=({email,otp})=>{
    try{
        return jwt.sign({
                    email: email,
                    otp: otp,
                }, process.env.OTP_SECRET, {expiresIn: '15m'})
    }
    catch(error){
        console.log(error);
        return null;
    }
}
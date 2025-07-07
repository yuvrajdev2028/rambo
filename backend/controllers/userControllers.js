const User = require('../models/users');
const { hashPassword, comparePassword } = require('../utils/hashUtils');
const jwt = require('jsonwebtoken');
const { generateAccessToken, generateRefreshToken, generateOTPToken } = require('../utils/tokenUtils');
const sendEmail = require('../utils/mailUtils');

exports.signup = async(req,res)=>{
    try{
        console.log("in signup-backend")
        const { name, email, password, role, location, about } = req.body;
        const hashedPassword = await hashPassword(password);
        if(!hashedPassword){
            throw new Error('password cannot be hashed');
        }
        if(role==='volunteer') {
            const newUser = new User({ name, email, password:hashedPassword, role});
            await newUser.save();
        }
        else{
            const newUser = new User({ name, email, password:hashedPassword, role, location, about});
            await newUser.save();
        }
        return res.status(201).json({
            message: 'Signup successfull.'
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            error: `${error}`,
            message: 'Error occured while signing up.',
        })
    }
}

exports.login = async(req,res)=>{
    try{
        const { email, password } = req.body;
        const user = await User.findOne({email});
        const isValid = await comparePassword(password,user.password);
        if(!user || !isValid){
            return res.status(401).json({
                message: 'Invalid Email or Password',
            })
        }
        // Generate Access Token
        const accessToken = generateAccessToken({userId: user._id,role: user.role});

        // Generate Refresh Token
        const refreshToken = generateRefreshToken({userId: user._id,role: user.role});

        if(!accessToken || !refreshToken){
            throw new Error("Error occured while generating tokens.")
        }

        //Set refresh token as a httponly cookie
        res.cookie('refreshToken',refreshToken,{
            httpOnly: true,
            secure: true,
            sameSite: 'Strict'
            })
            .status(200)
            .json({ // Send Access Token in response body
            accessToken: accessToken,
            message: 'Log In Successful.'
        })
    }
    catch(error){
        return res.status(500).json({
            message: 'Error occured while logging in!',
        })
    }
}

exports.logout = (req,res)=>{
    try{
        res.clearCookie('token',{
            httpOnly: true,
            secure: true,
            sameSite: 'Strict'
        });
        return res.status(200).json({
            message: 'Logged Out Successfully!',
        })
    }
    catch(error){
        return res.status(500).json({
            message: 'Logout Failed!',
        })
    }
}

exports.refresh = (req,res)=>{
    try{
        const refreshToken = req.cookies.refreshToken;

        if(!refreshToken){
            return res.status(401).json({
                message: 'Token not found. Login again.'
            })
        }
        
        try{
            const decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET);
            const newAccessToken = generateAccessToken({userId: decoded.userId, role: decoded.role});
            res.status(200).json({
                accessToken:newAccessToken,
                message:'New token generated.'
            })
        }
        catch(error){
            res.status(401).json({
                message:'Invalid Refresh Token.'
            })
        }
    }
    catch(error){
        return res.status(500).json({
            message: 'Token Refresh Failed.'
        })
    }
}

exports.validateUser = async(req,res)=>{
    try{
        const {email} = req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(200).json({
                message:'User exists.'
            })
        }
        return res.status(401).json({
            message:'User does not exist.'
        })
    }
    catch(error){
        return res.status(500).json({
            message:'Error occured while validating user.'
        })
    }
}

exports.sendOTP = async(req,res)=>{
    try{
        const {email} = req.body;
        const otp = Math.floor(1000 + Math.random() * 9000).toString();
        const otpToken = generateOTPToken({email: email, otp: otp})
        await sendEmail(email, 'OTP for Email verification', `Your OTP for Email verification is ${otp}.`);
        res.status(200).json({
            message:'OTP sent successfully.',
            otpToken : otpToken
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            message:'Error occured while sending OTP.',
        })
    }
}

exports.verifyOTP = async(req,res)=>{
    try{
        const { email, otp, otpToken } = req.body;
        const decoded = jwt.verify(otpToken, process.env.OTP_SECRET);

        if (decoded.email !== email) {
        return res.status(400).json({ message: 'Invalid email' });
        }

        if (decoded.otp !== otp) {
        return res.status(400).json({ message: 'Invalid OTP' });
        }

        res.status(200).json({ message: 'OTP verified successfully' });
    }
    catch(error){
        return res.status(500).json({
            message:'Error occured while verifying OTP.'
        })
    }
}

exports.changePassword=async(req,res)=>{
    try{
        const { email, newPassword } = req.body;
        const hashedPassword = await hashPassword(newPassword);
        if(!hashedPassword){
            throw new Error('password cannot be hashed');
        }
        await User.findOneAndUpdate({email:email},{password:hashedPassword});
        return res.status(200).json({
            message:'Password changed successfully.'
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            message:'Error occured while changing Password'
        })
    }
}

exports.getNGOList=async(req,res)=>{
    try{
        const ngoList = await User.find({role:'ngo'});
        let responseData = [];
        for(let i=0;i<ngoList.length;i++){
            responseData.push({
                id: ngoList[i]._id,
                name: ngoList[i].name,
            })
        }
        res.status(200).json({
            message:'NGO List fetched successfully.',
            data: responseData,
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            message:'Error occured while fetching NGO List'
        })
    }
}
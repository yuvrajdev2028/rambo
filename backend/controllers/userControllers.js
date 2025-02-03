const User = require('../models/users');
const { hashPassword, comparePassword } = require('../utils/hashUtils');
const jwt = require('jsonwebtoken');
const { generateAccessToken, generateRefreshToken } = require('../utils/tokenUtils');

exports.signup = async(req,res)=>{
    try{
        console.log("in signup-backend")
        const { name, email, password, role } = req.body;
        const hashedPassword = await hashPassword(password);
        if(!hashedPassword){
            throw new Error('password cannot be hashed');
        }
        const newUser = new User({ name, email, password:hashedPassword, role});
        await newUser.save();
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
            const newAccessToken = generateAccessToken(decoded.userId,decoded.role);
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
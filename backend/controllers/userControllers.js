const User = require('../models/users');
const { hashPassword, comparePassword } = require('../utils/hashUtils');
const jwt = require('jsonwebtoken');

exports.signup = async(req,res)=>{
    try{
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
        const token = jwt.sign({
            userId: user._id,
            role: user.role,
        }, process.env.JWT_SECRET, {expiresIn: '1d'});
        res.cookie('token',token,{
            expires: new Date(Date.now()+24*60*60*1000),
            httpOnly: true
            })
            .status(200)
            .json({
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
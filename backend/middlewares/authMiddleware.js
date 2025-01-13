const jwt = require('jsonwebtoken');

exports.auth = (req,res,next) =>{
    try{
        const token = req.headers.authorization?.split(' ')[1];
        if(!token){
            return res.status(401).json({
                message: 'Token Not Found!',
            })
        }
        try{
            req.user = jwt.verify(token,process.env.JWT_SECRET);
        }
        catch(error){
            return res.status(401).json({
                message: 'Invalid Token',
            })
        }
        next();
    }
    catch(error){
        return res.status(500).json({
            message: 'Authentication failed.',
        })
    }
}

exports.isNgo = (req,res,next) => {
    try{
        if(req.user.role!=='ngo'){
            return res.status(401).json({
                message: 'Only NGOs can access this route.',
            })
        }
        next();
    }
    catch(error){
        return res.status(500).json({
            message: 'Authorization failed while accessing protected route for NGOs.',
        })
    }
}

exports.isVolunteer = (req,res,next) => {
    try{
        if(req.user.role !== 'volunteer'){
            return res.status(401).json({
                message: 'Only Volunteers can access this route.',
            })
        }
        next();
    }
    catch(error){
        return res.status(500).json({
            message: 'Authorization failed while accessing protected route for Volunteers.',
        })
    }
}
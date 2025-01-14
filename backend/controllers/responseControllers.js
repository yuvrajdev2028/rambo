const Response = require('../models/responses');

exports.addResponse = async(req,res)=>{
    try{
    const { reportId, responseMessage } = req.body;
    const newResponse = new Response({ ngoId:req.user.userId, reportId, responseMessage});
    await newResponse.save();
    return res.status(200).json({
        message: 'Response added successfully'
    })
    }
    catch(error){
        return res.status(500).json({
            message: 'Error occurred while adding response.'
        })
    }
}

exports.getResponses = async(req,res)=>{
    try{
        const { reportId } = req.body;
        const response = await Response.find({reportId});
        return res.status(200).json(response);
    }
    catch(error){
        return res.status(500).json({
            message: 'Error occurred while fetching response.'
        })
    }
}
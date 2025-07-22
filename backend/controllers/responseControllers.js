const Report = require('../models/reports');
const Response = require('../models/responses');

exports.addResponse = async(req,res)=>{
    try{
    const { reportId, responseMessage } = req.body;
    const report = await Report.findOne({_id:reportId});
    if(String(report.ngoId)===req.user.userId){
        const newResponse = new Response({ ngoId:req.user.userId, reportId, responseMessage});
        await newResponse.save();
        return res.status(200).json({
            message: 'Response added successfully'
        })
    }
    else{
        throw new Error('This NGO is not authorised to add responses to this report.');
    }
    }
    catch(error){
        return res.status(500).json({
            error: `Error: ${error}`,
            message: 'Error occurred while adding response.'
        })
    }
}

exports.getResponses = async(req,res)=>{
    try{
        const reportId = req.params.reportId;
        const report = await Report.findOne({_id:reportId});
        if(String(report.ngoId)===req.user.userId || String(report.volunteerId)===req.user.userId){
            const response = await Response.find({reportId});
            return res.status(200).json(response);
        }
        else{
            throw new Error('This user is not authorised to access responses for this report.');
        }
    }
    catch(error){
        return res.status(500).json({
            error:`Error: ${error}`,
            message: 'Error occurred while fetching response.'
        })
    }
}
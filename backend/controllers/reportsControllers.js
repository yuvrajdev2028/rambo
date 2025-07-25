const Report = require('../models/reports');
const cloudinary = require('cloudinary').v2;

exports.createReport = async(req,res) => {
    try{
        const { ngo, title, description, location, status } = req.body;
        const filepath = req.file.path;
        const result = await cloudinary.uploader.upload(filepath , {
            folder: 'rambo',
        });
        console.log(result);
        const newReport = new Report({ volunteerId: req.user.userId, ngoId:ngo, title, description, location, image_url: result.secure_url, status});
        await newReport.save();
        return res.status(201).json({
            message: 'Report created successfully.'
        })
    }
    catch(error){
        console.error('Error creating report:', error);
        return res.status(500).json({
            error: `Error: ${error}`,
            message: 'Error occurred while creating report.'
        })
    }
}

exports.getAllReports = async(req,res) => {
    try{
        const userId = req.user.userId;
        const role = req.user.role;
        const reports = await Report.find({[`${role}Id`]:userId});
        return res.status(200).json(reports);
    }
    catch(error){
        return res.status(500).json({
            error: `Error: ${error}`,
            message: 'Error occurred while fetching reports.'
        })
    }
}

exports.updateStatus = async(req,res) => {
    try{
        console.log(req.body);
        const reportId = req.body.reportId;
        const newStatus = req.body.newStatus;
        await Report.findOneAndUpdate({_id:reportId},{status:newStatus});
        return res.status(200).json({
            message: `Status of report changed to ${newStatus}`,
        })
    }
    catch(error)
    {
        return res.status(500).json({
            error: `Error: ${error}`,
            message: 'Error occured while updating status.',
        })
    }
}
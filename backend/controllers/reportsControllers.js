const Report = require('../models/reports');

exports.createReport = async(req,res) => {
    try{
        const { ngoId, title, description, location, imageUrl, status} = req.body;
        const newReport = new Report({ volunteerId: req.user.userId, ngoId, title, description, location, imageUrl, status});
        await newReport.save();
        return res.status(201).json({
            message: 'Report created successfully.'
        })
    }
    catch(error){
        return res.status(500).json({
            message: 'Error occurred while creating report.'
        })
    }
}

exports.getAllReports = async(req,res) => {
    try{
        const userId = req.user.userId;
        const role = req.user.role;
        const reports = Report.find({[`${role}Id`]:userId});
        return res.status(200).json(reports);
    }
    catch(error){
        return res.status(500).json({
            message: 'Error occurred while fetching reports.'
        })
    }
}
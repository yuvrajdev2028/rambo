const express = require('express');
const {auth,isNgo,isVolunteer} = require('../middlewares/authMiddleware');
const {createReport,getAllReports} = require('../controllers/reportsControllers');

const router = express.Router();

router.post('/createReports',auth,isVolunteer,createReport);
router.get('/ngo/getAllReports',auth,isNgo,getAllReports);
router.get('/volunteer/getAllReports',auth,isVolunteer,getAllReports);

module.exports = router;
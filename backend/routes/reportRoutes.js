const express = require('express');
const {auth,isNgo,isVolunteer} = require('../middlewares/authMiddleware');
const {createReport,getAllReports,updateStatus} = require('../controllers/reportsControllers');

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.post('/createReport',auth,isVolunteer,upload.single('image'),createReport);
router.get('/ngo/getAllReports',auth,isNgo,getAllReports);
router.get('/volunteer/getAllReports',auth,isVolunteer,getAllReports);
router.put('/ngo/updateStatus',auth,isNgo,updateStatus);

module.exports = router;
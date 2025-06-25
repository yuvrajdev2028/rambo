const express = require('express');
const {auth,isNgo,isVolunteer} = require('../middlewares/authMiddleware');
const {createReport,getAllReports} = require('../controllers/reportsControllers');

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.post('/createReport',auth,isVolunteer,upload.single('image'),createReport);
router.get('/ngo/getAllReports',auth,isNgo,getAllReports);
router.get('/volunteer/getAllReports',auth,isVolunteer,getAllReports);

module.exports = router;
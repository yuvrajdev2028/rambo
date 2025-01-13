const express = require('express');
const {auth,isNgo} = require('../middlewares/authMiddleware');
const {addResponse,getResponses} = require('../controllers/responseControllers');

const router = express.Router();

router.post('/addResponse',auth,isNgo,addResponse);
router.get('/getResponses',auth,getResponses);

module.exports = router;
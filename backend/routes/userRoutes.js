const express = require('express');
const {signup, login, logout, refresh, validateUser, sendOTP, verifyOTP, changePassword, getNGOList} = require('../controllers/userControllers');
const {auth,isVolunteer} = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/signup',signup);
router.post('/login',login);
router.post('/logout',logout);
router.post('/refresh',refresh);
router.post('/validateUser',validateUser);
router.post('/sendOTP',sendOTP);
router.post('/verifyOTP',verifyOTP);
router.post('/changePassword',changePassword);
router.get('/getNGOList',auth,isVolunteer,getNGOList);

module.exports = router;
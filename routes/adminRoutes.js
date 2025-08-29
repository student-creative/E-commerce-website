var express = require('express');
var router = express.Router();



const admin = require('../controller/adminController');
const auth = require('../auth/adminAuth')

router.post('/login',auth,admin.LoginAdmin);

module.exports = router;

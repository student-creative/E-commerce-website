var express = require('express');
var router = express.Router();



const admin = require('../controller/adminController');


router.post('/login',admin.LoginAdmin);

module.exports = router;

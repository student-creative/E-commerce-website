var express = require('express');
var router = express.Router();

/* GET home page. */

const controller = require('../controller/userController');
const mverifyToken = require('../middleware/verifyToken');


// router.get('/', mverifyToken,controller.getUsers);
router.post('/login', controller.Login);
router.post('/register', controller.createUser);
router.put('/:id',mverifyToken, controller.updateUser);  
router.post('/forgot', controller.forgetPass);




module.exports = router;
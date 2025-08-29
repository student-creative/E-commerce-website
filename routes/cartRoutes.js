var express = require('express');
var router = express.Router();



const cart = require('../controller/cartController');
const mverifyToken = require('../middleware/verifyToken');
router.post('/add',mverifyToken,cart.addToCart);
router.post('/clear',mverifyToken, cart.clearCart);
router.post('/remove',mverifyToken, cart.removeItem);
// router.get('/:userId', cart.getCart);
router.get("/",mverifyToken, cart.getCart);



module.exports = router;

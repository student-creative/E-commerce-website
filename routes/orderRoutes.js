var express = require('express');
var router = express.Router();


const order = require('../controller/orderController');
const auth = require('../auth/adminAuth')

router.post('/place', order.placeOrder);
router.get('/:userId', order.getUserOrders);
router.delete("/:orderId", order.cancelOrder);

router.put("/:orderId/status", auth ,order.updateOrderStatus);


module.exports = router;

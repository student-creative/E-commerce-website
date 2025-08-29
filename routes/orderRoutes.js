var express = require('express');
var router = express.Router();


const order = require('../controller/orderController');

router.post('/place', order.placeOrder);
router.get('/:userId', order.getUserOrders);
router.delete("/:orderId", order.cancelOrder);

router.put("/:orderId/status", order.updateOrderStatus);


module.exports = router;

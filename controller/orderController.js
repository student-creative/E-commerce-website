const Cart = require("../model/Cart");
const Order = require("../model/Order");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// 🔹 Place an Order
// controllers/orderController.js


exports.placeOrder = async (req, res) => {
  try {
    const {
      userId,
      fullName,
      email,
      phone,
      address,
      city,
      state,
      zip,
      paymentMethod,
    } = req.body;

    // Validate userId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid userId" });
    }

    // Validate all shipping fields
    if (!fullName || !email || !phone || !address || !city || !state || !zip || !paymentMethod) {
      return res.status(400).json({ message: "All shipping fields are required." });
    }

    // Fetch cart
    const cart = await Cart.findOne({ userId: new mongoose.Types.ObjectId(userId) });

    if (!cart || cart.products.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    // Create order
    const order = new Order({
      userId: new mongoose.Types.ObjectId(userId),
      shippingDetails: {
        fullName,
        email,
        phone,
        address,
        city,
        state,
        zip,
        paymentMethod,
      },
      products: cart.products,
      totalAmount: cart.products.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
    });

    await order.save();

    // Clear cart
    await Cart.deleteOne({ userId: new mongoose.Types.ObjectId(userId) });

    res.status(200).json({ message: "Order placed successfully", order });
  } catch (err) {
    console.error("PlaceOrder Error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};


exports.getUserOrders = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.userId);

    const orders = await Order.find({ userId: userId });
    res.status(200).json({ orders });
  } catch (error) {
    console.error("GetUserOrders Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
// 🔹 Cancel an Order (Optional)
exports.cancelOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const deletedOrder = await Order.findByIdAndDelete(orderId); // ✅ Deletes from DB
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (err) {
    console.error("CancelOrder Error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};




// PUT /order/:orderId/status
exports.updateOrderStatus = async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  try {
    const order = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json({ order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

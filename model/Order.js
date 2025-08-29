const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    shippingDetails: {
      fullName: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zip: { type: String, required: true },
      paymentMethod: { type: String, default: "COD" },
    },

    products: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        title: String,
        description: String,
        image: String,
        price: Number,
        quantity: { type: Number, default: 1 },
      },
    ],

    totalAmount: { type: Number, required: true },
    status: { type: String, default: "pending" }, // pending, completed, cancelled
  },
  { timestamps: true }
);

module.exports = mongoose.model("orders", orderSchema);

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  image: String,
  price: Number,
});

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  products: [productSchema],
}, { timestamps: true });

module.exports = mongoose.model("categories", categorySchema);

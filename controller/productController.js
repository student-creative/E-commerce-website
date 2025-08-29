const Product = require("../model/Product");

// 🔹 All products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) return res.status(404).json({ message: "Product not found" });

    res.json({
      id: product._id,
      title: product.title,
      description: product.description,
      price: product.price,
      image: `http://localhost:5000${product.image}`  // full URL
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};



// controller/productController.js
exports.searchProducts = async (req, res) => {
  try {
    const { query } = req.params;

    // MongoDB me title me case-insensitive search
    const results = await Product.find({ title: { $regex: query, $options: "i" } });

    // Frontend ke liye image ka full URL + poora product details
    const formatted = results.map(p => ({
      id: p._id,             // MongoDB _id frontend me id ke liye
      title: p.title,
      description: p.description,
      price: p.price,
      image: `http://localhost:5000${p.image}`
    }));

    res.json(formatted);
  } catch (error) {
    console.error("Error in searchProducts:", error);
    res.status(500).json({ message: error.message });
  }
};




// Suggested products example
exports.getSuggestions = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const suggestions = await Product.find({ 
      _id: { $ne: id } 
    }).limit(8);

    const formatted = suggestions.map(p => ({
      id: p._id,
      title: p.title,
      price: p.price,
      image: `http://localhost:5000${p.image}`
    }));

    res.json(formatted);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};


// 🔹 Add product (Admin Panel)
exports.addProduct = async (req, res) => {
  try {
    const { id, title, description, price } = req.body;

    let image = "";
    if (req.file) {
      image = `/uploads/${req.file.filename}`;
    }

    // Direct create (new + save ek hi step me)
    const newProduct = await Product.create({
      id: Number(id),       // frontend se string aati hai -> convert to number
      title,
      description,
      price: Number(price), // convert price to number
      image
    });
console.log("Request Body:", req.body);
console.log("File:", req.file);

    res.status(201).json(newProduct);
  } catch (err) {
    console.error("Error saving product:", err);
    res.status(500).json({ message: err.message });
  }
};


// 🔹 Delete product
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findOneAndDelete({ id: Number(req.params.id) });
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const Cart = require('../model/Cart');
const Product = require('../model/Product');

// ➤ Add product to cart
exports.addToCart = async (req, res) => {
  try {
    const userId = req.user.id; // JWT से userId
    const { productId, quantity } = req.body;

    // Product verify करो
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    // Cart ढूंढो
    let cart = await Cart.findOne({ userId });

    const productData = {
      productId: product._id,
      title: product.title,
      description: product.description,
      image: product.image,
      price: product.price,
      quantity: quantity || 1,
    };

    if (!cart) {
      cart = new Cart({ userId, products: [productData] });
    } else {
      
      const itemIndex = cart.products.findIndex(
        (item) => item.productId.toString() === product._id.toString()
      );

      if (itemIndex >= 0) {
        cart.products[itemIndex].quantity += quantity || 1;
      } else {
        cart.products.push(productData);
      }
    }

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Product added to cart",
      cart,
    });
  } catch (error) {
    console.error("Add to Cart Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ➤ Get cart of logged-in user
exports.getCart = async (req, res) => {
  try {
    const userId = req.user.id; // JWT decoded id
    const cart = await Cart.findOne({ userId });

    if (!cart) return res.status(200).json({ products: [] });

    res.status(200).json({ products: cart.products });
  } catch (error) {
    console.error("GetCart Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


// ➤ Clear full cart
exports.clearCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const cart = await Cart.findOne({ userId });

    if (cart) {
      cart.products = [];
      await cart.save();
    }

    res.status(200).json({ success: true, message: "Cart cleared" });
  } catch (err) {
    console.error("ClearCart Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ➤ Remove single item from cart
exports.removeItem = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.body;

    let cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ success: false, message: "Cart not found" });
    }

    // Remove product from array
    cart.products = cart.products.filter(
      (item) => item.productId.toString() !== productId
    );

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Item removed from cart",
      cart,
    });
  } catch (err) {
    console.error("RemoveItem Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

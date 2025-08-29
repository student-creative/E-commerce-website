
const Category = require("../model/Category"); // Category model


exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.json({ categories });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single category by ID (with products)
exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getProductInCategory = async (req, res) => {
 try {
    const { categoryId, productId } = req.params;

    // Category find by _id
    const category = await Category.findById(categoryId);
    if (!category) return res.status(404).json({ message: "Category not found" });

    // Product find inside category.products array
    const product = category.products.id(productId); 
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.json(product);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
}





// controllers/productController.js



// // categories sirf
// export const searchCategoryProductsOnly = async (req, res) => {
//   const { query } = req.params;
//   try {
//     const categories = await Category.find({ "products.title": { $regex: query, $options: "i" } });
//     const categoryProducts = categories.flatMap(cat =>
//       cat.products
//         .filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
//         .map(p => ({
//           id: p.id,
//           title: p.title,
//           description: p.description,
//           price: p.price,
//           image: p.image,
//           categoryName: cat.name,
//           type: "category"
//         }))
//     );
//     res.json(categoryProducts);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

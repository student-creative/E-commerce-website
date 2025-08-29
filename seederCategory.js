// seederCategory.js (CommonJS)
require('dotenv').config(); //
const connectDB = require("./db"); // CommonJS style
const Category = require("./model/Category");
const { categories } = require("./model/categoryData");

const seedCategories = async () => {
  
  await connectDB(); // connect to MongoDB

  try {
    // Purani categories delete karo
    await Category.deleteMany();

    // New categories insert karo
    await Category.insertMany(categories);

    console.log("Categories with subcategories and products saved to MongoDB!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedCategories();

const mongoose = require("mongoose");
const Admin = require("./model/Admin");
const connectDB = require("./db"); // tumhara db.js
require("dotenv").config();

async function createAdmin() {
  await connectDB(); // Connect to MongoDB

  try {
    const existingAdmin = await Admin.findOne({ email: "shopease123@gmail.com" });
    if (existingAdmin) {
      console.log("Admin already exists!");
      return mongoose.disconnect();
    }

    const admin = new Admin({
      name: "Admin",
      email: "shopease123@gmail.com",
      password: "Admin2580@", // plain text password
    });

    await admin.save();
    console.log("Admin created successfully!");
  } catch (error) {
    console.error("Error creating admin:", error);
  } finally {
    mongoose.disconnect();
  }
}

createAdmin();

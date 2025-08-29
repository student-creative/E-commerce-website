const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Admin = require("./model/Admin");
const connectDB = require("./db"); // tumhara new db.js
require("dotenv").config();

async function createAdmin() {
  await connectDB(); // Connect to MongoDB

  try {
    const existingAdmin = await Admin.findOne({ email: "shopease123@gmail.com" });
    if (existingAdmin) {
      console.log("Admin already exists!");
      return mongoose.disconnect();
    }

    const hashedPassword = await bcrypt.hash("Admin2580@", 10);

    const admin = new Admin({
      name: "Admin",
      email: "shopease123@gmail.com",
      password: hashedPassword,
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

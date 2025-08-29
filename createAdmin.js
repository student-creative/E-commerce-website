const Admin = require("./model/Admin");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

async function createAdmin() {
  const hashedPassword = await bcrypt.hash("Admin2580@", 10);
  
  const admin = new Admin({
    name: "Admin",
    email: "shopease123@gmail.com",
    password: hashedPassword
  });

  await admin.save();
  console.log("Admin created successfully!");
  mongoose.disconnect();
}

createAdmin();

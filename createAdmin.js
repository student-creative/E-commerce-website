const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Admin = require("./model/Admin");

mongoose.connect("mongodb://127.0.0.1:27017/ecommrce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function createAdmin() {
  
   
  const admin = new Admin({
    name: "Admin",  // required field
    email: "shopease123@gmail.com",
    password: "Admin2580@",
  });
  await admin.save();
  console.log("Admin created successfully!");
  mongoose.disconnect();
}

createAdmin();

const jwt = require('jsonwebtoken');
const Admin = require("../model/Admin");

module.exports = async function adminAuth(req, res, next) {
 try {
    const admin = await Admin.findOne(); // बस first admin check करो
    if (!admin) return res.status(403).json({ message: "Admin not found" });

    req.admin = admin;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: "Unauthorized" });
  }
};

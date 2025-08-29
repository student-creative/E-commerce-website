const jwt = require('jsonwebtoken');
const Admin = require("../model/Admin");

module.exports = async function adminAuth(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1]; // Bearer <token>
  
  if (!token) return res.status(401).json({ message: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(decoded.id);
    if (!admin) return res.status(403).json({ message: "Admin not found" });

    req.admin = admin;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: "Token is not valid" });
  }
};


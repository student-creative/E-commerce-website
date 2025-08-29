const jwt = require("jsonwebtoken");
const User = require("../model/User");

const secretKey = process.env.JWT_SECRET || "cdmi";

module.exports = async function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ message: "Access token missing" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Malformed token" });
  }

  try {
    const decoded = jwt.verify(token, secretKey);

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // // 🔴 Token version check
    // if (decoded.tokenVersion !== user.tokenVersion) {
    //   return res.status(401).json({ message: "Token invalidated due to re-login" });
    // }

    // ✅ req.user id assign correctly
    req.user = { id: decoded.id };
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token has expired" });
    }
    return res.status(403).json({ message: "Invalid token" });
  }
};

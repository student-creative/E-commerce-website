const User = require('../model/User');
const nodemailer = require("nodemailer");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Cart = require('../model/Cart');

exports.createUser = async (req, res) => {
  try {
    // पासवर्ड हैश करें
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPass;

    // नया यूजर बनाएं
    const user = await User.create(req.body);

    // JWT टोकन बनाएं
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // टोकन और यूजर जानकारी के साथ रेस्पॉन्स भेजें
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (error) {
    console.error("Insert Error:", error);
    res.status(500).json({ success: false, message: "Internal server error", error: error.message });
  }
};


exports.updateUser = async (req, res) => {

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User updated!', user });
    } catch (error) {
        console.error("Update Error:", error);
        res.status(500).json({ message: error.message });
    }

}


exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ message: 'Users fetched successfully!', users });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

// controllers/userController.js

exports.Login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).json({ success: false, message: "Email not found" });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid password" });
    }

    // ✅ जब नया यूज़र login करे, tokenVersion बढ़ा दो (purane token invalidate हो जाएंगे)
    user.tokenVersion += 1;
    await user.save();

    // ✅ token में tokenVersion भेजो
    const token = jwt.sign(
      { id: user._id, email: user.email, tokenVersion: user.tokenVersion },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // ✅ अब cart भी भेजो (example)
    const cart = await Cart.find({ userId: user._id }); // अगर आपने Cart model बना रखा है

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email },
      cart: cart || [],
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ success: false, message: "Internal server error", error: error.message });
  }
};


// exports.Login = async (req, res) => {
//   try {
//     const singleData = await User.findOne({ email: req.body.email });

//     if (!singleData) {
//       return res.status(401).json({ success: false, message: "Email id is wrong" });
//     }

//     const match = await bcrypt.compare(req.body.password, singleData.password);

//     if (!match) {
//       return res.status(401).json({ success: false, message: "Invalid Password" });
//     }

//     const token = jwt.sign(
//       { id: singleData._id, email: singleData.email },
//       "cdmi",
//       { expiresIn: "1h" }
//     );

//     // सिर्फ एक response
//     res.status(200).json({
//       success: true,
//       message: "Login successfully",
//       token,
//       user: { id: singleData._id, email: singleData.email, name: singleData.name }
//     });

//   } catch (err) {
//     console.error("Login Error:", err);
//     res.status(500).json({ success: false, message: "Internal server error", error: err.message });
//   }
// };




exports.Logout = async (req, res) => {

    try {
        res.status(200).json({ message: "Logout successfully" });
    } catch (error) {
        console.error("Insert Error:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }

}


exports.forgetPass = async (req, res) => {

    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            var otp = Math.floor(1000 + Math.random() * 9000);
            user.otp = otp;
            await user.save();
            // send OTP to user's email
            let transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "aryasutariya3@gmail.com",
                    pass: "cilv jsil pzld hgvk"
                }
            });

            await transporter.sendMail({
                from: "your-email@gmail.com",
                to: user.email,
                subject: "Your OTP Code",
                text: `Your OTP is ${otp}`
            });
            res.status(200).json({ message: "OTP sent successfully" });
        } else {
            res.status(200).json({ message: "Email id is wrong..." });
        }

    } catch (error) {
        console.error("Insert Error:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });

    }

}
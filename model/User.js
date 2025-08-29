// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  tokenVersion: {
    type: Number,
    default: 0   // ✅ यह जरूरी है ताकि हम token को invalidate कर सकें
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('registers', userSchema);

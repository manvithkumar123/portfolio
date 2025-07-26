const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  message: String,
  contact: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Contactdata', contactSchema);
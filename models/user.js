const mongoose = require('mongoose');

// Оголошення схеми для колекції users
const userSchema = new mongoose.Schema({
  name: String
});
const model = mongoose.model('User', userSchema);

module.exports = model;

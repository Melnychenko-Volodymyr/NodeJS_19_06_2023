const mongoose = require('mongoose');

// Оголошення схеми для колекції articles
const articleSchema = new mongoose.Schema({
  title: String,
  content: String
});

const model = mongoose.model('Article', articleSchema);

module.exports = model;
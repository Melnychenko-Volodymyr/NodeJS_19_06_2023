const mongoose = require('mongoose');

// Оголошення схеми для колекції comments
const commentSchema = new mongoose.Schema({
  id_article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article' },
  id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String
}, { timestamps: true });

const model = mongoose.model('Comment', commentSchema);

module.exports = model;

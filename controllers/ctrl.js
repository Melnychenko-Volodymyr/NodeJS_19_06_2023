const mongoose = require('mongoose');

const Article = require('../models/article');
const Comment = require('../models/comment');
const User = require('../models/user');

// відправка масиву статей 
const getArticle = async() => {
    console.log('Відправка масиву статей'); 
    let articles = await Article.find({});
    return articles;  
  };

// відправка масиву коментарів по id статті
    const getId = async (req) => {
      console.log('Відправка масиву коментарів'); 
      let data = await Comment.find(req)
      .populate('id_article', 'title')
      .populate('id_user', 'name')
      .exec()    
      return data;  
    };

// відправка масиву користувачів на запит get
    const getUsers = async () => {
          console.log('Відправка масиву користувачів'); 
          let users = await User.find({});  
          return users;
        };

 // додавання нової статті
   const sendArticle = (article) => {
      Article.create(article);
      console.log('Додана нова стаття');
  };
 
  // додавання нового коментаря
  const sendComment = (comment) => {
    Comment.create(comment);
    console.log('Додано новий коментар');
  };
  
  module.exports = {
    getArticle,
    getId,
    getUsers,
    sendArticle,
    sendComment
  }
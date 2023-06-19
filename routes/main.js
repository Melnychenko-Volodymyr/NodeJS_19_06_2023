const express = require('express');
const ctrl = require('../controllers/ctrl');

const router = express.Router();

const mongoose = require('mongoose');

//------------------------------------------------------------
//-- відправлення сторінок на запит get
//--------------------------------------------------------

// стартова сторінка (перегляд статей)
router.get('/', (req, res) => {
  res.render('view');
});

// сторінка додавання статей
router.get('/add_article/', (req, res) => {
  res.render('add_article');
}); 

// сторінка додавання коментарів
router.get('/add_comment/', (req, res) => {
  res.render('add_comment');
});

//-------------------------------------------------------------

// відправка масиву статей на запит get
router.get('/article', async (req, res) => {  
  let articles  = await ctrl.getArticle();
  res.json(articles);
});

// відправка масиву коментарів по id статті
router.get('/send_id', async (req, res) => {
    let comments = await ctrl.getId(req.query);
    res.json(comments);  
});


// відправка масиву користувачів на запит get
router.get('/user', async (req, res) => {
  let users = await ctrl.getUsers();
  res.json(users);
});


// додавання нової статті
router.post('/send_article', (req, res) => {
    ctrl.sendArticle(req.body);
  });

// додавання нового коментаря
router.post('/send_comment', (req, res) => {
  ctrl.sendComment(req.body);
});

module.exports = router;
var express = require('express');
var router = express.Router();

var userCl = require('../controllers/users')

/* GET users listing. */
router.get('/', function(req, res, next) {

  // 这个借口直接获取用户信息 若有则直接显示登录界面，若无直接跳转登录
  userCl.getUsers(req,res)
});

router.delete('/:id', function(req, res, next) {

  
  userCl.deleteUser(req,res)
});
router.get('/:id', function(req, res, next) {

  
  userCl.getUser(req,res)
});






router.get('/login', function(req, res, next) {

  
  res.render('login')
});

router.post('/login', function(req, res, next) {

  
  userCl.login(req,res)
});

router.post('/updata', function(req, res, next) {

  
  userCl.updata(req,res)
});






router.get('/register', function(req, res, next) {

  
  res.render('register')
});

router.post('/register', function(req, res, next) {

  
  userCl.register(req,res)
});

module.exports = router;

var express = require('express');
var router = express.Router();

var cateCl = require('../controllers/cate')

/* GET users listing. */
router.get('/:type', function(req, res, next) {

  // 这个借口直接获取新闻信息 若有则直接返回json数据，若无直接返回 null
  cateCl.getcate(req,res)
  
});

router.delete('/:_id', function(req, res, next) {

  // 这个借口直接获取新闻信息 若有则直接返回json数据，若无直接返回 null
  cateCl.deletecate(req,res)
  
});

router.post('/add', function(req, res, next) {

    
    cateCl.addcate(req,res)
    
  });



module.exports = router;

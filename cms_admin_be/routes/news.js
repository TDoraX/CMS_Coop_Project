var express = require('express');
var router = express.Router();

var newsCl = require('../controllers/news')

/* GET users listing. */
router.get('/', function(req, res, next) {

  // 这个借口直接获取新闻信息 若有则直接返回json数据，若无直接返回 null
  newsCl.getnews(req,res)
  
});
router.get('/:_id', function(req, res, next) {

  // 这个借口直接获取新闻信息 若有则直接返回json数据，若无直接返回 null
  newsCl.getnews(req,res)
  
});
router.get('/list/:_id', function(req, res, next) {

  // 这个借口直接获取新闻信息 若有则直接返回json数据，若无直接返回 null
  newsCl.listnews(req,res)
  
});
// router.put('/:_id', function(req, res, next) {

//   // 这个借口直接获取新闻信息 若有则直接返回json数据，若无直接返回 null
//   newsCl.putnews(req,res)
  
// });
router.delete('/:_id', function(req, res, next) {
  console.log(1111111111111111111111111)
  // 这个借口直接获取新闻信息 若有则直接返回json数据，若无直接返回 null
  newsCl.deletenews(req,res)
  
});

router.post('/add', function(req, res, next) {

    
    newsCl.addnews(req,res)
    
  });



module.exports = router;

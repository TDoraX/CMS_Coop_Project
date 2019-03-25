var express = require('express');
var router = express.Router();

var productCl = require('../controllers/product')

/* GET users listing. */
router.get('/', function(req, res, next) {

  // 这个借口直接获取新闻信息 若有则直接返回json数据，若无直接返回 null
  productCl.getproduct(req,res)
  
});
router.get('/:_id', function(req, res, next) {

  // 这个借口直接获取新闻信息 若有则直接返回json数据，若无直接返回 null
  productCl.getproduct(req,res)
  
});
router.get('/list/:_id', function(req, res, next) {

  // 这个借口直接获取新闻信息 若有则直接返回json数据，若无直接返回 null
  productCl.listproduct(req,res)
  
});
// router.put('/:_id', function(req, res, next) {

//   // 这个借口直接获取新闻信息 若有则直接返回json数据，若无直接返回 null
//   productCl.putproduct(req,res)
  
// });
router.delete('/:_id', function(req, res, next) {

  // 这个借口直接获取新闻信息 若有则直接返回json数据，若无直接返回 null
  productCl.deleteproduct(req,res)
  
});

router.post('/add', function(req, res, next) {

    console.log(1)
    productCl.addproduct(req,res)
    
  });



module.exports = router;

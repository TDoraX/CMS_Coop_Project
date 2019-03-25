

const db =require('mongoose')

var cate = require('../models/cate')


db.connect('mongodb://localhost:27017/cms',{useNewUrlParser: true}).catch((err) => {
    console.log(err)
    
})


module.exports = {


    getcate(req,res){

        cate.getcate(req,res)

    },
    addcate(req,res){

        cate.addcate(req,res)
    },
    deletecate(req,res){

        cate.deletecate(req,res)
    }
}
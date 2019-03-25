

const db =require('mongoose')

var user = require('../models/users')


db.connect('mongodb://localhost:27017/cms',{useNewUrlParser: true}).catch((err) => {
    console.log(err)
    
})


module.exports = {


    login(req,res){

        user.login(req,res)

    },
    register(req,res){

        user.register(req,res)
    },
    getUsers(req,res){
        user.getUsers(req,res)
    },
    deleteUser(req,res){
        user.deleteUser(req,res)
    },
    getUser(req,res){
        user.getUser(req,res)
    },
    updata(req,res){
        user.updata(req,res)
    }
}
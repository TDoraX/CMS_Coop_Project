const db = require('mongoose')

var product = require('../models/product')


db.connect('mongodb://localhost:27017/cms', {useNewUrlParser: true}).catch((err) => {
    console.log(err)

})


module.exports = {


    getproduct(req, res) {

        product.getproduct(req, res)

    },
    addproduct(req, res) {

        product.addproduct(req, res)
    },
    deleteproduct(req, res) {

        product.deleteproduct(req, res)
    },
    putproduct(req, res) {

        product.putproduct(req, res)
    },
    listproduct(req, res) {

        product.listproduct(req, res)
    }
}
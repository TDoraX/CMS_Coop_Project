const db = require('mongoose')

var news = require('../models/news')


db.connect('mongodb://localhost:27017/cms', {useNewUrlParser: true}).catch((err) => {
    console.log(err)

})


module.exports = {


    getnews(req, res) {

        news.getnews(req, res)

    },
    addnews(req, res) {

        news.addnews(req, res)
    },
    deletenews(req, res) {

        news.deletenews(req, res)
    },
    putnews(req, res) {

        news.putnews(req, res)
    },
    listnews(req, res) {

        news.listnews(req, res)
    }
}
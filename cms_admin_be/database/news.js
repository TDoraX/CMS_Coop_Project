var moment = require('moment');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const pagination = require('mongoose-paginate')
var newsSchema = new Schema({
    newsid: String,
    time: moment().format('L'),
    // category:String,
    title: String,
    content: String,
    source: String,
    place: String
});
newsSchema.plugin(pagination)
var newsDate = mongoose.model('news', newsSchema);

module.exports = newsDate
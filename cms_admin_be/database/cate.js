

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var cateSchema = new Schema({
    parentid:String,
    text:String,
    type:Number
  });

  var cateDate = mongoose.model('cates', cateSchema);

  module.exports = cateDate


  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;
  const pagination = require('mongoose-paginate')
  var productSchema = new Schema({
    productid:String,
    name:String,
    price:Number,
    place:String,
    producer:String,
    image:String
  });
  productSchema.plugin(pagination)
  var productDate = mongoose.model('product', productSchema);

  module.exports = productDate


  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;
  const pagination = require('mongoose-paginate')
  var userSchema = new Schema({
    username:String,
    password:String,
    gender:String,
    phone:Number,
    name:String,
    email:String,
    age:Number,
    job:String,
    level:String,
    avatar:String
  });
      userSchema.plugin(pagination)
  var userDate = mongoose.model('users', userSchema);

  module.exports = userDate
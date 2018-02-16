var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var schema = new Schema({

  status: Number,
  username: String,
  lastname: String,
  email: String,
  password: String,
  created_on: Date


}, { versionKey: false });


module.exports = mongoose.model('user', schema, 'user');

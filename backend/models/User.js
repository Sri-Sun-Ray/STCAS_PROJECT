const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  employee_name: String,
  phone_number: String,
  username: String,
  password: String,
});

module.exports = mongoose.model('User', userSchema);

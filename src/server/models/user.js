let mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  name: String,
  password: String,
});

let User = mongoose.model("user", userSchema);
module.exports = User;

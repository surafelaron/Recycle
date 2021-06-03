const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String },
  email: { type: [String], required: true },
  phone: { type: Number, required: true },
  image: { type: String, required: false },
  adress: { type: String, required: true },
  password: { type: String, required: true}
});

const User = mongoose.model("User", userSchema);

module.exports = User;
const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  userName: { type: String, unique: true, lowercase: true },
  backgroundInfo: String,
  address: {
    street: String,
    suite: String,
    city: String,
    state: String,
    zipCode: String,
  },
});

module.exports = model("User", userSchema);

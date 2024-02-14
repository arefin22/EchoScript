const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  photoURL: {
    type: String,
  },
  role: {
    type: String,
    default: 'user'
  },
  favourite: {
    type: [Object],
    default: [],
    required: true
  },
});

const User = model("user", UserSchema);

module.exports = User;

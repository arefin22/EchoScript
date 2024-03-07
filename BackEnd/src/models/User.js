const { model, Schema } = require("mongoose");

const UserSchema = new Schema(
  {
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
      default: "reader",
      required: true,
      enum: ["admin", "reader", "writer"],
    },
    preference: {
      type: [Object],
      default: [],
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "suspended"],
      required: true,
      default: "active",
    },
    about: {
      type: String,
      maxlength: 250,
    },
  },
  { timestamps: true }
);

const User = model("user", UserSchema);

module.exports = User;

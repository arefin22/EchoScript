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
      required: true,
    },
    role: {
      type: String,
      default: "guest",
      required: true,
      enum: ["admin", "user", "writer", "guest"],
    },
    favourite: {
      type: [Object],
      default: [],
      required: true,
    },
    membership: {
      type: String,
      enum: ["active", "suspended"],
      required: true,
      default: "active"
    },
  },
  { timestamps: true }
);

const User = model("user", UserSchema);

module.exports = User;

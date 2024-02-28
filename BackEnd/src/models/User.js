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
    membership: {
      type: Date,
      default: Date.now,
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

UserSchema.index({ membership: 1 }, { expireAfterSeconds: 10 });

const User = model("user", UserSchema);

module.exports = User;

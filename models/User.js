const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  acceptedCollabs: [
    // List of collabs belonging to a user
    {
      collab: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "collab",
      },
    },
  ],
});

module.exports = User = mongoose.model("user", UserSchema);

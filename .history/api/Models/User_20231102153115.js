const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: String,
    password: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
    },
    pic: String,
    displayName: Strung,
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);

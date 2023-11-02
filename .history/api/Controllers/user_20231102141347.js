const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { token } = require("morgan");

exports.currentUser = async (req, res) => {
  try {
    console.log("currentUser", req.user);
    const user = await User.findOne({ name: req.user.name })
      // Remove password from backend
      .select("-password")
      .exec();

    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

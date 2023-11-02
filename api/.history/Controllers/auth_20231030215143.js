const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.register = async (req, res) => {
  try {
    // 1.Check User Have Register Yet?

    const { name, password } = req.body;

    var user = await User.findOne({ name });
    console.log(user);

    if (user) {
      return res.send("User Already Exists!!").status(400);
    }

    // 2. Encrypt
    const salt = await bcrypt.genSalt(10);

    user = new User({
      name,
      password,
    });

    user.password = await bcrypt.hash(password, salt);
    console.log(user);

    // 3.Save

    await user.save();

    res.send("Register Success");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.login = async (req, res) => {
  try {
    res.send("Hello Login Controller ");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

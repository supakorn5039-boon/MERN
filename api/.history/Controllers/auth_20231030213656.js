const User = require("../Models/User");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  try {
    // 1.Check User

    // 2. Encrypt

    // 3.Save

    console.log(req.body);
    res.send(req.body);
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

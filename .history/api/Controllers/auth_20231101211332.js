const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { token } = require("morgan");
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
    // 1. Check User is have or not in database

    const { name, password } = req.body;

    var user = await User.findOneAndUpdate({ name }, { new: true });
    console.log(user);

    // Have Data User  in System
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send("Password Invalid !!");
      }

      // 2. Payload (Prepare)
      var payload = {
        user: {
          name: user.name,
          role: user.role,
        },
      };

      // 3. Generate Token
      jwt.sign(payload, "jwtsecret", { expiresIn: "1d" }, (err, token) => {
        if (err) throw err;
        res.json({ token, payload });
      });
    } else {
      return res.status(400).send("User Not Found!!!");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.currentUser = async (req, res) => {
  try {
    console.timeLog("currentUser");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

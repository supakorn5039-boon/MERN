const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { token } = require("morgan");

const { notifyline, getIPClient } = require("../Functions/Notify");

const tokenLine = "ecOiaHl3SEh3aH9r7dPGhSUVeN8PPVNEcCia4HzF4zR";

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

    const ip = await getIPClient(req);

    const { name, password } = req.body;

    var user = await User.findOneAndUpdate({ name }, { ip: ip }, { new: true });
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

      //Notify
      const text = "User" + user.name + "login from IPAddress : " + ip;

      await notifyline(tokenLine, text);

      // 3. Generate Token
      jwt.sign(payload, "jwtsecret", { expiresIn: "1d" }, (err, token) => {
        if (err) throw err;
        res.json({ token, payload });
      });
    } else {
      const text = "user" + name + "Try to login from IPAddress : " + ip;
      await notifyline(tokenLine, text);
      return res.status(400).send("User Not Found!!!");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

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

exports.loginLine = async (req, res) => {
  try {
    const { userId, displayName, pictureUrl } = req.body;
    console.log(displayName);
    var data = {
      name: userId,
      displayName: displayName,
      picture: pictureUrl,
    };
    // 1. Check Already have an account ?
    var user = await User.findOneAndUpdate({ name: userId }, { new: true });

    if (user) {
      console.log("User Updated!!!");
    } else {
      user = new User(data);
      await user.save();
    }

    // 2. Payload
    var payload = { user };

    // 3. Generate
    jwt.sign(payload, "jwtsecret", { expiresIn: "1d" }, (err, token) => {
      if (err) throw err;
      res.json({ token, payload });
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.loginFacebook = async (req, res) => {
  try {
    const { userID, name, email } = req.body;
    console.log(displayName);
    var data = {
      name: userID,
      displayName: name,
      email: email,
    };
    // 1. Check Already have an account ?
    var user = await User.findOneAndUpdate({ name: userID }, { new: true });

    if (user) {
      console.log("User Updated!!!");
    } else {
      user = new User(data);
      await user.save();
    }

    // 2. Payload
    var payload = { user };

    // 3. Generate
    jwt.sign(payload, "jwtsecret", { expiresIn: "1d" }, (err, token) => {
      if (err) throw err;
      res.json({ token, payload });
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

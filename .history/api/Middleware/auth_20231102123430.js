const jwt = require("jsonwebtoken");
const User = require("../Models/User");

exports.auth = async (req, res, next) => {
  try {
    const token = req.headers["authtoken"];
    if (!token) {
      return res.status(401).send("No Token");
    }
    const decoded = jwt.verify(token, "jwtsecret");
    req.user = decoded.user;

    next();
  } catch (err) {
    console.log(err);
    res.send("Token Invalid!!!").status(500);
  }
};

exports.adminCheck = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(403).send("Admin Access Denied!!!");
  }
};

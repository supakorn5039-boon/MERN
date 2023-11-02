const Product = require("../Models/Product

exports.read = async (req, res) => {
  res.send("Hello Controller Read");
};

exports.list = async (req, res) => {
  // Similar to (if,else) try can't response it'll go to catch function
  // (try) Check for the error if it's has the server will be not response
  try {
    //code
    res.send("Hello List");
  } catch (err) {
    // catch the error on below
    //error
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.create = async (req, res) => {
  try {
    res.send("Hello Create");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.update = async (req, res) => {
  try {
    res.send("Hello Update");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.remove = async (req, res) => {
  try {
    res.send("Hello Delete");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

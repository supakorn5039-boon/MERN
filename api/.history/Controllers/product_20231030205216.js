const Product = require("../Models/Product");

exports.read = async (req, res) => {
  try {
    const id = req.params.id;

    const producted = await Product.findOne({ _id: id }).exec();

    res.send(producted);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.list = async (req, res) => {
  // Similar to (if,else) try can't response it'll go to catch function
  // (try) Check for the error if it's has the server will be not response
  try {
    //code
    const producted = await Product.find({}).exec();

    res.send(producted);
  } catch (err) {
    // catch the error on below
    //error
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.create = async (req, res) => {
  try {
    console.log(req.body);

    const producted = await Product(req.body).save();

    res.send(producted);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    }).exec();

    res.send(updated);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.remove = async (req, res) => {
  try {
    const id = req.params.id;
    const removed = await Product.findOneAndDelete(
      { _id: id },
      {
        new: true,
      }
    ).exec();
    res.send(removed);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

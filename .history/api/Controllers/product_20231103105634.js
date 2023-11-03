const Product = require("../Models/Product");
const fs = require("fs");

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

exports.listby = async (req, res) => {
  try {
    const producted = await Product.find({})
      .limit()
      .sort([["price", "asc"]])
      .exec();
    res.send(producted);
  } catch (err) {
    console.log(err);
  }
};

exports.create = async (req, res) => {
  try {
    var data = req.body;

    if (req.file) {
      data.file = req.file.filename;
    }

    console.log(data);

    const producted = await Product(data).save();

    res.send(producted);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    var newData = req.body;

    if (typeof req.file !== "undefined") {
      newData.file = req.file.filename;
      await fs.unlink("./uploads/" + newData.fileold, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Edit Success");
        }
      });
    }

    const updated = await Product.findOneAndUpdate({ _id: id }, newData, {
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
    const removed = await Product.findOneAndDelete({ _id: id }).exec();

    if (removed?.file) {
      await fs.unlink("./uploads/" + removed.file, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Remove Success");
        }
      });
    }
    res.send(removed);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

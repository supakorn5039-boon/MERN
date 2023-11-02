exports.read = async (req, res) => {
  res.send("Hello Controller Read");
};

exports.list = async (req, res) => {
  // Similar to (if,else) try can't response it'll go to catch function
  // (try) Check for the error if it's has the server will be not response
  try {
    res.send("Hello List");
  } catch (err) {
    // catch the error on below
    console.log(err);
    res.status(500).send;
  }
};

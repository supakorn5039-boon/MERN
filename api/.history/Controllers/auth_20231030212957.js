exports.register = async (req, res) => {
  try {
    res.send("Hello Register Controller ");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.login = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

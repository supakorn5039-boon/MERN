const User = require("../Models/User");

exports.list = async (req, res) => {
  try {
    const user = await User.find({})
      // Remove password from backend send to frontend
      .select("-password")
      .exec();

    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.changeRole = async (req, res) => {
  try {
    const { id, role } = req.body.data;
    console.log(id);

    res.send(req.body);
    // const user = await User.find()
    //   .select("-password")
    //   .exec();
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

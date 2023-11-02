const User = require("../Models/User");

exports.list = async (req, res) => {
  try {
    const user = await User.find({})
      // Remove password from backend
      .select("-password")
      .exec();

    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

const axios = require("axios");

exports.notifyline = async (req, res) => {
  try {
    //code

    const response = await axios({
      method: "POST",
      url: "https://notify-api.line.me/api/notify",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer ecOiaHl3SEh3aH9r7dPGhSUVeN8PPVNEcCia4HzF4zR",
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const axios = require("axios");

exports.notifyline = async (token, message) => {
  try {
    //code

    const response = await axios({
      method: "POST",
      url: "https://notify-api.line.me/api/notify",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer ecOiaHl3SEh3aH9r7dPGhSUVeN8PPVNEcCia4HzF4zR",
      },
      data: "message=",
    });
  } catch (err) {
    console.log(err);
  }
};

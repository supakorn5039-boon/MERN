const axios = require("axios");

exports.notifyline = async (req, res) => {
  try {
    //code

    const response = await axios({
      method: "POST",
      url: "https://notify-api.line.me/api/notify",
      headers: {
        "Content-Type": "",
        Authorization: "",
      },
    });
  } catch (err) {
    console.log(err);
  }
};

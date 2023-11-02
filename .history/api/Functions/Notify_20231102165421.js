const axios = require("axios");

exports.notifyline = async (token, message) => {
  try {
    //code

    const response = await axios({
      method: "POST",
      url: "https://notify-api.line.me/api/notify",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer" + token,
      },
      data: "message=" + message,
    });
  } catch (err) {
    console.log(err);
  }
};

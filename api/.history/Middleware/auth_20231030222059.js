exports.auth = async (res, req, next) => {
  try {
    const token = req.headers["authtoken"];
    console.log(token);
    next();
  } catch (err) {
    console.log(err);
    res.send("Server Error").status(500);
  }
};

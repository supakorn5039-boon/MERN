exports.auth = async (res, req, next) => {
  try {
    const token = req.headers["authtoken"];
    if (!token) {
      return res.status(401).send("No Token");
    }
    console.log(token);
    next();
  } catch (err) {
    console.log(err);
    res.send("Server Error").status(500);
  }
};

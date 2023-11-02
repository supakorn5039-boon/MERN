exports.auth = async (req, res, next) => {
  try {
    const token = req.headers["authtoken"];
    if (!token) {
      return res.status(401).send("No Token");
    }
    const decoded = jwt.verify(token, "jwtsecret");
    console.log(decoded);

    next();
  } catch (err) {
    console.log(err);
    res.send("Token Invalid!!!").status(500);
  }
};

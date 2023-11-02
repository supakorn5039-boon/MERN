const express = require("express");

const router = express.Router();

router.get("/product", (req, res) => {
  res.send("Hello Product endpoint");
});

module.exports = router;

const express = require("express");

const router = express.Router();

// http://localhost:3000/api/product
router.get("/product", (req, res) => {
  res.send("Hello Product endpoint");
});

module.exports = router;

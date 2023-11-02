const express = require("express");

const router = express.Router();

// http://localhost:3000/api/product
router.get("/product", (req, res) => {
  res.send("Hello Product endpoint");
});

router.post("/product", (req, res) => {
  res.send("Hello Post Endpoint");
});

router.put("product", (req, res) => {
  res.send("Hello Put endpoint ");
});

module.exports = router;

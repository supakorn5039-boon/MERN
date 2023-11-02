const express = require("express");

const router = express.Router();

// http://localhost:3000/api/product

// Get =
router.get("/product", (req, res) => {
  res.send("Hello Product endpoint");
});

router.get("/product/:id", (req, res) => {
  res.send("Hello Product endpoint");
});

router.post("/product", (req, res) => {
  res.send("Hello Post Endpoint");
});

router.put("/product", (req, res) => {
  res.send("Hello Put endpoint ");
});

router.delete("/product", (req, res) => {
  res.json({ name: "Boon", id: 555 });
});

module.exports = router;

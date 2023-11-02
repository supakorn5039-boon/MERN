const express = require("express");
const router = express.Router();

const { read } = require("../Controllers/product");
const { list } = require("../Controllers/product");

// http://localhost:3000/api/product

// Get =
router.get("/product", (req, res) => {
  res.send("Hello Product endpoint");
});

router.get("/product/:id", read);

router.post("/product/", (req, res) => {
  res.send("Hello Post Endpoint");
});

router.put("/product/:id", (req, res) => {
  res.send("Hello Put endpoint ");
});

router.delete("/product/:id", (req, res) => {
  res.json({ name: "Boon", id: 555 });
});

module.exports = router;

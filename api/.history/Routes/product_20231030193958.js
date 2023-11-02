const express = require("express");
const router = express.Router();

const { read, list, create } = require("../Controllers/product");

// http://localhost:3000/api/product

// Get =
router.get("/product", list);

router.get("/product/:id", read);

router.post("/product/", create);

router.put("/product/:id", (req, res) => {
  res.send("Hello Put endpoint ");
});

router.delete("/product/:id", (req, res) => {
  res.json({ name: "Boon", id: 555 });
});

module.exports = router;

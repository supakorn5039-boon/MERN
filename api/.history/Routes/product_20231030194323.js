const express = require("express");
const router = express.Router();

const { read, list, create, update , delete } = require("../Controllers/product");

// http://localhost:3000/api/product

// Get =
router.get("/product", list);

router.get("/product/:id", read);

router.post("/product/", create);

router.put("/product/:id", update);

router.delete("/product/:id",delete )
module.exports = router;

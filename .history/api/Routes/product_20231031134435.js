const express = require("express");
const router = express.Router();

const {
  read,
  list,
  create,
  update,
  remove,
} = require("../Controllers/product");

// Middleware
const { auth } = require("../Middleware/auth");
const admin = require("../Config/firebase");

const appCheck = admin.appCheck();

//appCheckVerification

// http://localhost:3001/api/product

// Get =
router.get("/product", list);

router.get("/product/:id", read);

router.post("/product/", create);

router.put("/product/:id", update);

router.delete("/product/:id", remove);

module.exports = router;

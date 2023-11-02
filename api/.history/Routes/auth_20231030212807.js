const express = require("express");
const { register } = require("../Controllers/auth");

const router = express.Router();

// http://localhost:3000/api/register
router.post("/register", register);

router.post("/login", (req, res) => {
  res.send("Hello Login");
});

module.exports = router;

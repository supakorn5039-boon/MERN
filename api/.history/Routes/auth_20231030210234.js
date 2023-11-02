const express = require("express");

const router = express.Router();

// http://localhost:3000/api/register
router.post("/register", (req, res) => {
  res.send("Register Success");
});

router.post("/login", (req, res) => {
  res.send("Login Success");
});

module.exports = router;

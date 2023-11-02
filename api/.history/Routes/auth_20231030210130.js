const express = require("express");

const router = express.Router();

// http://localhost:3000/api/register
router.get("/register", (req, res) => {
  res.send("Hello Auth endpoint");
});

module.exports = router;

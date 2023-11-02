const express = require("express");
const { list } = require("../Controllers/user");

const { auth, adminCheck } = require("../Middleware/auth");
const router = express.Router();

// http://localhost:3001/api/user

router.post("/user", auth, adminCheck, list);

module.exports = router;

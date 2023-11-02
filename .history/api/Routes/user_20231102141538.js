const express = require("express");
const { register, login, currentUser } = require("../Controllers/auth");

const { auth, adminCheck } = require("../Middleware/auth");
const router = express.Router();

// http://localhost:3001/api/user

router.post("/user", auth, adminCheck, currentUser);

module.exports = router;

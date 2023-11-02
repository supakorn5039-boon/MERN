const express = require("express");
const { register, login } = require("../Controllers/auth");

// Middleware

const { auth } = require("../Middleware/auth");

const router = express.Router();

// http://localhost:3000/api/register
router.post("/register", register);

router.post("/login", login);

module.exports = router;
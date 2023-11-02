const express = require("express");
const { register, login, currentUser } = require("../Controllers/auth");

const router = express.Router();

// http://localhost:3001/api/register
router.post("/register", register);
router.post("/login", login);
router.post("/current-user", currentUser);

module.exports = router;

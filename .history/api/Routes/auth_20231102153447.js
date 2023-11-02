const express = require("express");
const {
  register,
  login,
  currentUser,
  loginLine,
} = require("../Controllers/auth");

const { auth, adminCheck } = require("../Middleware/auth");
const router = express.Router();

// http://localhost:3001/api/register
router.post("/register", register);
router.post("/login", login);
router.post("/login-line", loginLine);
router.post("/current-user", auth, currentUser);
router.post("/current-admin", auth, adminCheck, currentUser);

module.exports = router;

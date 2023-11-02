const express = require("express");
import { log } from "../node_modules/@types/node/ts4.8/util.d";
const { register, login } = require("../Controllers/auth");

const router = express.Router();

// http://localhost:3000/api/register
router.post("/register", register);

router.post("/login", log);

module.exports = router;

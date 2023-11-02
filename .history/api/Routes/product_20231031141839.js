const express = require("express");
const router = express.Router();

const {
  read,
  list,
  create,
  update,
  remove,
} = require("../Controllers/product");

// Middleware Token
const { auth } = require("../Middleware/auth");
const { upload } = require("../Middleware/upload");

//Firebase
const admin = require("../Config/firebase");
const appCheck = admin.appCheck();
const { getAppCheck } = require("firebase-admin/app-check");

const appCheckVerification = async (req, res, next) => {
  const appCheckToken = req.header("X-Firebase-AppCheck");

  if (!appCheckToken) {
    res.status(401);
    return next("Unauthorized");
  }

  try {
    const appCheckClaims = await getAppCheck().verifyToken(appCheckToken);

    // If verifyToken() succeeds, continue with the next middleware
    // function in the stack.
    return next();
  } catch (err) {
    res.status(401);
    return next("Unauthorized");
  }
};

// http://localhost:3001/api/product

// Get =
router.get("/product", auth, list);

router.get("/product/:id", auth, read);

router.post("/product/", auth, upload, create);

router.put("/product/:id", auth, update);

router.delete("/product/:id", auth, remove);

module.exports = router;

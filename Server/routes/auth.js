const express = require("express");
const router = express.Router();
const { verifyToken } = require("../controllers/authController");

// Other authentication routes

// Protected route to verify token
router.get("/dashboard", verifyToken);

module.exports = router;

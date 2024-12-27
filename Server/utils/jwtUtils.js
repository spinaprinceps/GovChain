const jwt = require("jsonwebtoken");

exports.signToken = (payload) => {
  const secret = process.env.JWT_SECRET || "fallback-secret"; // Fallback for debugging
  if (!secret) {
    throw new Error("JWT_SECRET is not set in environment variables.");
  }
  return jwt.sign(payload, secret, { expiresIn: "1h" });
};



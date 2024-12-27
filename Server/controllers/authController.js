const User = require("../models/userModel");
const { generateNonce } = require("../utils/generateNonce");
const { signToken } = require("../utils/jwtUtils");
const ethers = require("ethers");
const jwt = require("jsonwebtoken");

// Generate a nonce for wallet authentication
exports.getNonce = async (req, res) => {
  const { walletAddress } = req.params;

  try {
    let user = await User.findOne({ walletAddress });

    if (!user) {
      user = new User({ walletAddress, nonce: generateNonce() });
      await user.save();
    }

    res.json({ nonce: user.nonce });
  } catch (error) {
    console.error("Error fetching nonce:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Verify the wallet signature and authenticate the user
exports.verifySignature = async (req, res) => {
  const { walletAddress, signature } = req.body;

  try {
    const user = await User.findOne({ walletAddress });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const message = `Nonce: ${user.nonce}`;
    const recoveredAddress = ethers.utils.verifyMessage(message, signature);

    if (recoveredAddress.toLowerCase() !== walletAddress.toLowerCase()) {
      return res.status(401).json({ error: "Invalid signature" });
    }

    // Generate a new nonce for the next authentication
    user.nonce = generateNonce();
    await user.save();

    // Sign and return a JWT token
    const token = signToken({ walletAddress });
    res.json({ token });
  } catch (error) {
    console.error("Error verifying signature:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Verify the JWT token for protected routes
exports.verifyToken = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Access Denied: No Token Provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ success: true, user: decoded });
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(401).json({ error: "Invalid Token" });
  }
};

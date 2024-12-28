const User = require("../models/userModel");
const { generateNonce } = require("../utils/generateNonce");
const { signToken } = require("../utils/jwtUtils");
const ethers = require("ethers");

/**
 * Get a nonce for a wallet address.
 */
exports.getNonce = async (req, res) => {
  const { walletAddress } = req.params;

  try {
    let user = await User.findOne({ walletAddress });

    if (!user) {
      console.log(`User not found. Creating new user: ${walletAddress}`);
      user = new User({
        walletAddress,
        nonce: generateNonce(),
      });
      await user.save();
    }

    res.json({ nonce: user.nonce });
  } catch (error) {
    console.error("Error in getNonce:", error);
    res.status(500).json({ error: "Server error" });
  }
};

/**
 * Verify the signature of a wallet address.
 */
exports.verifySignature = async (req, res) => {
  const { walletAddress, signature } = req.body;

  if (!walletAddress || !signature) {
    return res.status(400).json({ error: "Missing walletAddress or signature" });
  }

  try {
    const user = await User.findOne({ walletAddress: walletAddress.toLowerCase() });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const message = `Nonce: ${user.nonce}`;
    console.log("Verifying signature with message:", { message, signature });

    let recoveredAddress;
    try {
      recoveredAddress = ethers.verifyMessage(message, signature);
    } catch (error) {
      console.error("Error in signature verification:", error);
      return res.status(400).json({ error: "Invalid signature format" });
    }

    if (recoveredAddress.toLowerCase() !== walletAddress.toLowerCase()) {
      return res.status(401).json({ error: "Invalid signature" });
    }

    // Signature verified, update nonce and issue token
    user.nonce = generateNonce();
    await user.save();

    const token = signToken({ walletAddress });
    console.log("User authenticated successfully:", walletAddress);

    return res.json({ token });
  } catch (error) {
    console.error("Error in verifySignature:", error);
    return res.status(500).json({ error: "Server error in signature verification" });
  }
};

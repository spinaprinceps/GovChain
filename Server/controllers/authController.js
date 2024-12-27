const User = require("../models/userModel");
const { generateNonce } = require("../utils/generateNonce");
const { signToken } = require("../utils/jwtUtils");
const ethers = require("ethers");

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
    res.status(500).json({ error: "Server error" });
  }
};

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

    user.nonce = generateNonce();
    await user.save();

    const token = signToken({ walletAddress });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

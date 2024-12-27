const User = require("../models/userModel");
const { generateNonce } = require("../utils/generateNonce");
const { signToken } = require("../utils/jwtUtils");
const ethers = require("ethers");

exports.getNonce = async (req, res) => {
  const { walletAddress } = req.params;

  try {
    let user = await User.findOne({ walletAddress: walletAddress.toLowerCase() });

    if (!user) {
      console.log("User not found. Creating new user:", walletAddress);
      user = new User({
        walletAddress: walletAddress.toLowerCase(),
        nonce: generateNonce(),
      });
      await user.save();
    }

    console.log("Sending nonce:", { walletAddress: user.walletAddress, nonce: user.nonce });
    res.json({ nonce: user.nonce });
  } catch (error) {
    console.error("Error in getNonce:", error);
    res.status(500).json({ error: "Server error in getting nonce" });
  }
};

exports.verifySignature = async (req, res) => {
  try {
    const { walletAddress, signature } = req.body;

    console.log("1️⃣ Backend received:", { walletAddress, signature });

    if (!walletAddress || !signature) {
      return res.status(400).json({ error: "Missing walletAddress or signature" });
    }

    const user = await User.findOne({ walletAddress: walletAddress.toLowerCase() });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const message = `Nonce: ${user.nonce}`;
    console.log("2️⃣ Verifying signature with message:", { message, signature });

    try {
      const recoveredAddress = ethers.verifyMessage(message, signature);

      if (recoveredAddress.toLowerCase() === walletAddress.toLowerCase()) {
        // Signature verified
        user.nonce = generateNonce(); // Update the nonce for security
        await user.save();

        const token = signToken({ walletAddress });
        console.log("✅ User authenticated:", walletAddress);

        return res.json({ token });
      } else {
        return res.status(401).json({ error: "Invalid signature" });
      }
    } catch (error) {
      console.error("Error in signature verification:", error);
      return res.status(500).json({ error: "Signature verification failed" });
    }
  } catch (error) {
    console.error("Error in verifySignature:", error);
    return res.status(500).json({ error: "Server error in signature verification" });
  }
};

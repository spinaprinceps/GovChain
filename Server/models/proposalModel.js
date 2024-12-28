const mongoose = require("mongoose");

const proposalSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Updated to lowercase
  description: { type: String, required: true }, // Updated to lowercase
  walletAddress: { type: String, required: true },
});

module.exports = mongoose.model("Proposal", proposalSchema);

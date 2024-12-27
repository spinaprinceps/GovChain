const express = require("express");
const { createProposal, voteProposal, getProposals } = require("../controllers/proposalController");
const router = express.Router();

// Route to create a new proposal
router.post("/createproposal", createProposal);

// Route to vote on a proposal
router.post("/proposal/vote", voteProposal);

// Route to get all proposals
router.get("/", getProposals);

module.exports = router;

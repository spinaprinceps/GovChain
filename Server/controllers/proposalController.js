const Proposal = require("../models/proposalModel");

// Create a new proposal
exports.createProposal = async (req, res) => {
  const { title, description, createdBy } = req.body;

  try {
    const newProposal = new Proposal({ title, description, createdBy });
    await newProposal.save();
    res.status(201).json({ message: "Proposal created successfully", proposal: newProposal });
  } catch (error) {
    console.error("Error creating proposal:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Vote on a proposal
exports.voteProposal = async (req, res) => {
  const { proposalId, voteType } = req.body;

  try {
    const proposal = await Proposal.findById(proposalId);

    if (!proposal) {
      return res.status(404).json({ error: "Proposal not found" });
    }

    if (voteType === "upvote") {
      proposal.votes.upvotes += 1;
    } else if (voteType === "downvote") {
      proposal.votes.downvotes += 1;
    } else {
      return res.status(400).json({ error: "Invalid vote type" });
    }

    await proposal.save();
    res.json({ message: "Vote recorded", proposal });
  } catch (error) {
    console.error("Error voting on proposal:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get all proposals
exports.getProposals = async (req, res) => {
  try {
    const proposals = await Proposal.find();
    res.json(proposals);
  } catch (error) {
    console.error("Error fetching proposals:", error);
    res.status(500).json({ error: "Server error" });
  }
};

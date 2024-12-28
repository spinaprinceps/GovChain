
const Proposal = require("../models/proposalModel");

exports.createProposal = async (req, res) => {
  try {
    console.log("Request body:", req.body); // Debugging line

    const { title, description, createdBy } = req.body;

    // Ensure all required fields are provided
    if (!title || !description || !createdBy) {
      return res.status(400).json({
        error: "All fields (title, description, createdBy) are required.",
      });
    }

    const newProposal = new Proposal({
      title,
      description,
      walletAddress: createdBy, // Matches schema
    });

    await newProposal.save();
    res.status(201).json({ message: "Proposal created successfully." });
  } catch (err) {
    console.error("Error creating proposal:", err);
    res.status(500).json({ error: "Server error. Please try again." });
  }
};



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

exports.getProposals = async (req, res) => {
  try {
    const proposals = await Proposal.find();
    res.json(proposals);
  } catch (error) {
    console.error("Error fetching proposals:", error);
    res.status(500).json({ error: "Server error" });
  }
};

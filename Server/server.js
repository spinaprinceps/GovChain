const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
require('dotenv').config(); // Load environment variables

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// Authentication and wallet-related routes
app.use("/auth", require("./routes/auth"));

// Proposal-related routes
app.use("/proposals", require("./routes/proposal"));

// Default route to ensure server is running
app.get("/", (req, res) => {
  res.send("Welcome to the GovChain Backend!");
});

// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

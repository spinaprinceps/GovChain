const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
require('dotenv').config(); // Load environment variables

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.use("/auth", require("./routes/auth"));

// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

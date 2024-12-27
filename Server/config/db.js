const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Ensure the URI string is properly enclosed in quotes
    await mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://sharadsr69:sharad%40123@cluster0.vcqbw.mongodb.net/');
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

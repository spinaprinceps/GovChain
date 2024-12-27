const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // The new connection syntax no longer requires `useNewUrlParser` and `useUnifiedTopology` options
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit the process with failure code
  }
};

module.exports = connectDB;

const userSchema = new mongoose.Schema({
    walletAddress: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    nonce: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true, // Retain unique constraint if needed
      sparse: true, // Allows multiple null values
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  module.exports = mongoose.model("User", userSchema);
  
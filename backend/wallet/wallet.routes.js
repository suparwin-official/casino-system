import mongoose from "mongoose";

const walletSchema = new mongoose.Schema({
  userId: String,
  balance: { type: Number, default: 1000 }
});

export default mongoose.model("Wallet", walletSchema);

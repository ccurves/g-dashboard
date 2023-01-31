const mongoose = require("mongoose");

const WalletSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    shareUint: {
      type: Number,
      max: 10,
    },
    dividends: {
      type: Number,
    },
    refBouns: {
      type: Number,
    },
    totalEarned: {
      type: Number,
    },
    shareType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shares",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Wallet", WalletSchema);

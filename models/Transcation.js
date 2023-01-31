const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    units: {
      type: Number,
    },
    bank: {
      type: String,
    },
    fullname: {
      type: String,
    },
    acctNum: {
      type: Number,
    },
    status: {
      type: String,
      default: "pending",
    },
    source: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", TransactionSchema);

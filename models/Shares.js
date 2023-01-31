const mongoose = require("mongoose");

const SharesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    roi: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
    },
    duration: {
      type: Number,
    },
    startDate: {
      type: Date,
    },
    maturityDate: {
      type: Date,
    },
    holders: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        units: "Number",
      },
    ],
    isRunning: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shares", SharesSchema);

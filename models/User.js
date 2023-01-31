const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
    },
    kycDoc: {
      type: String,
      default: "",
    },
    rejectCause: {
      type: String,
      default: "",
    },
    referredBy: {
      type: String,
    },
    kycStatus: {
      type: String,
      default: "unverified",
    },
    refStatus: {
      type: String,
      default: "unverified",
    },
    resetPasswordLink: {
      data: String,
      default: "",
    },
    verified: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: "user",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    shareType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shares",
    },
    wallet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Wallet",
    },
    refId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Affilate",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

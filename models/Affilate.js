const mongoose = require("mongoose");

const affilateSchema = new mongoose.Schema({
  refLink: {
    type: String,
    unique: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  exp: {
    type: String,
  },
  platforms: [
    {
      name: {
        type: String,
      },
      link: {
        type: String,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
    default: "unverified",
  },
});

module.exports = mongoose.model("Affilate", affilateSchema);

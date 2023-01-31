const Shares = require("../models/Shares");

exports.createController = async (req, res) => {
  const newShare = new Shares({
    name: req.body.name,
    roi: req.body.roi,
    amount: req.body.amount,
    duration: req.body.duration,
  });

  try {
    const savedShare = await newShare.save();
    res.status(201).json(savedShare);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.readController = async (req, res) => {
  try {
    const shares = await Shares.find();
    res.status(201).json(shares);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateController = async (req, res) => {
  try {
    const updateShare = await Shares.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(201).json(updateShare);
  } catch (error) {
    res.status(500).json(error);
  }
};

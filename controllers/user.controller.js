const { generateRandomString } = require("../helpers/softFunctions");
const Affilate = require("../models/Affilate");
const User = require("../models/User");
const Wallet = require("../models/Wallet");

exports.readController = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    const { password, ...others } = user._doc;
    return res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateController = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "User update failed",
    });
  }
};

exports.uploadController = async (req, res) => {
  const file = req.body.file;
  User.findOne({ _id: req.body.userId }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    if (!file) {
      return res.status(400).json({
        error: "A valid file is required",
      });
    } else {
      user.kycDoc = file;
      user.kycStatus = "pending";
    }
    user.save((err, updatedUser) => {
      if (err) {
        console.log("USER UPDATE ERROR", err);
        return res.status(400).json({
          error: "User update failed",
        });
      }
      res.json(updatedUser);
    });
  });
};

exports.walletController = async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ userId: req.params.id });
    return res.status(200).json(wallet);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.affilateController = async (req, res) => {
  try {
    Affilate.findOne({ userId: req.body.userId }, (err, affilate) => {
      if (!affilate && !err) {
        User.findOne({ _id: req.body.userId }, async (err, user) => {
          const link = generateRandomString(6);
          const newAffilate = new Affilate({
            userId: req.body.userId,
            exp: req.body.exp,
            refLink: link,
          });

          req.body.platforms.map((platform) => {
            newAffilate.platforms.push({
              name: platform.name,
              link: platform.link,
            });
          }),
            (user.refStatus = "pending");
          const savedUser = await user.save();
          await newAffilate.save();

          const message = `Hello ${user.lastname}, your application has been submitted`;

          const { password, ...others } = savedUser._doc;
          return res.status(200).json({ others, message });
        });
      } else {
        return res.status(400).json({
          error: "You can only apply once",
        });
      }
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteController = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    await Wallet.findOneAndDelete({ userId: req.params.id });
    await Affilate.findOneAndDelete({ userId: req.params.id });
    res.status(200).json("User has been deleted...");
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.statsController = async (req, res) => {
  Wallet.findOne({ userId: req.params.id }, (err, wallet) => {
    if (err || !wallet) {
      return res.status(400).json({
        errors: "User not exist. Please signup",
      });
    }
    Affilate.findOne({ userId: wallet.userId }, (err, affilate) => {
      if (err || !affilate) {
        return res.status(400).json({
          errors: "User is not an affilate",
        });
      }
      User.find({ referredBy: affilate.refLink }, (err, users) => {
        users.forEach((user) => {
          let id = user._id.toString();

          Wallet.findOne({ userId: id }, async (err, refwallet) => {
            // console.log(refwallet);
            user.wallet = refwallet._id;
            await user.save();
          });
        });

        User.find({ referredBy: affilate.refLink })
          .populate("wallet")
          .then((referrals) => {
            return res.status(200).json({ wallet, affilate, referrals });
          });
      });
    });
  });
};

const Transcation = require("../models/Transcation");
const Wallet = require("../models/Wallet");
const Shares = require("../models/Shares");
const Affilate = require("../models/Affilate");
const https = require("https");
const axios = require("axios");
const { errorHandler } = require("../helpers/dbErrorHandling");
const DOMAIN = process.env.DOMAIN;

const formData = require("form-data");
const Mailgun = require("mailgun.js");
const User = require("../models/User");
const Flutterwave = require("flutterwave-node-v3");
const flw = new Flutterwave(
  process.env.FLW_PUBLIC_KEY,
  process.env.FLW_SECRET_KEY
);

const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: "api", key: process.env.API_KEY });

exports.purchaseController = async (req, res) => {
  const ref = req.params.ref;

  flw.Transaction.verify({ id: ref })
    .then((response) => {
      let info = response.data;
      let metadata = info.meta;

      if (info.status === "successful") {
        let amount = info.amount;
        let units = metadata.units;
        const commission = +((10 / 100) * amount);

        const newTransaction = new Transcation({
          userId: metadata.userId,
          amount,
          type: "Purchase",
          units,
          fullname: metadata.fullname,
          status: "Successful",
        });
        Wallet.findOne({ userId: metadata.userId }, (err, wallet) => {
          Shares.findOne({ name: metadata.category }, (err, shares) => {
            let user = shares.holders.filter(function (e) {
              return (e.userId = metadata.userId);
            });

            if (user.length > 0) {
              user[0].units = +(wallet.shareUint + +units);
              if (user[0].units > 10) {
                return res.status(400).json({
                  error: "Max units a user can own is 10!",
                });
              } else {
                wallet.shareUint = user[0].units;

                shares.save();
                wallet.save();
                newTransaction.save();
              }
            } else {
              shares.holders.push({
                userId: metadata.userId,
                units,
              });
              wallet.shareUint = units;
              wallet.shareType = shares._id;
              shares.save();
              wallet.save();

              newTransaction.save();
            }
            User.findOne({ _id: metadata.userId }, (err, user) => {
              Affilate.findOne(
                { refLink: user.referredBy },
                (err, referrer) => {
                  if (referrer === null) {
                    return;
                  }

                  Wallet.findOneAndUpdate(
                    { userId: referrer.userId },
                    { $inc: { refBouns: commission } },
                    (err, refWallet) => {}
                  );
                }
              );
              const messageData = {
                from: `GGConcepts  ${process.env.EMAIL_FROM}`,
                to: user.email,
                subject: "G-1000 Share Unit Purchase",
                html: `<!DOCTYPE html>
      <html style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
      <head>
      <meta name="viewport" content="width=device-width" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Share Unit Purchase</title>

      <style type="text/css">
      img {
      max-width: 100%;
      }
      body {
      -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em;
      }
      body {
      background-color: #f6f6f6;
      }
      @media only screen and (max-width: 640px) {
        body {
          padding: 0 !important;
        }
        h1 {
          font-weight: 800 !important; margin: 20px 0 5px !important;
        }
        h2 {
          font-weight: 800 !important; margin: 20px 0 5px !important;
        }
        h3 {
          font-weight: 800 !important; margin: 20px 0 5px !important;
        }
        h4 {
          font-weight: 800 !important; margin: 20px 0 5px !important;
        }
        h1 {
          font-size: 22px !important;
        }
        h2 {
          font-size: 18px !important;
        }
        h3 {
          font-size: 16px !important;
        }
        .container {
          padding: 0 !important; width: 100% !important;
        }
        .content {
          padding: 0 !important;
        }
        .content-wrap {
          padding: 10px !important;
        }
        .invoice {
          width: 100% !important;
        }
      }
      </style>
      </head>

      <body itemscope itemtype="http://schema.org/EmailMessage" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6">

      <table class="body-wrap" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" valign="top"></td>
          <td class="container" width="600" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;" valign="top">
            <div class="content" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;">
              <table class="main" width="100%" cellpadding="0" cellspacing="0" itemprop="action" itemscope itemtype="http://schema.org/ConfirmAction" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; background-color: #fff; margin: 0; border: 1px solid #e9e9e9;" bgcolor="#fff"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-wrap" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 20px;" valign="top">
                    <meta itemprop="name" content="Confirm Email" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;" /><table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">

                    <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; align-item: center"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top" align="center">
                     <img alt="Image" src="https://res.cloudinary.com/gg-concepts-ltd/image/upload/v1651084188/photo_2022-04-27_19-25-47_k7k58h.jpg"
                           id=navbar-logo style=" width: 270px">
                        </td>
                      </tr>

                    <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                          Hello ${user.firstname},
                        </td>
                      </tr>
                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                         Congratulations on purchasing your shares and investment unit. I welcome you on board as an investor and verified share holder of the G1000. Pls kindly note that G1000 investments would officially start reading when all investments has been placed for operations.
                        </td>
                      </tr>
                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                      You can do well to join our G-Affiliate program through your dashboard, Kindly click this link to join our shareholders forum on telegram <a href="https://t.me/+GkWkqzIziVIzZjZk">https://t.me/+GkWkqzIziVIzZjZk</a>.
                        </td>
                      </tr>
                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" itemprop="handler" itemscope itemtype="http://schema.org/HttpActionHandler" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                        Congratulations once again and welcome on board.
                        </td>
                      </tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                      CEO, GG Concepts Ltd. <br/>
                          &mdash; Gaius Kingsley.
                        </td>
                      </tr></table></td>
                </tr></table><div class="footer" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; clear: both; color: #999; margin: 0; padding: 20px;">
                <table width="100%" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="aligncenter content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; vertical-align: top; color: #999; text-align: center; margin: 0; padding: 0 0 20px;" align="center" valign="top">Questions? Email <a href="mailto:info@ggconcept.org<" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; color: #999; text-decoration: underline; margin: 0;">info@ggconcept.org</a></td>
                  </tr></table></div></div>
          </td>
          <td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" valign="top"></td>
        </tr></table></body>
      </html>`,
              };

              client.messages.create(DOMAIN, messageData).then((sent) => {
                res.status(200).json({
                  message: `Purchase successful! An email has been sent to ${user.email}`,
                });
              });
            });
          });
        });
      } else {
        return res.status(400).json({
          message: "Transaction failed. Try Later",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        success: false,
        errors: "Transaction failed. Something went wrong",
      });
    });
};

exports.withdrawController = async (req, res) => {
  const newTransaction = new Transcation({
    userId: req.body.userId,
    amount: req.body.amount,
    type: req.body.type,
    fullname: req.body.acctName,
    bank: req.body.bank,
    acctNum: req.body.acctNum,
    source: req.body.source,
  });

  try {
    let transactions = await Transcation.find({
      userId: req.body.userId,
      status: "pending",
    });
    // let transactions = usertransactions.find({ status: "pending" });
    if (transactions.length !== 0) {
      res.status(201).json({ message: "You already have a pending request" });
    } else {
      const savedTransaction = await newTransaction.save();
      // res.status(201).json(savedTransaction);
      res.status(201).json({ message: "Withrawal request placed..." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.transController = async (req, res) => {
  try {
    const transactions = await Transcation.find();

    res.status(201).json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.userTransController = async (req, res) => {
  Transcation.find({ userId: req.params.id }, (err, transactions) => {
    if (err || !transactions) {
      console.log(err);
      return res.status(400).json({
        errors: "Something went wrong, please try again later",
      });
    }
    return res.status(200).json(transactions);
  });
};

exports.updateController = async (req, res) => {
  const status = req.body.status;
  Transcation.findOne({ _id: req.params.id }, async (err, transaction) => {
    if (err || !transaction) {
      console.log(err);
      return res.status(400).json({
        errors: "Something went wrong, please try again later",
      });
    } else {
      if (status === "paid") {
        let newBalance;
        Wallet.findOne({ userId: transaction.userId }, async (err, wallet) => {
          const source = transaction.source;
          if (source == "refBouns") {
            newBalance = wallet.refBouns - transaction.amount;
            wallet.refBouns = newBalance;
          }
          if (source == "dividends") {
            newBalance = wallet.dividends - transaction.amount;
            wallet.dividends = newBalance;
          }
          await wallet.save();
          transaction.status = status;
          await transaction.save();
          User.findOne({ _id: wallet.userId }, (err, user) => {
            const messageData = {
              from: `GGConcepts  ${process.env.EMAIL_FROM}`,
              to: user.email,
              subject: "Transaction Notification",
              html: `<!DOCTYPE html>
          <html style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
          <head>
          <meta name="viewport" content="width=device-width" />
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <title>Withdrawal Confrimation</title>

          <style type="text/css">
          img {
          max-width: 100%;
          }
          body {
          -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em;
          }
          body {
          background-color: #f6f6f6;
          }
          @media only screen and (max-width: 640px) {
            body {
              padding: 0 !important;
            }
            h1 {
              font-weight: 800 !important; margin: 20px 0 5px !important;
            }
            h2 {
              font-weight: 800 !important; margin: 20px 0 5px !important;
            }
            h3 {
              font-weight: 800 !important; margin: 20px 0 5px !important;
            }
            h4 {
              font-weight: 800 !important; margin: 20px 0 5px !important;
            }
            h1 {
              font-size: 22px !important;
            }
            h2 {
              font-size: 18px !important;
            }
            h3 {
              font-size: 16px !important;
            }
            .container {
              padding: 0 !important; width: 100% !important;
            }
            .content {
              padding: 0 !important;
            }
            .content-wrap {
              padding: 10px !important;
            }
            .invoice {
              width: 100% !important;
            }
          }
          </style>
          </head>

          <body itemscope itemtype="http://schema.org/EmailMessage" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6">

          <table class="body-wrap" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" valign="top"></td>
              <td class="container" width="600" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;" valign="top">
                <div class="content" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;">
                  <table class="main" width="100%" cellpadding="0" cellspacing="0" itemprop="action" itemscope itemtype="http://schema.org/ConfirmAction" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; background-color: #fff; margin: 0; border: 1px solid #e9e9e9;" bgcolor="#fff"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-wrap" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 20px;" valign="top">
                        <meta itemprop="name" content="Confirm Email" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;" /><table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">

                       

                        <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                              Hello ${user.firstname},
                            </td>
                          </tr>
                          <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">

                              <h4 class="aligncenter" style="font-family: 'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; box-sizing: border-box; font-size: 24px; color: #000; line-height: 1.2em; font-weight: 700; text-align: center; margin: 40px 0 0;" align="center">NGN ${transaction.amount.toLocaleString()}.00
                              <h4/>
                            </td>

                          <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                             Congratulations, your withdrawal request was approved and payment has been made.
                            </td>
                          </tr>
                          <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                          You can do well to join our G-Affiliate program through your dashboard, Kindly click this link to join our shareholders forum on telegram <a href="https://t.me/+GkWkqzIziVIzZjZk">https://t.me/+GkWkqzIziVIzZjZk</a>.
                            </td>
                          </tr>

                          </tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                          &mdash; GG Concepts Ltd.

                            </td>
                          </tr></table></td>
                    </tr></table><div class="footer" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; clear: both; color: #999; margin: 0; padding: 20px;">
                    <table width="100%" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="aligncenter content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; vertical-align: top; color: #999; text-align: center; margin: 0; padding: 0 0 20px;" align="center" valign="top">Questions? Email <a href="mailto:info@ggconcept.org<" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; color: #999; text-decoration: underline; margin: 0;">info@ggconcept.org</a></td>
                      </tr></table></div></div>
              </td>
              <td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" valign="top"></td>
            </tr></table></body>
          </html>`,
            };

            client.messages.create(DOMAIN, messageData).then(async (sent) => {
              transaction.status = status;
              await transaction.save();
              return res.status(200).json({
                message: `Purchase successful! An email has been sent to ${user.email}`,
              });
            });
          });
        });
      } else {
        transaction.status = status;
        await transaction.save();
        return res.status(201).json({ message: "Transaction status updated" });
      }
    }
  });
};

exports.deleteController = async (req, res) => {
  try {
    await Transcation.findByIdAndDelete(req.params.id);

    res.status(200).json("Transaction has been deleted...");
  } catch (error) {
    res.status(500).json(error);
  }
};

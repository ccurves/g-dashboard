const Affilate = require("../models/Affilate");
const User = require("../models/User");
const Wallet = require("../models/Wallet");
const DOMAIN = process.env.DOMAIN;

const formData = require("form-data");
const Mailgun = require("mailgun.js");
const { generateRandomString } = require("../helpers/softFunctions");

const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: "api", key: process.env.API_KEY });

exports.verifyUserController = async (req, res) => {
  const status = req.body.status;
  const reason = req.body.reason;

  User.findOne({ _id: req.body.userId }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "Something went wrong",
      });
    } else {
      if (status === "verified") {
        user.verified = true;
        user.kycStatus = status;
        user.rejectCause = "";
        // await user.save()
      } else {
        user.kycStatus = status;
        user.rejectCause = reason;
      }
      user.save((err, success) => {
        if (err) {
          return res.status(400).json({
            error: "An error occured,",
          });
        }

        res.json({
          message: `${user.firstname} status updated`,
        });
      });
    }
  });
};

exports.usersController = async (req, res) => {
  User.find({ isAdmin: false }, (err, users) => {
    if (err || !users) {
      return res.status(400).json({
        error: "Something went wrong",
      });
    }
    let usersList = [];
    users.map((user) => {
      const { password, ...others } = user._doc;

      usersList.push(others);
    });
    res.json(usersList);
  });
};

exports.affilateController = async (req, res) => {
  try {
    Affilate.find()
      .populate("userId")
      .then((affilates) => {
        return res.status(200).json(affilates);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.verifyAffilateController = async (req, res) => {
  const status = req.body.status;
  const reason = req.body.reason;

  try {
    User.findOne({ _id: req.body.userId }, (err, user) => {
      if (err || !user) {
        return res.status(400).json({
          error: "Something went wrong",
        });
      } else {
        Affilate.findOne({ userId: user._id }, (err, affilate) => {
          Wallet.findOne({ userId: user._id }, (err, wallet) => {
            const link = generateRandomString(6);

            if (status === "verified") {
              user.refStatus = status;
              affilate.status = status;
              affilate.refLink = link;
              user.rejectCause = "";
              wallet.refBouns = 0;
            } else {
              user.refStatus = status;
              affilate.status = status;
              user.rejectCause = reason;
            }
            affilate.save();
            wallet.save();
            user.save((err, success) => {
              if (err) {
                return res.status(400).json({
                  error: "An error occured,",
                });
              }

              res.json({
                message: `${user.firstname} status updated`,
              });
            });
          });
        });
      }
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.sendMailController = async (req, res) => {
  User.findOne({ _id: req.body.userId }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "Something went wrong",
      });
    } else {
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
                You can do well to join our G-Affiliate program through your dashboard, Kindly click this link to join our shareholders forum on telegram <a href="h">https://t.me/+GkWkqzIziVIzZjZk</a>.
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
          message: `Welcome email has been sent to ${user.email}`,
        });
      });
    }
  });
};

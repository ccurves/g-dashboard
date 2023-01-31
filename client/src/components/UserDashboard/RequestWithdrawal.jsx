import React, { useState } from "react";
import Actions from "./WithdrawalSteps/Actions";
import Step1 from "./WithdrawalSteps/Step1";
import Step2 from "./WithdrawalSteps/Step2";
import StepNav from "./WithdrawalSteps/StepNav";
import Unverfied from "./Unverfied";
import { toast } from "react-toastify";
import axios from "axios";
import { getCookie } from "../../helpers/auth";
import { Helmet } from "react-helmet";

const RequestWithdrawal = ({ section, setSection, source }) => {
  const [balance, setBalance] = useState("");
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const userWallet = JSON.parse(localStorage.getItem("userWallet"));
  const [formData, setFormData] = useState({
    acctName: "",
    acctNum: "",
    bank: "",
  });
  const { acctName, acctNum, bank } = formData;
  var host = window.location.protocol + "//" + window.location.host;

  //Handle change from inputs
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const checkBalance = (e) => {
    let value = e.target.value;
    const re = /^[0-9\b]+$/;

    if (value <= 0 || value === "" || !re.test(value)) {
      setBalance("invalid");
    } else {
      if (source === "dividends" && userWallet.dividends < value) {
        setBalance("insuffcient");
      } else if (source === "refBouns" && userWallet.refBouns < value) {
        setBalance("insuffcient");
      } else {
        setBalance("");
        setAmount(value);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const authToken = getCookie("token");

    if (amount !== 0 && acctName && acctNum && bank) {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/transaction/withdraw`,
          {
            userId: user._id,
            amount,
            acctName,
            type: "Withdrawal",
            bank,
            acctNum,
            source,
          },
          {
            headers: {
              token: authToken,
            },
          }
        )
        .then((res) => {
          setFormData({
            ...formData,
            acctName: "",
            acctNum: "",
            bank: "",
            amount: 0,
          });
          toast.success(res.data.message);
          setSection("Withdraw", section);
          window.location.reload();
        })
        .catch((err) => {
          toast.error(err.response.data.error);
        });
    } else {
      toast.error("Please fill all fields");
    }
  };

  const verifyNum = (e) => {
    e.preventDefault();

    setLoading(true);
    if (acctNum && bank) {
      axios
        .get(
          `https://api.paystack.co/bank/resolve?account_number=${acctNum}&bank_code=${bank}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
            },
          }
        )
        .then((res) => {
          setFormData({
            ...formData,
            acctName: res.data.data.account_name,
          });
          setLoading(false);

          // toast.success("Account Number is Valid.");
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.data) {
              if (error.response.data.message) {
                setLoading(false);
                toast.error("Unable to find account");
              }
            }
          }
        });
    } else {
      toast.error("Please fill all fields");
    }
  };

  let url = `${host}/assets/js/modals/withdraw.js`;

  return (
    <div class="modal-dialog modal-dialog-centered mw-900px">
      <div class="modal-content">
        <div class="modal-header">
          <h2>Make a Withdrawal</h2>
          <div
            class="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <span class="svg-icon svg-icon-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  opacity="0.5"
                  x="6"
                  y="17.3137"
                  width="16"
                  height="2"
                  rx="1"
                  transform="rotate(-45 6 17.3137)"
                  fill="black"
                />
                <rect
                  x="7.41422"
                  y="6"
                  width="16"
                  height="2"
                  rx="1"
                  transform="rotate(45 7.41422 6)"
                  fill="black"
                />
              </svg>
            </span>
          </div>
        </div>

        {user.verified ? (
          <div class="modal-body py-lg-10 px-lg-10">
            <div
              class="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid"
              id="kt_modal_withdraw_stepper"
            >
              <StepNav />
              <div class="flex-row-fluid py-lg-5 px-lg-15">
                <form
                  class="form"
                  id="#kt_stepper_form"
                  onSubmit={handleSubmit}
                >
                  <Step1
                    userWallet={userWallet}
                    source={source}
                    checkBalance={checkBalance}
                  />
                  <Step2
                    handleChange={handleChange}
                    bank={bank}
                    acctName={acctName}
                  />
                  {balance === "" && (
                    <Actions
                      acctName={acctName}
                      verifyNum={verifyNum}
                      loading={loading}
                    />
                  )}
                  {balance === "invalid" && (
                    <span class="fw-bolder text-danger">Invalid figure</span>
                  )}
                  {balance === "insuffcient" && (
                    <span class="fw-bolder text-danger">
                      Insuffient balance
                    </span>
                  )}
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div class="modal-body py-lg-10 px-lg-10">
            <Unverfied setSection={setSection} />
          </div>
        )}
      </div>
      <Helmet>
        <script language="javascript" src={url}></script>
      </Helmet>
      ;
    </div>
  );
};

export default RequestWithdrawal;

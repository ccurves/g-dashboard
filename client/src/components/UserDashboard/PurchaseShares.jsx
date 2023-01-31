import React, { useState } from "react";
import { toast } from "react-toastify";
import Actions from "./PurchaseSteps/Actions";
import Step1 from "./PurchaseSteps/Step1";
import Step2 from "./PurchaseSteps/Step2";
import Step3 from "./PurchaseSteps/Step3";
import Step4 from "./PurchaseSteps/Step4";
import StepNav from "./PurchaseSteps/StepNav";
import axios from "axios";
import Unverfied from "./Unverfied";
import { Helmet } from "react-helmet";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const PurchaseShares = ({ section, setSection, user, userWallet }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    category: "",
    units: "",
  });

  const { fullname, units, category } = formData;

  //Handle change from inputs
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const onClose = () => {
    toast.error("Transaction cancelled");
    setFormData({
      ...formData,
      fullname: "",
      units: "",
      category: "",
    });
    window.location.replace("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (units && fullname && category) {
      let sum = Number(units) + Number(userWallet.shareUint);
      if (sum > 10) {
        toast.error("Max units a user can own is 10!");
        onClose();
      } else {
        toast.success(`Purchase Initialized`);
        handleFlutterPayment({
          callback: (response) => {
            handlePurchase(response.transaction_id);
            closePaymentModal(); // this will close the modal programmatically
          },
          onClose: () => {
            onClose();
          },
        });
      }
    } else {
      toast.error("Please fill out all the fields");
      onClose();
    }
  };

  const handlePurchase = (reference) => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/transaction/purchase/${reference}`,
        {
          userId: user._id,
          units,
          fullname,
          category,
        }
      )
      .then((res) => {
        setFormData({
          ...formData,
          fullname: "",
          units: "",
          category: "",
        });

        toast.success(res.data.message);
        setSection("Shareholdings", "Quickview");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.errors);
      });
  };

  const config = {
    public_key: process.env.REACT_APP_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: units * process.env.REACT_APP_SHARE_PRICE,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: user.email,
      name: `${user.firstname + " " + user.lastname}`,
    },
    meta: {
      fullname,
      units,
      category,
      userId: user._id,
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  var host = window.location.protocol + "//" + window.location.host;
  let url = `${host}/assets/js/modals/create-app.js`;

  return (
    <div class="modal-dialog modal-dialog-centered mw-900px">
      <div class="modal-content">
        <div class="modal-header">
          <h2>Purchase Shares</h2>
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
              id="kt_modal_create_app_stepper"
            >
              <StepNav />
              <div class="flex-row-fluid py-lg-5 px-lg-15">
                <form class="form" onSubmit={handleSubmit}>
                  <Step1 handleChange={handleChange} />
                  <Step2 handleChange={handleChange} />
                  <Step3 />
                  <Step4 formData={formData} />
                  <Actions
                    handleFlutterPayment={handleFlutterPayment}
                    handlePurchase={handlePurchase}
                    closePaymentModal={closePaymentModal}
                  />
                </form>
              </div>
            </div>
            <Helmet>
              {/* <script src="%PUBLIC_URL%/assets/js/modals/create-app.js"></script> */}
              {/* <script src={`${host}/assets/js/modals/create-app.js`}></script> */}
              <script language="javascript" src={url}></script>
            </Helmet>
          </div>
        ) : (
          <div class="modal-body py-lg-10 px-lg-10">
            <Unverfied setSection={setSection} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PurchaseShares;

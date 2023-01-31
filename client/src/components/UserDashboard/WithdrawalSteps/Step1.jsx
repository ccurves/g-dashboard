import React from "react";

const Step1 = ({ userWallet, source, checkBalance }) => {
  return (
    <div className="current" data-kt-stepper-element="content">
      <div className="w-100">
        <div className="fv-row mb-10">
          {source === "refBouns" && (
            <div className="mb-8">
              <span className="text-primary d-block mb-n1">Referral Bonus</span>
              <span className="font-weight-light fs-1 text-gray-800">
                NGN
                <span className="fw-bolder fs-1 text-gray-800">
                  {userWallet.refBouns.toLocaleString()}.00
                </span>
              </span>
            </div>
          )}
          {source === "dividends" && (
            <div className="mb-8">
              <span className="text-primary d-block mb-n1">
                Dividends Balance
              </span>
              <span className="font-weight-light fs-1 text-gray-800">
                NGN
                <span className="fw-bolder fs-1 text-gray-800">
                  {userWallet.dividends.toLocaleString()}.00
                </span>
              </span>
            </div>
          )}

          <label className="required fs-5 fw-bold mb-2">Input Amount</label>

          <input
            type="text"
            class="form-control form-control-lg form-control-solid"
            name="wamount"
            onChange={checkBalance}
            placeholder="Enter amount"
          />
        </div>
      </div>
    </div>
  );
};

export default Step1;

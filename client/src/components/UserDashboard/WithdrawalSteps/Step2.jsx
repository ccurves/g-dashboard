import React from "react";

const Step2 = ({ handleChange, bank, acctName }) => {
  return (
    <div data-kt-stepper-element="content">
      <div class="w-100">
        {acctName !== "" && (
          <div class="d-flex flex-column mb-7 fv-row">
            <label class="d-flex align-items-center fs-6 fw-bold form-label mb-2">
              <span class="required">Account Name</span>
              <i
                class="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Account name must match name on submitted document"
              ></i>
            </label>

            <input
              type="text"
              class="form-control form-control-solid"
              placeholder="Enter account name"
              // onChange={handleChange("acctName")}
              value={acctName}
              name="acct_name"
            />
            <div class="form-text">
              Account name must match name on submitted document, else request
              might be{" "}
              <a href="/" class="fw-bold">
                rejected.
              </a>{" "}
            </div>
          </div>
        )}

        <div class="d-flex flex-column mb-7 fv-row">
          <label class="required fs-6 fw-bold form-label mb-2">
            Account Number
          </label>

          <div class="position-relative">
            <input
              type="text"
              class="form-control form-control-solid"
              placeholder="Enter account number"
              onChange={handleChange("acctNum")}
              name="acct_number"
            />
          </div>
        </div>

        <div class="d-flex flex-column mb-7 fv-row">
          <label class="required fs-6 fw-bold form-label mb-2">Bank</label>

          <div class="position-relative">
            <select
              name="bank"
              class="form-select form-select-solid"
              data-placeholder="Bank"
              onChange={handleChange("bank")}
            >
              <option value=""></option>
              <option value="044">Access Bank</option>
              <option value="063">Access Bank (Diamond)</option>
              <option value="035A">ALAT by WEMA</option>
              <option value="401">ASO Savings and Loans</option>
              <option value="023">Citibank Nigeria</option>
              <option value="050">Ecobank Nigeria</option>
              <option value="562">Ekondo Microfinance Bank</option>
              <option value="070">Fidelity Bank</option>
              <option value="011">First Bank of Nigeria</option>
              <option value="214">First City Monument Bank</option>
              <option value="058">Guaranty Trust Bank</option>
              <option value="030">Heritage Bank</option>
              <option value="301">Jaiz Bank</option>
              <option value="082">Keystone Bank</option>
              <option value="50211">Kuda Bank</option>
              <option value="526">Parallex Bank</option>
              <option value="076">Polaris Bank</option>
              <option value="101">Providus Bank</option>
              <option value="221">Stanbic IBTC Bank</option>
              <option value="068">Standard Chartered Bank</option>
              <option value="232">Sterling Bank</option>
              <option value="100">Suntrust Bank</option>
              <option value="032">Union Bank of Nigeria</option>
              <option value="033">United Bank For Africa</option>
              <option value="215">Unity Bank</option>
              <option value="035">Wema Bank</option>
              <option value="057">Zenith Bank</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;

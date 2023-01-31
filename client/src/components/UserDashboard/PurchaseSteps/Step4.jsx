import React from "react";

const Step4 = ({ formData }) => {
  return (
    <div data-kt-stepper-element="content">
      <div class="w-100">
        <div class="d-flex flex-column mb-7 fv-row">
          <label className="d-flex align-items-center fs-5 fw-bold mb-2">
            <span className="required">Full Name</span>
            <i
              className="fas fa-exclamation-circle ms-2 fs-7"
              data-bs-toggle="tooltip"
              title="Ensure your name is correct and tallies with uploaded document"
            ></i>
          </label>

          <input
            type="text"
            class="form-control form-control-solid"
            placeholder=""
            name="name"
            value={formData.fullname}
            readOnly
          />
        </div>

        <div class="d-flex flex-column mb-7 fv-row">
          <label class="required fs-6 fw-bold form-label mb-2">
            Number of Share Units
          </label>

          <div class="position-relative">
            <input
              type="text"
              class="form-control form-control-solid"
              placeholder=""
              name="share_uint"
              value={formData.units}
              readOnly
            />
          </div>
        </div>

        <div class="d-flex flex-column mb-7 fv-row">
          <label class="required fs-6 fw-bold form-label mb-2">Category</label>

          <div class="position-relative">
            <input
              type="text"
              class="form-control form-control-solid"
              placeholder=""
              name="category"
              value={formData.category}
              readOnly
            />
          </div>
        </div>

        <div class="d-flex flex-column mb-7 fv-row">
          <label class="required fs-6 fw-bold form-label mb-2">
            Total Amount (NGN
            {process.env.REACT_APP_SHARE_PRICE.toLocaleString()} per share unit)
          </label>

          <div class="position-relative">
            <input
              type="text"
              class="form-control form-control-solid"
              placeholder=""
              name="total_amount"
              value={(
                formData.units * process.env.REACT_APP_SHARE_PRICE
              ).toLocaleString()}
              readOnly
            />

            <div class="position-absolute translate-middle-y top-50 end-0 me-5">
              <img
                src="assets/media/svg/card-logos/visa.svg"
                alt=""
                class="h-25px"
              />
              <img
                src="assets/media/svg/card-logos/mastercard.svg"
                alt=""
                class="h-25px"
              />
              <img
                src="assets/media/svg/card-logos/american-express.svg"
                alt=""
                class="h-25px"
              />
            </div>
          </div>
        </div>

        <div class="d-flex flex-stack">
          <div class="me-5">
            <div class="fs-7 fw-bold text-muted">
              Confirm that the amount and info provided are all in order before
              proceeding to make payment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;

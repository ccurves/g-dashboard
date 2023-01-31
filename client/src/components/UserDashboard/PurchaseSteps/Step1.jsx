import React from "react";
import PeopleIcon from "@mui/icons-material/People";

const Step1 = ({ handleChange }) => {
  return (
    <div className="current" data-kt-stepper-element="content">
      <div className="w-100">
        <div className="fv-row mb-10">
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
            className="form-control form-control-lg form-control-solid"
            name="name"
            onChange={handleChange("fullname")}
          />
        </div>

        <div className="fv-row">
          <label className="d-flex align-items-center fs-5 fw-bold mb-4">
            <span className="required">Category</span>
            <i
              className="fas fa-exclamation-circle ms-2 fs-7"
              data-bs-toggle="tooltip"
              title="Select your investment category"
            ></i>
          </label>

          <div className="fv-row">
            <label className="d-flex flex-stack mb-5 cursor-pointer">
              <span className="d-flex align-items-center me-2">
                <span className="symbol symbol-50px me-6">
                  <span className="symbol-label bg-light-primary">
                    <span className="svg-icon svg-icon-1 svg-icon-primary">
                      <PeopleIcon />
                    </span>
                  </span>
                </span>

                <span className="d-flex flex-column">
                  <span className="fw-bolder fs-6">G-1000</span>
                  <span className="fs-7 text-muted">
                    The first category in the GInvesment Segment
                  </span>
                </span>
              </span>

              <span className="form-check form-check-custom form-check-solid">
                <input
                  className="form-check-input"
                  type="radio"
                  name="category"
                  value="G-1000"
                  onChange={handleChange("category")}
                />
              </span>
            </label>

            <label className="d-flex flex-stack mb-5 cursor-pointer">
              <span className="d-flex align-items-center me-2">
                <span className="symbol symbol-50px me-6">
                  <span className="symbol-label bg-light-danger">
                    <span className="svg-icon svg-icon-1 svg-icon-danger">
                      <PeopleIcon />
                    </span>
                  </span>
                </span>

                <span className="d-flex flex-column">
                  <span className="fw-bolder fs-6">G-100</span>
                  <span className="fs-7 text-muted">Coming soon...</span>
                </span>
              </span>

              <span className="form-check form-check-custom form-check-solid">
                <input
                  className="form-check-input"
                  type="radio"
                  name="category"
                  value="2"
                  disabled
                />
              </span>
            </label>

            <label className="d-flex flex-stack cursor-pointer">
              <span className="d-flex align-items-center me-2">
                <span className="symbol symbol-50px me-6">
                  <span className="symbol-label bg-light-success">
                    <span className="svg-icon svg-icon-1 svg-icon-success">
                      <PeopleIcon />
                    </span>
                  </span>
                </span>

                <span className="d-flex flex-column">
                  <span className="fw-bolder fs-6">G-50</span>
                  <span className="fs-7 text-muted">Coming soon...</span>
                </span>
              </span>

              <span className="form-check form-check-custom form-check-solid">
                <input
                  className="form-check-input"
                  type="radio"
                  name="category"
                  value="3"
                  disabled
                />
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;

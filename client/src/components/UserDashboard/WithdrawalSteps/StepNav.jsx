import React from "react";

const StepNav = () => {
  return (
    <div className="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px">
      <div className="stepper-nav ps-lg-10">
        <div className="stepper-item current" data-kt-stepper-element="nav">
          <div className="stepper-line w-40px"></div>

          <div className="stepper-icon w-40px h-40px">
            <i className="stepper-check fas fa-check"></i>
            <span className="stepper-number">1</span>
          </div>

          <div className="stepper-label">
            <h3 className="stepper-title">Select Amount</h3>
            <div className="stepper-desc">
              Input amount you want to withdraw
            </div>
          </div>
        </div>

        <div className="stepper-item" data-kt-stepper-element="nav">
          <div className="stepper-line w-40px"></div>

          <div className="stepper-icon w-40px h-40px">
            <i className="stepper-check fas fa-check"></i>
            <span className="stepper-number">2</span>
          </div>

          <div className="stepper-label">
            <h3 className="stepper-title">Bank Details</h3>
            <div className="stepper-desc">
              Define what bank funds should be sent to
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepNav;

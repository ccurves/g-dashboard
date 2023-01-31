import React from "react";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";

const ManageShares = ({ setSection, section, previous }) => {
  return (
    <div className="col-xl-12">
      <div className="card card-stretch mb-5 mb-xxl-8">
        <div class="card-header border-0 pt-5">
          <h3 class="card-title align-items-start flex-column">
            <span class="card-label fw-bolder text-dark fs-3">
              Manage Shares
            </span>
          </h3>
          <div className="card-toolbar">
            <button
              type="button"
              className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
            >
              <span
                className="svg-icon svg-icon-1"
                onClick={(e) => {
                  setSection(previous, section);
                }}
              >
                <ArrowBackTwoToneIcon />
              </span>
            </button>
          </div>
        </div>
        <div className="card-body"></div>
      </div>
    </div>
  );
};

export default ManageShares;

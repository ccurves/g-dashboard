import React from "react";
import CampaignTwoToneIcon from "@mui/icons-material/CampaignTwoTone";

const Notifications = () => {
  return (
    <div className="ms-1 ms-lg-6">
      <button
        className="btn btn-icon btn-sm btn-light-danger fw-bolder pulse pulse-danger"
        data-kt-menu-trigger="click"
        data-kt-menu-placement="bottom-end"
        id="kt_activities_toggle"
      >
        <span className="position-absolute fs-6">1</span>
        <span className="pulse-ring"></span>
      </button>

      <div
        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded fw-bold menu-title-gray-800 menu-hover-bg menu-state-title-primary w-250px w-md-300px"
        data-kt-menu="true"
      >
        <div className="menu-item mx-3">
          <div className="menu-content fs-6 text-dark fw-bolder py-6">
            1 New Notifications
          </div>
        </div>
        <div className="separator mb-3"></div>
        <div className="menu-item mx-3">
          <a href="/" className="menu-link px-4 py-3">
            <div className="symbol symbol-35px">
              <span className="symbol-label bg-light-info">
                <span className="svg-icon svg-icon-3 svg-icon-info">
                  <CampaignTwoToneIcon />
                </span>
              </span>
            </div>
            <div className="ps-4">
              <span className="menu-title fw-bold mb-1">
                Welome G-Investor!
              </span>
              <span className="text-muted fw-bold d-block fs-7">
                3 Hours ago
              </span>
            </div>
          </a>
        </div>

        <div className="separator mt-3"></div>
        <div className="menu-item mx-2">
          <div className="menu-content py-5">
            <a href="/" className="btn btn-primary fw-bolder me-2 px-5">
              Mark As Read
            </a>
            <a href="/" className="btn btn-light fw-bolder px-5">
              Clear All
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;

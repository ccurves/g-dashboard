import React from "react";
import CorporateFareTwoTone from "@mui/icons-material/CorporateFareTwoTone";
import ManageAccountsTwoTone from "@mui/icons-material/ManageAccountsTwoTone";
import BadgeTwoTone from "@mui/icons-material/BadgeTwoTone";
import VerifiedTwoTone from "@mui/icons-material/VerifiedTwoTone";
import RequestPageTwoTone from "@mui/icons-material/RequestPageTwoTone";
import CampaignTwoTone from "@mui/icons-material/CampaignTwoTone";

const AdminPanel = ({ setSection, section, user }) => {
  return (
    <div className="col-xl-12">
      <div className="card card-stretch mb-5 mb-xxl-8">
        <div className="card-body">
          <div className="pt-9">
            <div className="row">
              <div className="col me-n2 mb-5">
                <button
                  type="button"
                  onClick={(e) => {
                    setSection("WithdrawalReq", section);
                  }}
                  className="btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active border-primary px-6 py-7 text-start w-100 min-w-150px"
                >
                  <RequestPageTwoTone
                    sx={{ width: 33, height: 33, color: "#7e8299" }}
                  />

                  <span className="text-gray-800 fw-bolder fs-6 d-block pt-6">
                    Withdrawal Requests
                  </span>
                </button>
              </div>
              <div className="col mb-5">
                <button
                  type="button"
                  className="btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active px-6 py-7 text-start w-100 min-w-150px"
                  onClick={(e) => {
                    setSection("KycReq", section);
                  }}
                >
                  <VerifiedTwoTone
                    sx={{ width: 33, height: 33, color: "#7e8299" }}
                  />

                  <span className="text-gray-800 fw-bolder fs-6 d-block pt-6">
                    KYC Requests
                  </span>
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col me-n2 mb-5">
                <button
                  type="button"
                  onClick={(e) => {
                    setSection("ManageUsers", section);
                  }}
                  className="btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active px-6 py-7 text-start w-100 min-w-150px"
                >
                  <ManageAccountsTwoTone
                    sx={{ width: 33, height: 33, color: "#7e8299" }}
                  />

                  <span className="text-gray-800 fw-bolder fs-6 d-block pt-6">
                    Manage Users
                  </span>
                </button>
              </div>
              <div className="col mb-5">
                <button
                  type="button"
                  onClick={(e) => {
                    setSection("ManageShares", section);
                  }}
                  className="btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active px-6 py-7 text-start w-100 min-w-150px"
                >
                  <CorporateFareTwoTone
                    sx={{ width: 33, height: 33, color: "#7e8299" }}
                  />

                  <span className="text-gray-800 fw-bolder fs-6 d-block pt-6">
                    Manage Shares
                  </span>
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col me-n2 mb-5">
                <button
                  type="button"
                  onClick={(e) => {
                    setSection("ManageInfo", section);
                  }}
                  className="btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active px-6 py-7 text-start w-100 min-w-150px"
                >
                  <CampaignTwoTone
                    sx={{ width: 33, height: 33, color: "#7e8299" }}
                  />

                  <span className="text-gray-800 fw-bolder fs-6 d-block pt-6">
                    Manage Announcements
                  </span>
                </button>
              </div>
              <div className="col mb-5">
                <button
                  type="button"
                  onClick={(e) => {
                    setSection("ManageAffilates", section);
                  }}
                  className="btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active px-6 py-7 text-start w-100 min-w-150px"
                >
                  <BadgeTwoTone
                    sx={{ width: 33, height: 33, color: "#7e8299" }}
                  />
                  <span className="text-gray-800 fw-bolder fs-6 d-block pt-6">
                    Manage Affilates
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

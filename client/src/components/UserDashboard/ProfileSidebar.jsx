import React from "react";
import avatarBoy from "../../media/svg/avatars/009-boy-4.svg";
import avatarGirl from "../../media/svg/avatars/014-girl-7.svg";
import bg from "../../media/svg/illustrations/bg-2.svg";
import VerifiedIcon from "@mui/icons-material/Verified";

const ProfileSidebar = ({ user, setSection, section }) => {
  return (
    <div className="col-xl-4 mb-8">
      <div className="card card-stretch mb-5 mb-xxl-8">
        <div className="card-body pb-0">
          <div className="pt-0">
            <div
              className="d-flex flex-center position-relative bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-center"
              style={{
                backgroundImage: `url( ${bg} )`,
              }}
            >
              <div className="position-absolute mb-7">
                <div className="symbol symbol-circle symbol-100px overflow-hidden d-flex flex-center z-index-1">
                  <span className="symbol-label .bg-info align-items-end">
                    {user.gender === "male" ? (
                      <img alt="Logo" src={avatarBoy} className="mh-75px" />
                    ) : (
                      <img alt="Logo" src={avatarGirl} className="mh-75px" />
                    )}
                  </span>
                </div>
              </div>
              <div id="kt_user_chart" style={{ height: "200px" }}></div>
            </div>

            <div className="pt-4">
              <div className="text-center pb-12">
                <h3 className="fw-bolder text-dark fs-2 pb-4">
                  {user.gender === "male" ? "Mr. " : "Ms. "}
                  {user.firstname}
                </h3>
                {user.verified ? (
                  <div>
                    <span className="fw-bolder fs-6 text-primary px-4 py-2 rounded bg-primary bg-opacity-10">
                      <VerifiedIcon sx={{ width: 17 }} /> Verified
                    </span>
                    <br />
                  </div>
                ) : (
                  <div>
                    <span className="fw-bolder fs-6 text-muted px-4 py-2 rounded bg-primary bg-opacity-10">
                      <VerifiedIcon sx={{ width: 17 }} /> Unverified
                    </span>
                    <br />
                    {user.kycStatus === "unverified" && (
                      <button
                        type="button"
                        class="btn btn-primary fw-bolder my-9 "
                        onClick={(e) => {
                          setSection("KYC", section);
                        }}
                      >
                        Complete KYC
                      </button>
                    )}
                    {user.kycStatus === "pending" && (
                      <button
                        type="button"
                        class="btn bg-light-primary hoverable fw-bolder my-9 "
                        onClick={(e) => {
                          setSection("KYC", section);
                        }}
                      >
                        Under Review...
                      </button>
                    )}
                    {user.kycStatus === "failed" && (
                      <button
                        type="button"
                        class="btn bg-light-danger hoverable text-muted fw-bolder my-9 "
                        onClick={(e) => {
                          setSection("KYC", section);
                        }}
                      >
                        Verification Failed
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;

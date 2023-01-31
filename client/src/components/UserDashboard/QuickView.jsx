import React from "react";
import CorporateFareTwoTone from "@mui/icons-material/CorporateFareTwoTone";
import ForumTwoTone from "@mui/icons-material/ForumTwoTone";
import SummarizeTwoTone from "@mui/icons-material/SummarizeTwoTone";
import ManageAccountsTwoTone from "@mui/icons-material/ManageAccountsTwoTone";
import BadgeTwoTone from "@mui/icons-material/BadgeTwoTone";
import AssessmentTwoTone from "@mui/icons-material/AssessmentTwoTone";
import Modal from "./Modal";
import svg1 from "../../media/illustrations/ouch/business-3d-man-lying-with-laptop.png";
import doc from "../../media/doc/T&C.pdf";

const QuickView = ({ setSection, section, user, userWallet }) => {
  return (
    <div className="col-xl-8">
      <div className="card card-stretch mb-5 mb-xxl-8">
        <div className="card-body">
          <div className="d-flex bg-light-primary card-rounded flex-grow-1">
            <div className="py-10 ps-7">
              <div className="">
                <span className="text-primary d-block mb-n1">Your Balance</span>
                <span className="font-weight-light fs-1 text-gray-800">
                  NGN
                  <span className="fw-bolder fs-1 text-gray-800">
                    {userWallet.dividends.toLocaleString()}.00
                  </span>
                </span>
              </div>

              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  setSection("Withdraw", section);
                }}
                className="btn btn-primary btn-sm fw-bolder fs-6 ps-4 mt-6"
              >
                Withdraw
                <span className="svg-icon svg-icon-3 me-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M13.4 10L5.3 18.1C4.9 18.5 4.9 19.1 5.3 19.5C5.7 19.9 6.29999 19.9 6.69999 19.5L14.8 11.4L13.4 10Z"
                      fill="black"
                    />
                    <path
                      opacity="0.3"
                      d="M19.8 16.3L8.5 5H18.8C19.4 5 19.8 5.4 19.8 6V16.3Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </a>
            </div>

            <div
              className="position-relative bgi-no-repeat bgi-size-contain bgi-position-y-bottom bgi-position-x-end mt-6 flex-grow-1"
              style={{
                backgroundImage: `url( ${svg1} )`,
              }}
            ></div>
          </div>

          <div className="pt-9">
            <div className="row">
              <div className="col me-n2 mb-5">
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_create_app"
                  className="btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active border-primary px-6 py-7 text-start w-100 min-w-150px"
                >
                  <CorporateFareTwoTone
                    sx={{ width: 33, height: 33, color: "#7e8299" }}
                  />

                  <span className="text-gray-800 fw-bolder fs-6 d-block pt-6">
                    Purchase Shares
                  </span>
                </button>
              </div>
              <div className="col mb-5">
                <button
                  type="button"
                  className="btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active px-6 py-7 text-start w-100 min-w-150px"
                  onClick={(e) => {
                    setSection("Account", section);
                  }}
                >
                  <ManageAccountsTwoTone
                    sx={{ width: 33, height: 33, color: "#7e8299" }}
                  />

                  <span className="text-gray-800 fw-bolder fs-6 d-block pt-6">
                    My Account
                  </span>
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col me-n2 mb-5">
                <button
                  type="button"
                  className="btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active px-6 py-7 text-start w-100 min-w-150px"
                  onClick={(e) => {
                    setSection("Affilate", section);
                  }}
                >
                  <BadgeTwoTone
                    sx={{ width: 33, height: 33, color: "#7e8299" }}
                  />

                  <span className="text-gray-800 fw-bolder fs-6 d-block pt-6">
                    GG Affilate
                  </span>
                </button>
              </div>
              <div className="col mb-5">
                <a
                  href={doc}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active px-6 py-7 text-start w-100 min-w-150px"
                >
                  <SummarizeTwoTone
                    sx={{ width: 33, height: 33, color: "#7e8299" }}
                  />

                  <span className="text-gray-800 fw-bolder fs-6 d-block pt-6">
                    Terms & Policy
                  </span>
                </a>
              </div>
            </div>

            {userWallet.shareUint === 0 ? (
              <div className="row">
                <div className="col me-n2 mb-5">
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#noaccess_modal"
                    className="btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active px-6 py-7 text-start w-100 min-w-150px"
                  >
                    <ForumTwoTone
                      sx={{ width: 33, height: 33, color: "#7e8299" }}
                    />

                    <span className="text-gray-800 fw-bolder fs-6 d-block pt-6">
                      Shareholder's Forum
                    </span>
                  </button>
                </div>
                <div className="col mb-5">
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#noaccess_modal"
                    className="btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active px-6 py-7 text-start w-100 min-w-150px"
                  >
                    <AssessmentTwoTone
                      sx={{ width: 33, height: 33, color: "#7e8299" }}
                    />
                    <span className="text-gray-800 fw-bolder fs-6 d-block pt-6">
                      Reports & Projections
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col me-n2 mb-5">
                  <a
                    // type="button"
                    href="/"
                    onClick={(e) => {
                      setSection("Chatroom", section);
                    }}
                    className="btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active px-6 py-7 text-start w-100 min-w-150px"
                  >
                    <ForumTwoTone
                      sx={{ width: 33, height: 33, color: "#7e8299" }}
                    />

                    <span className="text-gray-800 fw-bolder fs-6 d-block pt-6">
                      Shareholder's Forum
                    </span>
                  </a>
                </div>
                <div className="col mb-5">
                  <button
                    type="button"
                    onClick={(e) => {
                      setSection("Reports", section);
                    }}
                    className="btn btn-outline btn-bg-light btn-color-gray-600 btn-active-light-primary border-dashed border-active px-6 py-7 text-start w-100 min-w-150px"
                  >
                    <AssessmentTwoTone
                      sx={{ width: 33, height: 33, color: "#7e8299" }}
                    />
                    <span className="text-gray-800 fw-bolder fs-6 d-block pt-6">
                      Reports & Projections
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Modal
        setSection={setSection}
        section={section}
        content="Purchase"
        user={user}
        userWallet={userWallet}
      />
    </div>
  );
};

export default QuickView;

import React from "react";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import WorkTwoTone from "@mui/icons-material/WorkTwoTone";
import TrendingUpTwoTone from "@mui/icons-material/TrendingUpTwoTone";

const Progress = ({ setSection, section, user, previous }) => {
  return (
    <div className="col-xl-8">
      <div className="card card-stretch mb-5 mb-xxl-8">
        <div className="card-header align-items-center border-0 mt-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="fw-bolder text-dark fs-3">
              Reports & Projections
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

        <div className="card-body pt-2 pb-0 mt-n3">
          <div class="row g-0">
            <div class="col-md-6 mb-10">
              <div class="bg-light bg-opacity-50 rounded-3 p-10 mx-md-5 h-md-100">
                <div class="d-flex flex-center w-60px h-60px rounded-3 bg-light-info bg-opacity-90 mb-10">
                  <span class="svg-icon svg-icon-info svg-icon-3x">
                    <TrendingUpTwoTone />
                  </span>
                </div>
                <h1 class="mb-5">Quaterly Reports </h1>
                <div class="fs-4 text-gray-600 py-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                  natus mollitia itaque, laborum illum aperiam.
                </div>
                <a href="/" class="btn btn-lg btn-flex btn-link btn-color-info">
                  View Projections
                  <span class="svg-icon ms-2 svg-icon-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect
                        opacity="0.5"
                        x="18"
                        y="13"
                        width="13"
                        height="2"
                        rx="1"
                        transform="rotate(-180 18 13)"
                        fill="black"
                      />
                      <path
                        d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div class="col-md-6 mb-10">
              <div class="bg-light bg-opacity-50 rounded-3 p-10 mx-md-5 h-md-100">
                <div class="d-flex flex-center w-60px h-60px rounded-3 bg-light-info bg-opacity-90 mb-10">
                  <span class="svg-icon svg-icon-info svg-icon-3x">
                    <WorkTwoTone />
                  </span>
                </div>
                <h1 class="mb-5">Ongoing Projects</h1>
                <div class="fs-4 text-gray-600 py-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                  natus mollitia itaque, laborum illum aperiam.
                </div>
                <a href="/" class="btn btn-lg btn-flex btn-link btn-color-info">
                  View Projects
                  <span class="svg-icon ms-2 svg-icon-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect
                        opacity="0.5"
                        x="18"
                        y="13"
                        width="13"
                        height="2"
                        rx="1"
                        transform="rotate(-180 18 13)"
                        fill="black"
                      />
                      <path
                        d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;

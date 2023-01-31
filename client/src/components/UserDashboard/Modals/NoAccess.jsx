import React from "react";
import svg1 from "../../../media/illustrations/ouch/business-3d-girl-with-coffee.png";

const NoAccess = ({ setSection, section, user }) => {
  return (
    <div class="modal  fade" id="noaccess_modal" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered mw-900px">
        <div class="modal-content">
          <div class="modal-header">
            <h2>Access Restricted</h2>
            <div
              class="btn btn-sm btn-icon btn-active-color-primary"
              data-bs-dismiss="modal"
            >
              <span class="svg-icon svg-icon-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    opacity="0.5"
                    x="6"
                    y="17.3137"
                    width="16"
                    height="2"
                    rx="1"
                    transform="rotate(-45 6 17.3137)"
                    fill="black"
                  />
                  <rect
                    x="7.41422"
                    y="6"
                    width="16"
                    height="2"
                    rx="1"
                    transform="rotate(45 7.41422 6)"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div class="modal-body py-lg-10 px-lg-10">
            {" "}
            <div class="w-100 text-center">
              <div class="text-center px-4 py-6">
                <img src={svg1} alt="" class=" mh-200px" />
              </div>
              <h1 class="fw-bolder text-dark mb-3">Access Restricted!</h1>

              <div class="text-dark  fs-3 my-9">
                Apologies {user.firstname}, but this feature is <br /> only
                available to shareholders.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoAccess;

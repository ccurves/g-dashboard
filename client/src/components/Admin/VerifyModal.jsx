import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { getCookie } from "../../helpers/auth";

const VerifyModal = ({ kycReqs }) => {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState("");
  const authToken = getCookie("token");

  const handleVerification = (status) => {
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/admin/verify`,
        {
          status,
          userId: kycReqs._id,
          reason: formData,
        },
        {
          headers: {
            token: authToken,
          },
        }
      )
      .then((res) => {
        toast.info(res.data.message);

        window.location.reload();
      })
      .catch((err) => {
        if (err.response === undefined) {
          toast.error("Something went wrong, please try again later");
        } else {
          toast.error(err.response.data.errors);
        }
      });
  };

  return (
    <div
      class="modal fade"
      id={`kt_modal_${kycReqs._id}`}
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered mw-900px">
        <div class="modal-content">
          <div class="modal-header">
            <h2>Verify User</h2>

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
            <div class="w-100 text-center">
              <div class="text-center px-4 py-6">
                <img src={kycReqs.kycDoc} alt="kycDoc" class=" mh-300px" />
              </div>

              {status === "" && (
                <di>
                  {" "}
                  <button
                    type="button"
                    class="btn btn-danger fw-bolder my-9 mx-3"
                    onClick={(e) => {
                      setStatus("failed");
                    }}
                  >
                    Reject Doc
                  </button>{" "}
                  <button
                    type="button"
                    class="btn btn-primary fw-bolder my-9 "
                    onClick={(e) => {
                      handleVerification("verified");
                    }}
                    data-bs-dismiss="modal"
                  >
                    Verify {kycReqs.firstname}
                  </button>
                </di>
              )}
              {status === "failed" && (
                <di>
                  <div class="mb-8 mt-6">
                    <label class="fs-6 form-label fw-bolder text-dark">
                      Reason for Document Rejection
                    </label>
                    {/* <input
                      type="text"
                      class="form-control form-control-lg form-control-solid"
                      name="lastName"
                      placeholder="Surname"
                    /> */}
                    <textarea
                      class="form-control form-control-lg form-control-solid"
                      name=""
                      id=""
                      rows="5"
                      cols="3"
                      onChange={(e) => setFormData(e.target.value)}
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    class="btn btn-primary fw-bolder my-9 "
                    onClick={(e) => {
                      handleVerification("failed");
                    }}
                    data-bs-dismiss="modal"
                  >
                    Update {kycReqs.firstname}
                  </button>
                </di>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyModal;

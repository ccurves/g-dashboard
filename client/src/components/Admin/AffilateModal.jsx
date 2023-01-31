import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { getCookie } from "../../helpers/auth";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const AffilateModal = ({ affilate }) => {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState("");
  const authToken = getCookie("token");

  const handleVerification = (status) => {
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/admin/affilate/verify`,
        {
          status,
          userId: affilate.userId,
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
      id={`kt_modal_ref_${affilate._id}`}
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered mw-900px">
        <div class="modal-content">
          <div class="modal-header">
            <h2>Manage Affilate</h2>

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
            <div class="card-body mw-800px py-20">
              {affilate.platforms.map((platform) => (
                <td class="text-end pe-0">
                  {platform.name === "whatsapp" && (
                    <a
                      href={platform.link}
                      class="btn btn-icon btn-primary btn-sm me-3"
                    >
                      <WhatsAppIcon />
                    </a>
                  )}

                  {platform.name === "instagram" && (
                    <a
                      href={platform.link}
                      class="btn btn-icon btn-primary btn-sm me-3"
                    >
                      <InstagramIcon />
                    </a>
                  )}
                  {platform.name === "facebook" && (
                    <a
                      href={platform.link}
                      class="btn btn-icon btn-primary btn-sm me-3"
                    >
                      <FacebookIcon />
                    </a>
                  )}
                  {platform.name === "twitter" && (
                    <a
                      href={platform.link}
                      class="btn btn-icon btn-primary btn-sm me-3"
                    >
                      <TwitterIcon />
                    </a>
                  )}
                </td>
              ))}

              {status === "" && (
                <div class="row">
                  <label class="col-lg-3 col-form-label"></label>
                  <div class="col-lg-9">
                    <button
                      class="btn btn-primary fw-bolder px-6 py-3 me-3"
                      onClick={(e) => {
                        handleVerification("verified");
                      }}
                    >
                      Verify & Generate RefLink
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger fw-bolder my-9 mx-3"
                      onClick={(e) => {
                        setStatus("failed");
                      }}
                    >
                      Reject Request
                    </button>
                  </div>
                </div>
              )}
              {status === "failed" && (
                <di>
                  <div class="mb-8 mt-6">
                    <label class="fs-6 form-label fw-bolder text-dark">
                      Reason for Rejection
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
                    Update {affilate.userId.firstname}
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

export default AffilateModal;

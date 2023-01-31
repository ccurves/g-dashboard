import React, { useEffect, useState } from "react";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import blank from "../../media/avatars/blank-doc.png";
import { toast } from "react-toastify";
import axios from "axios";
import { getCookie, updateUser } from "../../helpers/auth";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import VerifiedIcon from "@mui/icons-material/Verified";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";

const KYC = ({ setSection, section, previous, user }) => {
  const [fileUrl, setFileUrl] = useState(null);
  //   const [fileUrl, setFileUrl] = useState(user.kycDoc || `${blank}`);
  const [loading, setLoading] = useState(false);
  const [stateUser, setStateUser] = useState(user);

  async function onChange(e) {
    const file = e.target.files[0];

    try {
      setLoading(true);
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "g1000-kyc-upload");
      data.append("cloud_name", "gg-concepts-ltd");
      fetch("https://api.cloudinary.com/v1_1/gg-concepts-ltd/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setFileUrl(data.url.toString());
          setLoading(false);
        });
    } catch (error) {
      //   setError(error.response.data.message);
      console.log("Error uploading file: ", error);
    }
  }

  const handleSubmit = (e) => {
    const token = getCookie("token");
    e.preventDefault();
    if (fileUrl && user) {
      axios
        .put(
          `${process.env.REACT_APP_API_URL}/user/kyc/upload`,
          {
            userId: user._id,
            file: fileUrl,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          updateUser(res, () => {
            toast.success("KYC Document uploaded Successfully");
          });
          setFileUrl(null);
          window.location.reload();
        })
        .catch((err) => {
          toast.error(err.response.data.error);
          console.log(err.response);
        });
    } else {
      toast.error("Certain fields are missing");
    }
  };

  useEffect(() => {
    const authToken = getCookie("token");
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/${user._id}`, {
        headers: {
          token: authToken,
        },
      })
      .then((res) => {
        updateUser(res);
        setStateUser(res.data);
      })
      .catch((err) => {
        console.log(err);

        toast.error(err.response.data.errors);
      });
  }, [user]);

  return (
    <div className="col-xl-8">
      <div className="card card-stretch mb-5 mb-xxl-8">
        <div className="card-body">
          <div className="card-header align-items-center border-0 mt-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="fw-bolder text-dark fs-3">
                Identity Verification
              </span>
            </h3>
            <div className="card-toolbar">
              <button
                type="button"
                onClick={(e) => {
                  setSection(previous, section);
                }}
                className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-end"
              >
                <span className="svg-icon svg-icon-1">
                  <ArrowBackTwoToneIcon />
                </span>
              </button>
            </div>
          </div>

          <div>
            <div>
              {stateUser.kycStatus === "unverified" ||
              stateUser.kycStatus === "failed" ? (
                <div
                  class="card bg-light-info hoverable min-h-125px 
                shadow-none mb-5"
                  data-kt-image-input-action="change"
                >
                  <div class="card-body d-flex flex-column flex-center text-center">
                    <div
                      class="image-input image-input-empty"
                      data-kt-image-input="true"
                      style={{
                        backgroundImage: `url( ${fileUrl || blank} )`,
                      }}
                    >
                      <div class="image-input-wrapper w-125px h-125px"></div>

                      {!fileUrl ? (
                        loading ? (
                          <label
                            class="btn btn-icon btn-circle btn-active-color-primary w-15px h-15px bg-white shadow"
                            data-kt-image-input-action="change"
                            data-bs-toggle="tooltip"
                            data-bs-dismiss="click"
                          >
                            <span className="mb-5 mt-4 px-3 py-3">...</span>
                          </label>
                        ) : (
                          <label
                            class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
                            data-kt-image-input-action="change"
                            data-bs-toggle="tooltip"
                            data-bs-dismiss="click"
                            htmlFor="file"
                            title="Upload file"
                          >
                            <CloudUploadIcon className="fs-5" />
                            <input
                              type="file"
                              style={{ display: "none" }}
                              id="file"
                              accept=".png, .jpg, .jpeg"
                              onChange={onChange}
                            />
                            <input type="hidden" name="avatar_remove" />
                          </label>
                        )
                      ) : (
                        <label
                          class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
                          data-kt-image-input-action="change"
                          data-bs-toggle="tooltip"
                          data-bs-dismiss="click"
                          title="Remove file"
                          onClick={() => {
                            setFileUrl(null);
                            window.location.reload(false);
                          }}
                        >
                          <RemoveCircleIcon className="fs-5" />
                        </label>
                      )}
                    </div>
                    {!fileUrl ? (
                      loading ? (
                        <h3 class="fs-3 mb-2 text-dark fw-bolder py-7">
                          Uploading...
                        </h3>
                      ) : (
                        <h3 class="fs-3 mb-2 text-dark fw-bolder py-7">
                          Upload File
                        </h3>
                      )
                    ) : (
                      <button
                        type="submit"
                        class="btn btn-primary fw-bolder my-9 "
                        onClick={handleSubmit}
                      >
                        Submit Document
                      </button>
                    )}

                    <p class="mb-0 text-gray-600">
                      Verification request can take up to
                      <br />
                      2-3 days to be processed and reviewed
                    </p>
                  </div>
                </div>
              ) : (
                <div></div>
              )}

              <div>
                {stateUser.kycStatus === "failed" && (
                  <div class="d-flex justify-content-around pt-18">
                    <div class="">
                      <span class="fw-bolder text-danger">
                        {stateUser.rejectCause}
                      </span>
                      <span class="bg-danger w-25px h-5px d-block rounded mt-1"></span>
                    </div>
                  </div>
                )}
              </div>

              <div className="">
                <div class="card-header align-items-center border-0 mt-5">
                  <h3 class="card-title align-items-start flex-column">
                    <span class="fw-bolder text-dark fs-3">
                      Verification Status
                    </span>
                  </h3>
                </div>

                <div class="d-flex flex-wrap flex-xxl-nowrap justify-content-center justify-content-md-start ">
                  <div class="me-sm-10 me-0">
                    <ul class="nav flex-column nav-pills nav-pills-custom">
                      <li class="nav-item mb-3">
                        {stateUser.kycStatus === "unverified" && (
                          <a
                            class="nav-link active w-225px h-70px"
                            data-bs-toggle="pill"
                            id="kt_stats_widget_2_tab_1"
                            href="#kt_stats_widget_2_tab_1_content"
                          >
                            <div class="nav-icon me-3 text-muted">
                              <VerifiedIcon />
                            </div>
                            <div class="ps-1">
                              <span class="nav-text text-gray-600 fw-bolder fs-6">
                                {stateUser.kycStatus.charAt(0).toUpperCase() +
                                  stateUser.kycStatus.slice(1)}
                              </span>
                              <span class="text-muted fw-bold d-block pt-1">
                                Upload vaild document
                              </span>
                            </div>
                          </a>
                        )}
                        {stateUser.kycStatus === "pending" && (
                          <a
                            class="nav-link active w-225px h-70px"
                            data-bs-toggle="pill"
                            id="kt_stats_widget_2_tab_1"
                            href="#kt_stats_widget_2_tab_1_content"
                          >
                            <div class="nav-icon me-3 text-warning">
                              <VerifiedIcon />
                            </div>
                            <div class="ps-1">
                              <span class="nav-text text-gray-600 fw-bolder fs-6">
                                {stateUser.kycStatus.charAt(0).toUpperCase() +
                                  stateUser.kycStatus.slice(1)}
                              </span>
                              <span class="text-muted fw-bold d-block pt-1">
                                Awaiting review
                              </span>
                            </div>
                          </a>
                        )}
                        {stateUser.kycStatus === "failed" && (
                          <a
                            class="nav-link active w-225px h-70px"
                            data-bs-toggle="pill"
                            id="kt_stats_widget_2_tab_1"
                            href="#kt_stats_widget_2_tab_1_content"
                          >
                            <div class="nav-icon me-3 text-danger">
                              {/* <VerifiedIcon /> */}
                              <HighlightOffTwoToneIcon />
                            </div>
                            <div class="ps-1">
                              <span class="nav-text text-gray-600 fw-bolder fs-6">
                                {stateUser.kycStatus.charAt(0).toUpperCase() +
                                  stateUser.kycStatus.slice(1)}
                              </span>
                              <span class="text-muted fw-bold d-block pt-1">
                                Verification failed
                              </span>
                            </div>
                          </a>
                        )}
                        {stateUser.kycStatus === "verified" && (
                          <a
                            class="nav-link active w-225px h-70px"
                            data-bs-toggle="pill"
                            id="kt_stats_widget_2_tab_1"
                            href="#kt_stats_widget_2_tab_1_content"
                          >
                            <div class="nav-icon me-3 text-primary">
                              <VerifiedIcon />
                            </div>
                            <div class="ps-1">
                              <span class="nav-text text-gray-600 fw-bolder fs-6">
                                {stateUser.kycStatus.charAt(0).toUpperCase() +
                                  stateUser.kycStatus.slice(1)}
                              </span>
                              <span class="text-muted fw-bold d-block pt-1">
                                Successfully verified
                              </span>
                            </div>
                          </a>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="">
                <div class="card-header align-items-center border-0 mt-5">
                  <h3 class="card-title align-items-start flex-column">
                    <span class="fw-bolder text-dark fs-3">
                      Accepted Documents
                    </span>
                  </h3>
                </div>

                <div class="d-flex flex-wrap flex-xxl-nowrap justify-content-center justify-content-md-start "></div>
                <div class="d-flex flex-column">
                  <li class="d-flex align-items-center py-2">
                    <span class="bullet me-5"></span> National ID
                  </li>
                  <li class="d-flex align-items-center py-2">
                    <span class="bullet me-5"></span> International Passport
                  </li>
                  <li class="d-flex align-items-center py-2">
                    <span class="bullet me-5"></span> Driver's License
                  </li>
                  <li class="d-flex align-items-center py-2">
                    <span class="bullet me-5"></span> Voter's Card
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KYC;

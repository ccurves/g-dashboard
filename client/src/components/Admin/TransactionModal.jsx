import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getCookie } from "../../helpers/auth";

const TransactionModal = ({ request }) => {
  const [user, setUser] = useState({});
  const authToken = getCookie("token");

  const handleUpdate = (status) => {
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/transaction/update/${request._id}`,
        {
          status,
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

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/transaction/delete/${request._id}`,

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

  useEffect(() => {
    const getUser = (e) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/user/${request.userId}`, {
          headers: {
            token: authToken,
          },
        })
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err);

          toast.error(err.response.data.errors);
        });
    };
    getUser();
  }, [request, authToken]);

  return (
    <div
      class="modal fade"
      id={`kt_modal_trans_${request._id}`}
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered mw-900px">
        <div class="modal-content">
          <div class="modal-header">
            <h2>Withdrawal Request</h2>

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
            <div class="row">
              <label class="col-lg-3 col-form-label"></label>
              <div class="col-lg-9">
                <button
                  type="button"
                  class="btn btn-danger fw-bolder px-6 py-3 me-3"
                  onClick={handleDelete}
                >
                  Delete This Request
                </button>
              </div>
            </div>
            <div class="separator separator-dashed my-10"></div>

            <div class="card-body mw-800px py-20">
              <div className="row g-0 g-xl-5 g-xxl-12">
                <div className="col-xl-6">
                  {" "}
                  <h3 class="card-title align-items-start flex-column text-center">
                    <span class="fw-bolder text-dark fs-3">User Info</span>
                  </h3>
                  <div class="text-center px-4 py-6">
                    <img
                      src={user.kycDoc}
                      alt="kycDoc"
                      class="img-fluid mh-300px"
                    />
                  </div>
                  {/* <div class="row mb-8">
                      <label class="col-lg-3 col-form-label">Full Name</label>
                      <div class="col-lg-9">
                        <div class="spinner spinner-sm spinner-primary spinner-right">
                          <input
                            class="form-control form-control-lg form-control-solid"
                            type="text"
                            value={user.firstname + " " + user.lastname}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row mb-8">
                      <label class="col-lg-3 col-form-label">Gender</label>
                      <div class="col-lg-9">
                        <div class="spinner spinner-sm spinner-primary spinner-right">
                          <input
                            class="form-control form-control-lg form-control-solid"
                            type="text"
                            readOnly
                            value={user.gender}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row mb-8">
                      <label class="col-lg-3 col-form-label">
                        Email Address
                      </label>
                      <div class="col-lg-9">
                        <div class="input-group input-group-lg input-group-solid">
                          <input
                            type="text"
                            class="form-control form-control-lg form-control-solid"
                            value={user.email}
                            readOnly
                            placeholder="Email"
                          />
                        </div>
                      </div>
                    </div> */}
                  <div class="separator separator-dashed my-10"></div>
                </div>
                <div className="col-xl-6">
                  {" "}
                  <h3 class="card-title align-items-start flex-column">
                    <span class="fw-bolder text-dark fs-3">
                      Request Details
                    </span>
                  </h3>
                  <div class="d-flex flex-column mb-10 mb-md-0">
                    <div class="fw-bold fs-6 mb-3">BANK TRANSFER</div>
                    <div class="d-flex justify-content-between fs-6 mb-3">
                      <span class="fw-bold me-15">Account Name:</span>
                      <span class="text-end">{request.fullname}</span>
                    </div>
                    <div class="d-flex justify-content-between fs-6 mb-3">
                      <span class="fw-bold me-15">Account Number:</span>
                      <span class="text-end">{request.acctNum}</span>
                    </div>
                    <div class="d-flex justify-content-between fs-6">
                      <span class="fw-bold me-15">Bank Code:</span>
                      <span class="text-end">{request.bank}</span>
                    </div>
                  </div>
                  <div class="separator separator-dashed my-10"></div>
                  <div class="row">
                    <div class="d-flex justify-content-between fs-6">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          handleUpdate("paid");
                        }}
                        class="btn btn-primary fw-bolder px-6 py-3 me-3"
                      >
                        Payment Made
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          handleUpdate("failed");
                        }}
                        class="btn btn-color-gray-600 btn-light-danger fw-bolder px-6 py-3"
                      >
                        Reject Request
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;

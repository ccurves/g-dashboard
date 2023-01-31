import React, { useEffect, useState } from "react";
import axios from "axios";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import { getCookie } from "../../helpers/auth";
import AffilateModal from "./AffilateModal";

const ManageAffilate = ({ setSection, section, previous }) => {
  const [users, setUsers] = useState([]);
  const [pending, setPending] = useState([]);

  useEffect(() => {
    const authToken = getCookie("token");
    const getUsers = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/admin/affilates`,
          {
            headers: {
              token: authToken,
            },
          }
        );

        let requests = res.data.filter(function (e) {
          return e.userId.refStatus === "pending";
        });
        setPending(requests);
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="col-xl-12">
      <div className="card card-stretch mb-5 mb-xxl-8">
        <div class="card-header border-0 pt-5">
          <h3 class="card-title align-items-start flex-column">
            <span class="card-label fw-bolder text-dark fs-3">Affilates</span>
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

        <div class="card-header border-0 pt-5">
          <div class="card-toolbar ">
            <ul class="nav nav-pills nav-pills-sm nav-light">
              <li class="nav-item">
                <a
                  class="nav-link btn btn-active-light btn-color-muted py-2 px-4 active fw-bolder me-2"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_2_1"
                >
                  All
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_2_2"
                >
                  Awaiting Review
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="card-body pt-3 pb-0 mt-n3">
          <div class="tab-content mt-4" id="myTabTables2">
            <div
              class="tab-pane fade show active"
              id="kt_tab_pane_2_1"
              role="tabpanel"
              aria-labelledby="kt_tab_pane_2_1"
            >
              <div class="table-responsive">
                <table class="table table-borderless align-middle">
                  <thead>
                    <tr>
                      <th class="p-0 w-50px"></th>
                      <th class="p-0 min-w-150px">User</th>
                      <th class="p-0 min-w-70px">Gender</th>
                      <th class="p-0 min-w-70px">Experience</th>
                      <th class="p-0 min-w-70px">Status</th>
                      <th class="p-0 min-w-50px"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((affilate) => (
                      <tr key={affilate._id}>
                        <td class="p-0 py-3">
                          <div class="symbol symbol-30px mt-1">
                            <span class="symbol-label bg-light-success align-items-end"></span>
                          </div>
                        </td>
                        <td class="px-0">
                          <span class="text-gray-800 fw-bolder text-hover-primary fs-6">
                            {affilate.userId.firstname +
                              " " +
                              affilate.userId.lastname}
                          </span>
                          <span class="text-muted fw-bold d-block mt-1">
                            {affilate.userId.email}
                          </span>
                        </td>

                        <td class="">
                          <span class="text-gray-800 fw-bolder d-block fs-6">
                            {" "}
                            {affilate.userId.gender}
                          </span>
                        </td>
                        <td class="">
                          <span class="fw-bolder text-success">
                            {affilate.exp}
                          </span>
                        </td>
                        <td class="">
                          <span class="fw-bolder ">
                            {affilate.userId.refStatus}
                          </span>
                        </td>
                        <td class="text-end pe-0">
                          {/* <span
                            class="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target={`#kt_modal_ref_${affilate._id}`}
                          >
                            <span class="svg-icon svg-icon-4">
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
                          </span> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="kt_tab_pane_2_2"
              role="tabpanel"
              aria-labelledby="kt_tab_pane_2_2"
            >
              <div class="table-responsive">
                <table class="table table-borderless align-middle">
                  <thead>
                    <tr>
                      <th class="p-0 w-50px"></th>
                      <th class="p-0 min-w-150px">User</th>
                      <th class="p-0 min-w-70px">Gender</th>
                      <th class="p-0 min-w-70px">Experience</th>
                      <th class="p-0 min-w-70px">Status</th>
                      <th class="p-0 min-w-50px"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {pending.map((affilate) => (
                      <tr key={affilate._id}>
                        <td class="p-0 py-3">
                          <div class="symbol symbol-30px mt-1">
                            <span class="symbol-label bg-light-success align-items-end"></span>
                          </div>
                        </td>
                        <td class="px-0">
                          <span class="text-gray-800 fw-bolder text-hover-primary fs-6">
                            {affilate.userId.firstname +
                              " " +
                              affilate.userId.lastname}
                          </span>
                          <span class="text-muted fw-bold d-block mt-1">
                            {affilate.userId.email}
                          </span>
                        </td>

                        <td class="">
                          <span class="text-gray-800 fw-bolder d-block fs-6">
                            {" "}
                            {affilate.userId.gender}
                          </span>
                        </td>
                        <td class="">
                          <span class="fw-bolder text-success">
                            {affilate.exp}
                          </span>
                        </td>
                        <td class="">
                          <span class="fw-bolder ">
                            {affilate.userId.refStatus}
                          </span>
                        </td>
                        <td class="text-end pe-0">
                          <span
                            class="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target={`#kt_modal_ref_${affilate._id}`}
                          >
                            <span class="svg-icon svg-icon-4">
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
                          </span>
                        </td>
                        <AffilateModal affilate={affilate} />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAffilate;

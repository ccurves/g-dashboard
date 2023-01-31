import React from "react";

const ProgressbarTable = () => {
  return (
    <div>
      {" "}
      <div className="tab-content mt-5" id="myTabTables1">
        <div
          className="tab-pane fade show active"
          id="kt_tab_pane_1_1"
          role="tabpanel"
          aria-labelledby="kt_tab_pane_1_1"
        >
          <div className="table-responsive">
            <table className="table table-borderless align-middle">
              <thead>
                <tr>
                  <th className="p-0 w-50px"></th>
                  <th className="p-0 min-w-200px"></th>
                  <th className="p-0 min-w-100px"></th>
                  <th className="p-0 min-w-40px"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="px-0 py-3">
                    <div className="symbol symbol-65px me-5">
                      <span className="symbol-label bg-light-primary">
                        <span className="svg-icon svg-icon-1 svg-icon-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              opacity="0.3"
                              d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                              fill="black"
                            />
                            <rect
                              x="6"
                              y="12"
                              width="7"
                              height="2"
                              rx="1"
                              fill="black"
                            />
                            <rect
                              x="6"
                              y="7"
                              width="12"
                              height="2"
                              rx="1"
                              fill="black"
                            />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </th>
                  <td className="ps-0">
                    <a
                      href="/"
                      className="text-gray-800 fw-bolder text-hover-primary fs-6"
                    >
                      Top Authors
                    </a>
                    <span className="text-muted fw-bold d-block mt-1">
                      HTML/CSS/JS, Python
                    </span>
                  </td>
                  <td>
                    <div className="d-flex flex-column w-100 me-3">
                      <div className="d-flex flex-stack mb-2">
                        <span className="text-dark me-2 fs-6 fw-bolder">
                          Progress
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="progress h-6px w-100 bg-light-primary">
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: "46%" }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span className="text-muted fs-7 fw-bold ps-3">
                          46%
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-end pe-0">
                    <a
                      href="/"
                      className="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                    >
                      <span className="svg-icon svg-icon-4">
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
                  </td>
                </tr>
                <tr>
                  <td className="px-0 py-3">
                    <div className="symbol symbol-65px">
                      <span className="symbol-label bg-light-warning">
                        <span className="svg-icon svg-icon-1 svg-icon-warning">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="9"
                              height="9"
                              rx="2"
                              fill="black"
                            />
                            <rect
                              opacity="0.3"
                              x="13"
                              y="2"
                              width="9"
                              height="9"
                              rx="2"
                              fill="black"
                            />
                            <rect
                              opacity="0.3"
                              x="13"
                              y="13"
                              width="9"
                              height="9"
                              rx="2"
                              fill="black"
                            />
                            <rect
                              opacity="0.3"
                              x="2"
                              y="13"
                              width="9"
                              height="9"
                              rx="2"
                              fill="black"
                            />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </td>
                  <td className="ps-0">
                    <a
                      href="/"
                      className="text-gray-800 fw-bolder text-hover-primary fs-6"
                    >
                      Popular Authors
                    </a>
                    <span className="text-muted fw-bold d-block mt-1">
                      HTML, VueJS, Laravel
                    </span>
                  </td>
                  <td>
                    <div className="d-flex flex-column w-100 me-3">
                      <div className="d-flex flex-stack mb-2">
                        <span className="text-dark me-2 fs-6 fw-bolder">
                          Progress
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="progress h-6px w-100 bg-light-warning">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "87%" }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span className="text-muted fs-7 fw-bold ps-3">
                          87%
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-end pe-0">
                    <a
                      href="/"
                      className="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                    >
                      <span className="svg-icon svg-icon-4">
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
                  </td>
                </tr>
                <tr>
                  <th className="px-0 py-3">
                    <div className="symbol symbol-65px">
                      <span className="symbol-label bg-light-success">
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              opacity="0.3"
                              d="M7 20.5L2 17.6V11.8L7 8.90002L12 11.8V17.6L7 20.5ZM21 20.8V18.5L19 17.3L17 18.5V20.8L19 22L21 20.8Z"
                              fill="black"
                            />
                            <path
                              d="M22 14.1V6L15 2L8 6V14.1L15 18.2L22 14.1Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </th>
                  <td className="ps-0">
                    <a
                      href="/"
                      className="text-gray-800 fw-bolder text-hover-primary fs-6"
                    >
                      New Products
                    </a>
                    <span className="text-muted fw-bold d-block mt-1">
                      HTML/CSS/JS, Python
                    </span>
                  </td>
                  <td>
                    <div className="d-flex flex-column w-100 me-3">
                      <div className="d-flex flex-stack mb-2">
                        <span className="text-dark me-2 fs-6 fw-bolder">
                          Progress
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="progress h-6px w-100 bg-light-success">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "53%" }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span className="text-muted fs-7 fw-bold ps-3">
                          53%
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-end pe-0">
                    <a
                      href="/"
                      className="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                    >
                      <span className="svg-icon svg-icon-4">
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
                  </td>
                </tr>
                <tr>
                  <th className="px-0 py-3">
                    <div className="symbol symbol-65px">
                      <span className="symbol-label bg-light-danger">
                        <span className="svg-icon svg-icon-1 svg-icon-danger">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              opacity="0.3"
                              d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                              fill="black"
                            />
                            <path
                              d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </th>
                  <td className="ps-0">
                    <a
                      href="/"
                      className="text-gray-800 fw-bolder text-hover-primary fs-6"
                    >
                      Weekly Bestsellers
                    </a>
                    <span className="text-muted fw-bold d-block mt-1">
                      HTML/CSS/JS, Python
                    </span>
                  </td>
                  <td>
                    <div className="d-flex flex-column w-100 me-3">
                      <div className="d-flex flex-stack mb-2">
                        <span className="text-dark me-2 fs-6 fw-bolder">
                          Progress
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="progress h-6px w-100 bg-light-danger">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "92%" }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span className="text-muted fs-7 fw-bold ps-3">
                          92%
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-end pe-0">
                    <a
                      href="/"
                      className="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                    >
                      <span className="svg-icon svg-icon-4">
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
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="kt_tab_pane_1_2"
          role="tabpanel"
          aria-labelledby="kt_tab_pane_1_2"
        >
          <div className="table-responsive">
            <table className="table table-borderless align-middle">
              <thead>
                <tr>
                  <th className="p-0 w-50px"></th>
                  <th className="p-0 min-w-200px"></th>
                  <th className="p-0 min-w-100px"></th>
                  <th className="p-0 min-w-40px"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="ps-0 py-3">
                    <div className="symbol symbol-65px me-3">
                      <span className="symbol-label bg-light-success">
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              opacity="0.5"
                              x="11.364"
                              y="20.364"
                              width="16"
                              height="2"
                              rx="1"
                              transform="rotate(-90 11.364 20.364)"
                              fill="black"
                            />
                            <rect
                              x="4.36396"
                              y="11.364"
                              width="16"
                              height="2"
                              rx="1"
                              fill="black"
                            />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </th>
                  <td className="ps-0">
                    <a
                      href="/"
                      className="text-gray-800 fw-bolder text-hover-primary fs-6"
                    >
                      New Users
                    </a>
                    <span className="text-muted fw-bold d-block mt-1">
                      HTML/CSS/JS, Python
                    </span>
                  </td>
                  <td>
                    <div className="d-flex flex-column w-100 me-3">
                      <div className="d-flex flex-stack mb-2">
                        <span className="text-dark me-2 fs-6 fw-bolder">
                          Progress
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="progress h-6px w-100 bg-light-success">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "53%" }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span className="text-muted fs-7 fw-bold ps-3">
                          53%
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-end pe-0">
                    <a
                      href="/"
                      className="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                    >
                      <span className="svg-icon svg-icon-4">
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
                  </td>
                </tr>
                <tr>
                  <th className="ps-0 py-3">
                    <div className="symbol symbol-65px me-3">
                      <span className="symbol-label bg-light-danger">
                        <span className="svg-icon svg-icon-1 svg-icon-danger">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              opacity="0.3"
                              d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                              fill="black"
                            />
                            <path
                              d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </th>
                  <td className="ps-0">
                    <a
                      href="/"
                      className="text-gray-800 fw-bolder text-hover-primary fs-6"
                    >
                      Weekly Bestsellers
                    </a>
                    <span className="text-muted fw-bold d-block mt-1">
                      HTML/CSS/JS, Python
                    </span>
                  </td>
                  <td>
                    <div className="d-flex flex-column w-100 me-3">
                      <div className="d-flex flex-stack mb-2">
                        <span className="text-dark me-2 fs-6 fw-bolder">
                          Progress
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="progress h-6px w-100 bg-light-danger">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "92%" }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span className="text-muted fs-7 fw-bold ps-3">
                          92%
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-end pe-0">
                    <a
                      href="/"
                      className="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                    >
                      <span className="svg-icon svg-icon-4">
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
                  </td>
                </tr>
                <tr>
                  <th className="ps-0 py-3">
                    <div className="symbol symbol-65px me-3">
                      <span className="symbol-label bg-light-primary">
                        <span className="svg-icon svg-icon-1 svg-icon-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              opacity="0.3"
                              d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                              fill="black"
                            />
                            <rect
                              x="6"
                              y="12"
                              width="7"
                              height="2"
                              rx="1"
                              fill="black"
                            />
                            <rect
                              x="6"
                              y="7"
                              width="12"
                              height="2"
                              rx="1"
                              fill="black"
                            />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </th>
                  <td className="ps-0">
                    <a
                      href="/"
                      className="text-gray-800 fw-bolder text-hover-primary fs-6"
                    >
                      Top Authors
                    </a>
                    <span className="text-muted fw-bold d-block mt-1">
                      HTML/CSS/JS, Python
                    </span>
                  </td>
                  <td>
                    <div className="d-flex flex-column w-100 me-3">
                      <div className="d-flex flex-stack mb-2">
                        <span className="text-dark me-2 fs-6 fw-bolder">
                          Progress
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="progress h-6px w-100 bg-light-primary">
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: "46%" }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span className="text-muted fs-7 fw-bold ps-3">
                          46%
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-end pe-0">
                    <a
                      href="/"
                      className="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                    >
                      <span className="svg-icon svg-icon-4">
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
                  </td>
                </tr>
                <tr>
                  <td className="ps-0 py-3">
                    <div className="symbol symbol-65px me-3">
                      <span className="symbol-label bg-light-warning">
                        <span className="svg-icon svg-icon-1 svg-icon-warning">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="9"
                              height="9"
                              rx="2"
                              fill="black"
                            />
                            <rect
                              opacity="0.3"
                              x="13"
                              y="2"
                              width="9"
                              height="9"
                              rx="2"
                              fill="black"
                            />
                            <rect
                              opacity="0.3"
                              x="13"
                              y="13"
                              width="9"
                              height="9"
                              rx="2"
                              fill="black"
                            />
                            <rect
                              opacity="0.3"
                              x="2"
                              y="13"
                              width="9"
                              height="9"
                              rx="2"
                              fill="black"
                            />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </td>
                  <td className="ps-0">
                    <a
                      href="/"
                      className="text-gray-800 fw-bolder text-hover-primary fs-6"
                    >
                      Popular Authors
                    </a>
                    <span className="text-muted fw-bold d-block mt-1">
                      HTML, VueJS, Laravel
                    </span>
                  </td>
                  <td>
                    <div className="d-flex flex-column w-100 me-3">
                      <div className="d-flex flex-stack mb-2">
                        <span className="text-dark me-2 fs-6 fw-bolder">
                          Progress
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="progress h-6px w-100 bg-light-warning">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "87%" }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span className="text-muted fs-7 fw-bold ps-3">
                          87%
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-end pe-0">
                    <a
                      href="/"
                      className="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                    >
                      <span className="svg-icon svg-icon-4">
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
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="kt_tab_pane_1_3"
          role="tabpanel"
          aria-labelledby="kt_tab_pane_1_3"
        >
          <div className="table-responsive">
            <table className="table table-borderless align-middle">
              <thead>
                <tr>
                  <th className="p-0 w-50px"></th>
                  <th className="p-0 min-w-200px"></th>
                  <th className="p-0 min-w-100px"></th>
                  <th className="p-0 min-w-40px"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="ps-0 py-3">
                    <div className="symbol symbol-65px bg-light-warning me-3">
                      <span className="symbol-label">
                        <span className="svg-icon svg-icon-1 svg-icon-warning">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="9"
                              height="9"
                              rx="2"
                              fill="black"
                            />
                            <rect
                              opacity="0.3"
                              x="13"
                              y="2"
                              width="9"
                              height="9"
                              rx="2"
                              fill="black"
                            />
                            <rect
                              opacity="0.3"
                              x="13"
                              y="13"
                              width="9"
                              height="9"
                              rx="2"
                              fill="black"
                            />
                            <rect
                              opacity="0.3"
                              x="2"
                              y="13"
                              width="9"
                              height="9"
                              rx="2"
                              fill="black"
                            />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </td>
                  <td className="ps-0">
                    <a
                      href="/"
                      className="text-gray-800 fw-bolder text-hover-primary fs-6"
                    >
                      Popular Authors
                    </a>
                    <span className="text-muted fw-bold d-block mt-1">
                      HTML, VueJS, Laravel
                    </span>
                  </td>
                  <td>
                    <div className="d-flex flex-column w-100 me-3">
                      <div className="d-flex flex-stack mb-2">
                        <span className="text-dark me-2 fs-6 fw-bolder">
                          Progress
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="progress h-6px w-100 bg-light-warning">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "87%" }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span className="text-muted fs-7 fw-bold ps-3">
                          87%
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-end pe-0">
                    <a
                      href="/"
                      className="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                    >
                      <span className="svg-icon svg-icon-4">
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
                  </td>
                </tr>
                <tr>
                  <th className="ps-0 py-3">
                    <div className="symbol symbol-65px bg-light-success me-3">
                      <span className="symbol-label">
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              opacity="0.5"
                              x="11.364"
                              y="20.364"
                              width="16"
                              height="2"
                              rx="1"
                              transform="rotate(-90 11.364 20.364)"
                              fill="black"
                            />
                            <rect
                              x="4.36396"
                              y="11.364"
                              width="16"
                              height="2"
                              rx="1"
                              fill="black"
                            />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </th>
                  <td className="ps-0">
                    <a
                      href="/"
                      className="text-gray-800 fw-bolder text-hover-primary fs-6"
                    >
                      New Users
                    </a>
                    <span className="text-muted fw-bold d-block mt-1">
                      HTML/CSS/JS, Python
                    </span>
                  </td>
                  <td>
                    <div className="d-flex flex-column w-100 me-3">
                      <div className="d-flex flex-stack mb-2">
                        <span className="text-dark me-2 fs-6 fw-bolder">
                          Progress
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="progress h-6px w-100 bg-light-success">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "53%" }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span className="text-muted fs-7 fw-bold ps-3">
                          53%
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-end pe-0">
                    <a
                      href="/"
                      className="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                    >
                      <span className="svg-icon svg-icon-4">
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
                  </td>
                </tr>
                <tr>
                  <th className="ps-0 py-3">
                    <div className="symbol symbol-65px bg-light-primary me-3">
                      <span className="symbol-label">
                        <span className="svg-icon svg-icon-1 svg-icon-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              opacity="0.3"
                              d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                              fill="black"
                            />
                            <rect
                              x="6"
                              y="12"
                              width="7"
                              height="2"
                              rx="1"
                              fill="black"
                            />
                            <rect
                              x="6"
                              y="7"
                              width="12"
                              height="2"
                              rx="1"
                              fill="black"
                            />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </th>
                  <td className="ps-0">
                    <a
                      href="/"
                      className="text-gray-800 fw-bolder text-hover-primary fs-6"
                    >
                      Top Authors
                    </a>
                    <span className="text-muted fw-bold d-block mt-1">
                      HTML/CSS/JS, Python
                    </span>
                  </td>
                  <td>
                    <div className="d-flex flex-column w-100 me-3">
                      <div className="d-flex flex-stack mb-2">
                        <span className="text-dark me-2 fs-6 fw-bolder">
                          Progress
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="progress h-6px w-100 bg-light-primary">
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: "46%" }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span className="text-muted fs-7 fw-bold ps-3">
                          46%
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-end pe-0">
                    <a
                      href="/"
                      className="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                    >
                      <span className="svg-icon svg-icon-4">
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
                  </td>
                </tr>
                <tr>
                  <th className="ps-0 py-3">
                    <div className="symbol symbol-65px bg-light-danger me-3">
                      <span className="symbol-label">
                        <span className="svg-icon svg-icon-1 svg-icon-danger">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              opacity="0.3"
                              d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                              fill="black"
                            />
                            <path
                              d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </th>
                  <td className="ps-0">
                    <a
                      href="/"
                      className="text-gray-800 fw-bolder text-hover-primary fs-6"
                    >
                      Weekly Bestsellers
                    </a>
                    <span className="text-muted fw-bold d-block mt-1">
                      HTML/CSS/JS, Python
                    </span>
                  </td>
                  <td>
                    <div className="d-flex flex-column w-100 me-3">
                      <div className="d-flex flex-stack mb-2">
                        <span className="text-dark me-2 fs-6 fw-bolder">
                          Progress
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="progress h-6px w-100 bg-light-danger">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: " 92%" }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span className="text-muted fs-7 fw-bold ps-3">
                          92%
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-end pe-0">
                    <a
                      href="/"
                      className="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                    >
                      <span className="svg-icon svg-icon-4">
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
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressbarTable;

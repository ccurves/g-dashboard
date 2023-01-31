import React from "react";
// import Notifications from "./Notifications";
import logo from "../../media/logos/logo-dark.png";
import avatar from "../../media/svg/avatars/001-boy.svg";
import headerBg from "../../media/misc/dropdown-header-bg.jpg";
import Sidebar from "./Sidebar";
import { signout } from "../../helpers/auth";

const Header = ({ setSection, section, userWallet, user }) => {
  const logout = () => {
    signout(() => {
      window.location.reload();
    });
  };

  return (
    <div>
      <div
        id="kt_header"
        className="header"
        data-kt-sticky="true"
        data-kt-sticky-name="header"
        data-kt-sticky-offset="{default: '200px', lg: '300px'}"
      >
        <div className="container-xxl d-flex align-items-stretch justify-content-between">
          <div className="d-flex align-items-center">
            <button
              className="btn btn-icon btn-accent me-2 me-lg-6"
              id="kt_mega_menu_toggle"
              data-bs-toggle="modal"
              data-bs-target="#kt_mega_menu_modal"
            >
              <span className="svg-icon svg-icon-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                >
                  <rect y="6" width="16" height="3" rx="1.5" fill="black" />
                  <rect
                    opacity="0.3"
                    y="12"
                    width="8"
                    height="3"
                    rx="1.5"
                    fill="black"
                  />
                  <rect
                    opacity="0.3"
                    width="12"
                    height="3"
                    rx="1.5"
                    fill="black"
                  />
                </svg>
              </span>
            </button>

            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setSection("Quickview", "Quickview");
              }}
            >
              <img
                alt="Logo"
                src={logo}
                className=""
                style={{ width: "55px" }}
              />
            </a>
          </div>
          <div className="d-flex align-items-center">
            <button
              className="btn btn-icon btn-sm btn-active-bg-accent ms-1 ms-lg-6"
              onClick={(e) => {
                setSection("Quickview", "Quickview");
              }}
            >
              <span className="svg-icon svg-icon-1 svg-icon-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                >
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <rect
                      x="5"
                      y="5"
                      width="5"
                      height="5"
                      rx="1"
                      fill="#000000"
                    ></rect>
                    <rect
                      x="14"
                      y="5"
                      width="5"
                      height="5"
                      rx="1"
                      fill="#000000"
                      opacity="0.3"
                    ></rect>
                    <rect
                      x="5"
                      y="14"
                      width="5"
                      height="5"
                      rx="1"
                      fill="#000000"
                      opacity="0.3"
                    ></rect>
                    <rect
                      x="14"
                      y="14"
                      width="5"
                      height="5"
                      rx="1"
                      fill="#000000"
                      opacity="0.3"
                    ></rect>
                  </g>
                </svg>
              </span>
            </button>

            {userWallet.shareUint === 0 ? (
              <a
                href="/"
                data-bs-toggle="modal"
                data-bs-target="#noaccess_modal"
                className="btn btn-icon btn-sm btn-active-bg-accent ms-1 ms-lg-6"
                id="kt_drawer_chat_toggle"
              >
                <span className="svg-icon svg-icon-1 svg-icon-dark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      opacity="0.3"
                      d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z"
                      fill="black"
                    />
                    <path
                      d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </a>
            ) : (
              <a
                href="/"
                onClick={(e) => {
                  setSection("Chatroom", section);
                }}
                className="btn btn-icon btn-sm btn-active-bg-accent ms-1 ms-lg-6"
                id="kt_drawer_chat_toggle"
              >
                <span className="svg-icon svg-icon-1 svg-icon-dark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      opacity="0.3"
                      d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z"
                      fill="black"
                    />
                    <path
                      d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </a>
            )}

            <div className="ms-1 ms-lg-6">
              <div
                className="btn btn-icon btn-sm btn-active-bg-accent"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-end"
                id="kt_header_user_menu_toggle"
              >
                <span className="svg-icon svg-icon-1 svg-icon-dark">
                  <span class="svg-icon svg-icon-1 svg-icon-dark">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6.28548 15.0861C7.34369 13.1814 9.35142 12 11.5304 12H12.4696C14.6486 12 16.6563 13.1814 17.7145 15.0861L19.3493 18.0287C20.0899 19.3618 19.1259 21 17.601 21H6.39903C4.87406 21 3.91012 19.3618 4.65071 18.0287L6.28548 15.0861Z"
                        fill="black"
                      />
                      <rect
                        opacity="0.3"
                        x="8"
                        y="3"
                        width="8"
                        height="8"
                        rx="4"
                        fill="black"
                      />
                    </svg>
                  </span>
                </span>
              </div>
              <div
                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-300px"
                data-kt-menu="true"
              >
                <div
                  className="menu-content fw-bold d-flex align-items-center bgi-no-repeat bgi-position-y-top rounded-top"
                  style={{
                    backgroundImage: `url(${headerBg})`,
                  }}
                >
                  <div className="symbol symbol-45px mx-5 py-5">
                    <span className="symbol-label bg-primary align-items-end">
                      <img alt="avatar" src={avatar} className="mh-35px" />
                    </span>
                  </div>
                  <div className="">
                    <span className="text-white fw-bolder fs-4">
                      Hello, {user.firstname}
                    </span>
                    <span className="text-white fw-bold fs-7 d-block">
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="row row-cols-2 g-0">
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      setSection("Withdraw", section);
                    }}
                    className="border-bottom border-end text-center py-10 btn btn-muted rounded-0"
                  >
                    <span className="svg-icon svg-icon-3x me-n1 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          opacity="0.3"
                          d="M15.8 11.4H6C5.4 11.4 5 11 5 10.4C5 9.80002 5.4 9.40002 6 9.40002H15.8C16.4 9.40002 16.8 9.80002 16.8 10.4C16.8 11 16.3 11.4 15.8 11.4ZM15.7 13.7999C15.7 13.1999 15.3 12.7999 14.7 12.7999H6C5.4 12.7999 5 13.1999 5 13.7999C5 14.3999 5.4 14.7999 6 14.7999H14.8C15.3 14.7999 15.7 14.2999 15.7 13.7999Z"
                          fill="black"
                        />
                        <path
                          d="M18.8 15.5C18.9 15.7 19 15.9 19.1 16.1C19.2 16.7 18.7 17.2 18.4 17.6C17.9 18.1 17.3 18.4999 16.6 18.7999C15.9 19.0999 15 19.2999 14.1 19.2999C13.4 19.2999 12.7 19.2 12.1 19.1C11.5 19 11 18.7 10.5 18.5C10 18.2 9.60001 17.7999 9.20001 17.2999C8.80001 16.8999 8.49999 16.3999 8.29999 15.7999C8.09999 15.1999 7.80001 14.7 7.70001 14.1C7.60001 13.5 7.5 12.8 7.5 12.2C7.5 11.1 7.7 10.1 8 9.19995C8.3 8.29995 8.79999 7.60002 9.39999 6.90002C9.99999 6.30002 10.7 5.8 11.5 5.5C12.3 5.2 13.2 5 14.1 5C15.2 5 16.2 5.19995 17.1 5.69995C17.8 6.09995 18.7 6.6 18.8 7.5C18.8 7.9 18.6 8.29998 18.3 8.59998C18.2 8.69998 18.1 8.69993 18 8.79993C17.7 8.89993 17.4 8.79995 17.2 8.69995C16.7 8.49995 16.5 7.99995 16 7.69995C15.5 7.39995 14.9 7.19995 14.2 7.19995C13.1 7.19995 12.1 7.6 11.5 8.5C10.9 9.4 10.5 10.6 10.5 12.2C10.5 13.3 10.7 14.2 11 14.9C11.3 15.6 11.7 16.1 12.3 16.5C12.9 16.9 13.5 17 14.2 17C15 17 15.7 16.8 16.2 16.4C16.8 16 17.2 15.2 17.9 15.1C18 15 18.5 15.2 18.8 15.5Z"
                          fill="black"
                        />
                      </svg>
                    </span>

                    <span className="fw-bolder fs-6 d-block pt-3">Wallet</span>
                  </a>
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      setSection("Settings", section);
                    }}
                    className="col border-bottom text-center py-10 btn btn-active-color-primary rounded-0"
                  >
                    <span className="svg-icon svg-icon-3x me-n1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z"
                          fill="black"
                        />
                        <path
                          opacity="0.3"
                          d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z"
                          fill="black"
                        />
                      </svg>
                    </span>

                    <span className="fw-bolder fs-6 d-block pt-3">
                      Settings
                    </span>
                  </a>
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      setSection("Shareholdings", section);
                    }}
                    className="col text-center border-end py-10 btn btn-active-color-primary rounded-0"
                  >
                    <span className="svg-icon svg-icon-3x me-n1">
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
                        ></path>
                        <path
                          d="M22 14.1V6L15 2L8 6V14.1L15 18.2L22 14.1Z"
                          fill="black"
                        ></path>
                      </svg>
                    </span>

                    <span className="fw-bolder fs-6 d-block pt-3">Shares</span>
                  </a>
                  <a
                    href="/"
                    onClick={logout}
                    className="col text-center py-10 btn btn-active-color-primary rounded-0"
                  >
                    <span className="svg-icon svg-icon-3x me-n1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          opacity="0.3"
                          x="4"
                          y="11"
                          width="12"
                          height="2"
                          rx="1"
                          fill="black"
                        />
                        <path
                          d="M5.86875 11.6927L7.62435 10.2297C8.09457 9.83785 8.12683 9.12683 7.69401 8.69401C7.3043 8.3043 6.67836 8.28591 6.26643 8.65206L3.34084 11.2526C2.89332 11.6504 2.89332 12.3496 3.34084 12.7474L6.26643 15.3479C6.67836 15.7141 7.3043 15.6957 7.69401 15.306C8.12683 14.8732 8.09458 14.1621 7.62435 13.7703L5.86875 12.3073C5.67684 12.1474 5.67684 11.8526 5.86875 11.6927Z"
                          fill="black"
                        />
                        <path
                          d="M8 5V6C8 6.55228 8.44772 7 9 7C9.55228 7 10 6.55228 10 6C10 5.44772 10.4477 5 11 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H11C10.4477 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17C8.44772 17 8 17.4477 8 18V19C8 20.1046 8.89543 21 10 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H10C8.89543 3 8 3.89543 8 5Z"
                          fill="#C4C4C4"
                        />
                      </svg>
                    </span>

                    <span className="fw-bolder fs-6 d-block pt-3">
                      Sign Out
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* <Notifications /> */}
          </div>
        </div>
      </div>
      <Sidebar setSection={setSection} section={section} />
    </div>
  );
};

export default Header;

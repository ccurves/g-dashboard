import React from "react";
import logo from "../../media/logos/logo-dark.png";
import doc from "../../media/doc/T&C.pdf";

const Sidebar = ({ setSection, section }) => {
  return (
    <div
      class="modal bg-white fade"
      id="kt_mega_menu_modal"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content shadow-none">
          <div class="container">
            <div class="modal-header d-flex flex-stack border-0">
              <div class="d-flex align-items-center">
                <a href="index-2.html">
                  <img alt="Logo" src={logo} class="h-30px" />
                </a>
              </div>

              <div
                class="btn btn-icon btn-sm btn-light-primary ms-2"
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
            <div class="modal-body">
              <div class="row py-10 g-5">
                <div class="col-lg-6 pe-lg-25">
                  <div class="row">
                    <div class="col-sm-4">
                      <h3 class="fw-bolder mb-5">Dashboard</h3>
                      <ul class="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
                        <li class="menu-item">
                          <a
                            class="menu-link ps-0 py-2 "
                            href="/"
                            onClick={(e) => {
                              e.preventDefault();
                              setSection("Quickview", section);
                            }}
                          >
                            Quickview
                          </a>
                        </li>
                        <li class="menu-item">
                          <a
                            class="menu-link ps-0 py-2"
                            href="/"
                            onClick={(e) => {
                              e.preventDefault();
                              setSection("Account", section);
                            }}
                          >
                            My Account
                          </a>
                        </li>
                        <li class="menu-item">
                          <a class="menu-link ps-0 py-2" href="/">
                            GG Affliate
                          </a>
                        </li>
                        <li class="menu-item">
                          <a
                            class="menu-link ps-0 py-2"
                            href="/"
                            onClick={(e) => {
                              e.preventDefault();
                              setSection("KYC", section);
                            }}
                          >
                            KYC
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-sm-4">
                      <h3 class="fw-bolder mb-5">Manage Profile</h3>
                      <ul class="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
                        <li class="menu-item">
                          <a
                            class="menu-link ps-0 py-2"
                            href="/"
                            onClick={(e) => {
                              e.preventDefault();
                              setSection("Settings", section);
                            }}
                          >
                            Settings
                          </a>
                        </li>
                        <li class="menu-item">
                          <a
                            class="menu-link ps-0 py-2"
                            href="/"
                            onClick={(e) => {
                              e.preventDefault();
                              setSection("Shareholdings", section);
                            }}
                          >
                            Share Units
                          </a>
                        </li>
                        <li class="menu-item">
                          <a
                            class="menu-link ps-0 py-2"
                            href="/"
                            onClick={(e) => {
                              e.preventDefault();
                              setSection("Withdraw", section);
                            }}
                          >
                            Wallet
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-4">
                      <h3 class="fw-bolder mb-5">General</h3>
                      <ul class="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
                        <li class="menu-item">
                          <a
                            class="menu-link ps-0 py-2"
                            href="https://ggconcept.org/"
                          >
                            Main website
                          </a>
                        </li>
                        <li class="menu-item">
                          <a
                            class="menu-link ps-0 py-2"
                            href="https://ggconcept.org/"
                          >
                            FAQs
                          </a>
                        </li>
                        <li class="menu-item">
                          <a
                            class="menu-link ps-0 py-2"
                            href="https://ggconcept.org/blog"
                          >
                            Blog
                          </a>
                        </li>
                        <li class="menu-item">
                          <a
                            class="menu-link ps-0 py-2"
                            href="https://ggconcept.org/services"
                          >
                            Services
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-sm-4">
                      <h3 class="fw-bolder mb-5">Company</h3>
                      <ul class="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
                        <li class="menu-item">
                          <a
                            class="menu-link ps-0 py-2"
                            href="https://ggconcept.org/about"
                          >
                            About
                          </a>
                        </li>
                        <li class="menu-item">
                          <a
                            class="menu-link ps-0 py-2"
                            href="https://ggconcept.org/about"
                          >
                            Team
                          </a>
                        </li>
                        <li class="menu-item">
                          <a class="menu-link ps-0 py-2" href="/">
                            Reports & Projections
                          </a>
                        </li>
                        <li class="menu-item">
                          <a
                            class="menu-link ps-0 py-2"
                            href={doc}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Terms & Policy{" "}
                            <span class="badge badge-changelog badge-light-info  bg-hover-info text-hover-white fw-bold fs-9 px-2 ms-2">
                              v1.0.0
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6">
                  <h3 class="fw-bolder mb-8">GG Segments</h3>

                  <div class="row g-5">
                    <div class="col-sm-4">
                      {" "}
                      <a
                        href="/"
                        class="card bg-light-info hoverable min-h-125px shadow-none mb-5"
                      >
                        <div class="card-body d-flex flex-column flex-center text-center">
                          <h3 class="fs-5 mb-2 text-dark fw-bolder">
                            G-Academy
                          </h3>
                          <p class="mb-0 text-gray-600">Coming soon..</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-4">
                      {" "}
                      <a
                        href="/"
                        class="card bg-light-primary hoverable min-h-125px shadow-none mb-5"
                      >
                        <div class="card-body d-flex flex-column flex-center text-center">
                          <h3 class="fs-5 mb-2 text-dark fw-bolder">
                            G-1000 Investments
                          </h3>
                          <p class="mb-0 text-gray-600">On-going</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-4">
                      {" "}
                      <a
                        href="/"
                        class="card bg-light-info hoverable min-h-125px shadow-none mb-5"
                      >
                        <div class="card-body d-flex flex-column flex-center text-center">
                          <h3 class="fs-5 mb-2 text-dark fw-bolder">
                            G-Start Up Grants
                          </h3>
                          <p class="mb-0 text-gray-600">Coming soon..</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-4">
                      {" "}
                      <a
                        href="/"
                        class="card bg-light-info hoverable min-h-125px shadow-none mb-5"
                      >
                        <div class="card-body d-flex flex-column flex-center text-center">
                          <h3 class="fs-5 mb-2 text-dark fw-bolder">
                            G-Charity Events
                          </h3>
                          <p class="mb-0 text-gray-600">Coming soon..</p>
                        </div>
                      </a>
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

export default Sidebar;

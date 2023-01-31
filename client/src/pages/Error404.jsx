import React from "react";
import logo from "../media/logos/logo-dark.png";
import bg from "../media/misc/404-hd.png";

const Error404 = () => {
  return (
    <div>
      <div className="d-flex flex-column flex-root">
        <div
          className="d-flex flex-column flex-lg-row flex-column-fluid "
          id="kt_login"
          // style={{ backgroundColor: "#EAF9FC" }}
        >
          <div className="d-flex flex-column flex-lg-row-auto  w-lg-600px pt-15 pt-lg-0 ">
            <div class="px-10 px-md-20 pt-10 pt-md-14 mb-10 z-index-1">
              <a href="/">
                <img alt="Logo" src={logo} class="h-75px" />
              </a>
            </div>
            <div class="px-10 px-md-20 py-10 py-md-0 d-flex flex-column justify-content-md-center align-items-start flex-root w-md-700px z-index-1 ">
              <p class="display-6 fw-bolder text-gray-800 mb-8">
                Something went wrong..
              </p>
              <p class="fs-6 mb-8">
                The page you are looking for doesn't exist
              </p>
              <a
                href="/"
                // onClick={(e) => {
                //   localStorage.setItem("currentPage", "login");
                // }}
                class="btn btn-primary fs-6 fw-bolder py-4 px-6 me-auto"
              >
                Return Home
              </a>
            </div>
          </div>

          <div
            class="bgi-size-contain bgi-position-x-end bgi-position-y-bottom bgi-no-repeat position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Error404;

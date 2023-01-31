import React from "react";
import logo from "../../media/logos/logo-white.png";
import svg1 from "../../media/illustrations/ouch/business-3d-man-with-phone.png";

const LoginAside = () => {
  return (
    <div className="d-flex flex-column flex-lg-row-auto bg-primary w-lg-600px pt-15 pt-lg-0">
      <div className="d-flex flex-row-fluid flex-center flex-column-auto flex-column text-center mb-5">
        <a href="../index-2.html" className="mb-6">
          <img alt="Logo" src={logo} className="" style={{ width: "150px" }} />
        </a>

        <h3
          className="fw-bolder fs-2x text-white lh-lg"
          style={{ margin: "15.5px 0px" }}
        >
          G-1000 Investment
          <br />
          Shareholder's Web App
        </h3>
      </div>

      <div
        className="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-100px min-h-lg-350px"
        style={{
          backgroundImage: `url( ${svg1} )`,
        }}
      ></div>
    </div>
  );
};

export default LoginAside;

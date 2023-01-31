import React, { useEffect, useState } from "react";
import LoginAside from "../components/Auth/LoginAside";
import LoginContent from "../components/Auth/LoginContent";
import "../styles/plugins.bundle.css";
import "../styles/style.bundle.css";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const page = localStorage.getItem("currentPage");
  const [statePage, setStatePage] = useState(page);
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let refCode = params.get("refCode");

  const setPage = (value) => {
    localStorage.setItem("currentPage", value);
    setStatePage(value);
  };
  useEffect((page) => {
    if (!statePage) {
      if (refCode !== null) {
        localStorage.setItem("currentPage", "register");
      } else {
        localStorage.setItem("currentPage", "login");
      }
      window.location.reload();
    }
  });

  return (
    <div>
      <div className="d-flex flex-column flex-root">
        <div
          className="d-flex flex-column flex-lg-row flex-column-fluid"
          id="kt_login"
        >
          <ToastContainer />
          <LoginAside page={statePage} />
          <LoginContent page={statePage} setPage={setPage} refCode={refCode} />
        </div>
      </div>
    </div>
  );
};

export default Login;

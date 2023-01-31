import React, { useEffect, useState } from "react";
import LoginAside from "../components/Auth/LoginAside";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import jwt from "jsonwebtoken";
import { useLocation } from "react-router";
import Footer from "../components/Auth/Footer";

const Activate = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [formData, setFormData] = useState({
    name: "",
    token: "",
  });
  const { name, token } = formData;

  useEffect(() => {
    let token = path;
    let { username } = jwt.decode(token);

    if (token) {
      setFormData({ ...formData, name, token });
    }

    console.log(token, username);
  }, [path, formData, name]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/activation`, {
        token,
      })
      .then((res) => {
        setFormData({
          ...formData,
          show: false,
        });

        toast.success(res.data.message);
        localStorage.setItem("currentPage", "login");
        window.location.replace("/login");
      })
      .catch((err) => {
        toast.error(err.response.data.errors);
      });
  };
  return (
    <div>
      <div className="d-flex flex-column flex-root">
        <div
          className="d-flex flex-column flex-lg-row flex-column-fluid"
          id="kt_login"
        >
          <ToastContainer />
          <LoginAside />
          <div className="login-content flex-lg-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden py-10 py-lg-20 px-10 p-lg-7 mx-auto mw-450px w-100">
            <div className="d-flex flex-column-fluid flex-center py-10">
              <div className="pb-5 pb-lg-15 text-center">
                <h3 className="fw-bolder text-dark display-6">
                  Welcome {name} to the G-1000 Community
                </h3>
                <form className="form w-100 pt-6 pb-6" onSubmit={handleSubmit}>
                  <button
                    type="submit"
                    id="kt_login_signin_form_submit_button"
                    className="btn btn-primary fw-bolder fs-6 px-8 py-4 my-3 me-3"
                  >
                    Activate your account
                  </button>
                </form>
                <div className="text-muted fw-bold fs-3 pt-7">
                  Or sign up again |
                  <a
                    href="/login"
                    className="text-primary fw-bolder"
                    style={{ marginLeft: "5px" }}
                    id="kt_login_signin_form_singup_button"
                  >
                    Create Account
                  </a>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activate;

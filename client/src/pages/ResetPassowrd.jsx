import React, { useEffect, useState } from "react";
import LoginAside from "../components/Auth/LoginAside";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import VisibilityTwoTone from "@mui/icons-material/VisibilityTwoTone";
import VisibilityOffTwoTone from "@mui/icons-material/VisibilityOffTwoTone";
import { useLocation } from "react-router";
import Footer from "../components/Auth/Footer";

const ResetPassowrd = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [visible, setVisibilty] = useState(false);
  const [formData, setFormData] = useState({
    password1: "",
    password2: "",
    token: "",
  });

  const handleToogle = (e) => {
    if (visible) {
      setVisibilty(false);
    } else {
      setVisibilty(true);
    }
  };

  const { password1, password2, token } = formData;

  useEffect(() => {
    let token = path;
    if (token) {
      setFormData({ ...formData, token });
    }
  }, [formData, path]);

  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password1 === password2 && password2 && password1) {
      axios
        .put(`${process.env.REACT_APP_API_URL}/auth/resetPassword`, {
          newPassword: password1,
          resetPasswordLink: token,
        })
        .then((res) => {
          setFormData({ ...formData, password1: "", password2: "" });
          toast.success(res.data.message);
          localStorage.setItem("currentPage", "login");
          window.location.replace("/login");
        })
        .catch((err) => {
          toast.error(` ${err.response.data.error}`);
        });
    } else {
      toast.error(`Passwords do not match`);
    }
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
              <div className="pb-5 pb-lg-15 ">
                <h3 className="fw-bolder text-dark display-6">
                  Reset Password
                </h3>
                <form className="form w-100 pt-6 pb-6" onSubmit={handleSubmit}>
                  <div className="fv-row mb-5">
                    <label className="form-label fs-6 fw-bolder text-dark pt-5">
                      Password
                    </label>
                    <div className="position-relative">
                      <input
                        className="form-control form-control-lg form-control-solid"
                        type={visible ? "text" : "password"}
                        placeholder="Enter password"
                        name="password"
                        autocomplete="off"
                        onChange={handleChange("password1")}
                        value={password1}
                      />
                      <div className="position-absolute translate-middle-y top-50 end-0 me-3">
                        <span
                          className=" "
                          onClick={handleToogle}
                          style={{ cursor: "pointer" }}
                        >
                          {visible ? (
                            <VisibilityTwoTone />
                          ) : (
                            <VisibilityOffTwoTone />
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="mb-4">
                    <label class="form-label" for="signupSrConfirmPassword">
                      Confirm password
                    </label>

                    <div
                      class="input-group input-group-merge"
                      data-hs-validation-validate-class
                    >
                      <input
                        type={visible ? "text" : "password"}
                        class="js-toggle-password form-control form-control-lg"
                        name="password2"
                        id="signupSrConfirmPassword"
                        placeholder="8+ characters required"
                        autocomplete="off"
                        onChange={handleChange("password2")}
                        value={password2}
                      />
                      <span
                        class="js-toggle-password-target-1 input-group-append input-group-text"
                        onClick={handleToogle}
                      >
                        {visible ? (
                          <VisibilityTwoTone
                            sx={{ color: "#667085", width: "18px" }}
                          />
                        ) : (
                          <VisibilityOffTwoTone
                            sx={{ color: "#667085", width: "18px" }}
                          />
                        )}
                      </span>
                    </div>

                    <span class="invalid-feedback">
                      Password does not match the confirm password.
                    </span>
                  </div>

                  <div className="fv-row mb-10">
                    <label className="form-label fs-6 fw-bolder text-dark pt-5">
                      Confirm Password
                    </label>
                    <div class="position-relative">
                      <input
                        className="form-control form-control-lg form-control-solid"
                        type={visible ? "text" : "password"}
                        placeholder="Repeat password"
                        name="cpassword"
                        autocomplete="off"
                        onChange={handleChange("password2")}
                        value={password2}
                      />
                      <div class="position-absolute translate-middle-y top-50 end-0 me-3">
                        <span
                          className=" "
                          onClick={handleToogle}
                          style={{ cursor: "pointer" }}
                        >
                          {visible ? (
                            <VisibilityTwoTone />
                          ) : (
                            <VisibilityOffTwoTone />
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap pb-lg-0 pb-5">
                    <button
                      type="submit"
                      id="kt_login_signup_form_submit_button"
                      className="btn btn-primary fw-bolder fs-6 px-8 py-4 my-3 me-4"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={() => window.location.replace("/login")}
                      id="kt_login_signup_form_cancel_button"
                      className="btn btn-light-primary fw-bolder fs-6 px-8 py-4 my-3"
                    >
                      Back to login
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassowrd;

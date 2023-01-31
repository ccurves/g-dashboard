import React, { useState } from "react";
// import gLogo from "../../media/svg/brand-logos/google-icon.svg";
import VisibilityTwoTone from "@mui/icons-material/VisibilityTwoTone";
import VisibilityOffTwoTone from "@mui/icons-material/VisibilityOffTwoTone";
import { toast } from "react-toastify";
import { authenticate, isAuth } from "../../helpers/auth";
import axios from "axios";

const LoginForm = ({ setPage }) => {
  const [visible, setVisibilty] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password1: "",
  });

  const { email, password1 } = formData;

  //Handle change from inputs
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const handleToogle = (e) => {
    if (visible) {
      setVisibilty(false);
    } else {
      setVisibilty(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (email && password1) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/auth/login`, {
          email,
          password: password1,
        })
        .then((res) => {
          console.log(res);
          authenticate(res, () => {
            setFormData({
              ...formData,
              email: "",
              password1: "",
            });
          });

          isAuth() && isAuth().role === "admin"
            ? window.location.replace("/admin-panel")
            : window.location.replace("/");
          toast.success(`Hey ${res.data.user.firstname}, Welcome back!`);
          setLoading(false);
        })
        .catch((err) => {
          if (err.response.data.errors === undefined) {
            toast.error("Wrong credentials, please check and try again");
            setLoading(false);
          } else {
            toast.error(err.response.data.errors);
            setLoading(false);
          }
        });
    } else {
      toast.error("Please fill out all the fields");
      setLoading(false);
    }
  };

  // const google = () => {
  //   window.open(`${process.env.REACT_APP_API_URL}/auth/google`, "_self");
  // };

  return (
    <form
      className="form w-100"
      novalidate="novalidate"
      id="kt_login_signin_form"
      data-after-login-url=""
      onSubmit={handleSubmit}
    >
      <div className="pb-5 pb-lg-15">
        <h3 className="fw-bolder text-dark display-6">Welcome G-Investor!</h3>
        <div className="text-muted fw-bold fs-3">
          New Here?
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setPage("register");
            }}
            className="text-primary fw-bolder"
            style={{ marginLeft: "5px" }}
            id="kt_login_signin_form_singup_button"
          >
            Create Account
          </a>
        </div>
      </div>

      <div className="fv-row mb-10">
        <label className="form-label fs-6 fw-bolder text-dark">Email</label>
        <input
          className="form-control form-control-lg form-control-solid"
          type="text"
          name="username"
          autocomplete="off"
          placeholder="Enter email"
          onChange={handleChange("email")}
        />
      </div>

      <div className="fv-row mb-5">
        <div className="d-flex justify-content-between mt-n5">
          <label className="form-label fs-6 fw-bolder text-dark pt-5">
            Password
          </label>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setPage("forgot");
            }}
            className="text-primary fs-6 fw-bolder text-hover-primary pt-5"
            id="kt_login_signin_form_password_reset_button"
          >
            Forgot Password ?
          </a>
        </div>
        <div className="position-relative">
          <input
            className="form-control form-control-lg form-control-solid"
            type={visible ? "text" : "password"}
            placeholder="Enter password"
            name="password1"
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
              {visible ? <VisibilityTwoTone /> : <VisibilityOffTwoTone />}
            </span>
          </div>
        </div>
      </div>

      <div className="pb-lg-0 pb-5">
        <button
          type="submit"
          id="kt_login_signin_form_submit_button"
          className="btn btn-primary fw-bolder fs-6 px-8 py-4 my-3 me-3"
        >
          {loading ? "Logging in..." : "Sign In"}
        </button>
        {/* <button
          type="button"
          className="btn btn-light-primary fw-bolder px-8 py-4 my-3 fs-6"
          onClick={google}
        >
          <img src={gLogo} className="w-20px h-20px me-3" alt="google-logo" />
          Sign in with Google
        </button> */}
      </div>
    </form>
  );
};

export default LoginForm;

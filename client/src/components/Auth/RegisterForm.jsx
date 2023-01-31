import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import VisibilityTwoTone from "@mui/icons-material/VisibilityTwoTone";
import VisibilityOffTwoTone from "@mui/icons-material/VisibilityOffTwoTone";
import doc from "../../media/doc/T&C.pdf";

const RegisterForm = ({ setPage, refCode }) => {
  const [visible, setVisibilty] = useState(false);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password1: "",
    password2: "",
    gender: "male",
  });
  const { email, firstname, lastname, gender, password1, password2 } = formData;

  //Handle change from inputs
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  //Password visibility
  const handleToogle = (e) => {
    if (visible) {
      setVisibilty(false);
    } else {
      setVisibilty(true);
    }
  };

  //Submit data to API
  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstname && lastname && email && gender && password1) {
      if (password1 === password2) {
        axios
          .post(`${process.env.REACT_APP_API_URL}/auth/register`, {
            firstname,
            lastname,
            email,
            gender,
            password: password1,
            refCode,
          })
          .then((res) => {
            setFormData({
              ...formData,
              firstname: "",
              lasttname: "",
              email: "",
              gender: "",
              password1: "",
              password2: "",
            });

            toast.success(res.data.message);
            window.location.replace("/login");
          })
          .catch((err) => {
            console.log(err);
            toast.error(err.response.data.error);
          });
      } else {
        toast.error("Passwords don't match");
      }
    } else {
      toast.error("Please fill all fields");
    }
  };

  return (
    <form
      className="form w-100"
      id="kt_login_signup_form"
      onSubmit={handleSubmit}
    >
      <div className="pb-5 pb-lg-15">
        <h3 className="fw-bolder text-dark display-6">Sign Up</h3>
        <p className="text-muted fw-bold fs-3">
          Enter your details to create your account
        </p>
      </div>
      <div class="row">
        <div class="col-xl-6">
          <div class="mb-10">
            <label class="fs-6 form-label fw-bolder text-dark">
              {" "}
              First Name
            </label>
            <input
              type="text"
              class="form-control form-control-lg form-control-solid"
              name="firstName"
              placeholder="Name"
              onChange={handleChange("firstname")}
              value={firstname}
            />
          </div>
        </div>
        <div class="col-xl-6">
          <div class="mb-10">
            <label class="fs-6 form-label fw-bolder text-dark">Last Name</label>
            <input
              type="text"
              class="form-control form-control-lg form-control-solid"
              name="lastName"
              placeholder="Surname"
              onChange={handleChange("lastname")}
              value={lastname}
            />
          </div>
        </div>
      </div>

      <div className="fv-row mb-5">
        <label className="form-label fs-6 fw-bolder text-dark pt-5">
          Email
        </label>
        <input
          className="form-control form-control-lg form-control-solid"
          type="email"
          placeholder="Email address"
          name="email"
          autocomplete="off"
          onChange={handleChange("email")}
          value={email}
        />
      </div>

      <div className="fv-row mb-5">
        <label class="fs-6 form-label fw-bolder text-dark">Gender</label>

        <select
          class="form-select form-select-solid"
          name="gender"
          data-placeholder="Specify Gender..."
          onChange={handleChange("gender")}
          defaultValue={gender}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

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
              {visible ? <VisibilityTwoTone /> : <VisibilityOffTwoTone />}
            </span>
          </div>
        </div>
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
              {visible ? <VisibilityTwoTone /> : <VisibilityOffTwoTone />}
            </span>
          </div>
        </div>
      </div>

      {refCode !== null && (
        <div className="fv-row mb-10">
          <label className="form-label fs-6 fw-bolder text-dark pt-5">
            Referred By
          </label>
          <div class="position-relative">
            <input
              className="form-control form-control-lg form-control-solid"
              type="text"
              placeholder="Referred By"
              name="refCode"
              autocomplete="off"
              value={refCode}
            />
          </div>
        </div>
      )}

      <div className="fv-row mb-10">
        <div className="form-check form-check-inline form-check-custom form-check-solid mb-5">
          <input
            className="form-check-input"
            type="checkbox"
            name="agree"
            id="kt_login_toc_agree"
          />
          <label
            className="form-check-label fw-bold text-gray-600"
            for="kt_login_toc_agree"
          >
            I Agree the
            <a href={doc} target="_blank" rel="noreferrer" className="ms-1">
              terms and conditions
            </a>
            .
          </label>
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
          onClick={() => setPage("login")}
          id="kt_login_signup_form_cancel_button"
          className="btn btn-light-primary fw-bolder fs-6 px-8 py-4 my-3"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;

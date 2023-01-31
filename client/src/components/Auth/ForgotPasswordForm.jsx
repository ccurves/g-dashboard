import React, { useState } from "react";
import { toast } from "react-toastify";

import axios from "axios";

const ForgotPasswordForm = ({ setPage }) => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const { email } = formData;
  //Handle change from inputs
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  //Submit data to backend
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      axios
        .put(`${process.env.REACT_APP_API_URL}/auth/forgotPassword`, {
          email,
        })
        .then((res) => {
          setFormData({
            ...formData,
            email: "",
          });
          toast.success("Reset link sent! Kindly check your inbox");
        })
        .catch((err) => {
          toast.error(err.response.data.error);
        });
    } else {
      toast.error("Please fill out all the fields");
    }
  };
  return (
    <form className="form w-100" onSubmit={handleSubmit}>
      <div className="pb-5 pb-lg-10">
        <h3 className="fw-bolder text-dark display-6">Forgotten Password ?</h3>
        <p className="text-muted fw-bold fs-3">
          Enter your email to reset your password
        </p>
      </div>

      <div className="fv-row mb-10">
        <label className="form-label fs-6 fw-bolder text-dark pt-5">
          Email
        </label>
        <input
          className="form-control form-control-lg form-control-solid"
          type="email"
          placeholder="Enter email"
          name="email"
          autocomplete="off"
          onChange={handleChange("email")}
          value={email}
        />
      </div>

      <div className="d-flex flex-wrap pb-lg-0">
        <button
          type="submit"
          id="kt_login_password_reset_form_submit_button"
          className="btn btn-primary fw-bolder fs-6 px-8 py-4 my-3 me-4"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={() => setPage("login")}
          id="kt_login_password_reset_form_cancel_button"
          className="btn btn-light-primary fw-bolder fs-6 px-8 py-4 my-3"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;

import React, { useState } from "react";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import { getCookie } from "../../helpers/auth";
import { toast } from "react-toastify";
import axios from "axios";

const UserModal = ({ user }) => {
  const [formData, setFormData] = useState({
    firstname: user.firstname,
    lastname: user.lastname,
    gender: user.gender,
    phoneNumber: user.phoneNumber,
    textChange: "Save Changes",
  });

  const { firstname, lastname, gender, phoneNumber, textChange } = formData;
  const authToken = getCookie("token");

  const handleChange = (text) => (e) => {
    setFormData({
      ...formData,
      [text]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({ ...formData, textChange: "Submitting..." });

    axios
      .put(
        `${process.env.REACT_APP_API_URL}/user/update/${user._id}`,
        {
          firstname,
          lastname,
          gender,
          phoneNumber,
        },
        {
          headers: {
            token: authToken,
          },
        }
      )
      .then((res) => {
        toast.success("Profile Updated Successfully");
        window.location.reload();
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
  };

  const sendMail = (e) => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/admin/send-mail`,
        {
          userId: user._id,
        },
        {
          headers: {
            token: authToken,
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
  };

  return (
    <div
      class="modal fade"
      id={`kt_modal_user_${user._id}`}
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered mw-900px">
        <div class="modal-content">
          <div class="modal-header">
            <h2>Edit {user.lastname}</h2>

            <div
              class="btn btn-sm btn-icon btn-active-color-primary"
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
          <div class="modal-body py-lg-10 px-lg-10">
            <div class="row">
              <label class="col-lg-3 col-form-label"></label>
              <div class="col-lg-9">
                <button
                  type="button"
                  class="btn btn-primary fw-bolder px-6 py-3 me-3"
                  onClick={sendMail}
                >
                  Resend Welcome Mail
                </button>
              </div>
            </div>
            <div class="separator separator-dashed my-10"></div>

            <form class="form d-flex flex-center" onSubmit={handleSubmit}>
              <div class="card-body mw-800px py-20">
                <div class="row mb-8">
                  <label class="col-lg-3 col-form-label">First Name</label>
                  <div class="col-lg-9">
                    <div class="spinner spinner-sm spinner-primary spinner-right">
                      <input
                        class="form-control form-control-lg form-control-solid"
                        type="text"
                        onChange={handleChange("firstname")}
                        value={firstname}
                      />
                    </div>
                  </div>
                </div>
                <div class="row mb-8">
                  <label class="col-lg-3 col-form-label">Last Name</label>
                  <div class="col-lg-9">
                    <div class="spinner spinner-sm spinner-primary spinner-right">
                      <input
                        class="form-control form-control-lg form-control-solid"
                        type="text"
                        onChange={handleChange("lastname")}
                        value={lastname}
                      />
                    </div>
                  </div>
                </div>

                <div class="row mb-8">
                  <label class="col-lg-3 col-form-label">Email Address</label>
                  <div class="col-lg-9">
                    <div class="input-group input-group-lg input-group-solid">
                      <span class="input-group-text pe-3">
                        <EmailTwoToneIcon />
                      </span>
                      <input
                        type="text"
                        class="form-control form-control-lg form-control-solid"
                        value={user.email}
                        readOnly
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>

                <div class="row mb-8">
                  <label class="col-lg-3 col-form-label">Gender</label>
                  <div class="col-lg-9">
                    <div class="input-group input-group-lg input-group-solid">
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
                  </div>
                </div>

                <div class="row mb-3">
                  <label class="col-lg-3 col-form-label">Phone Number</label>
                  <div class="col-lg-9">
                    <div class="input-group input-group-lg input-group-solid">
                      <span class="input-group-text pe-3">+234</span>
                      <input
                        class="form-control form-control-lg form-control-solid"
                        type="text"
                        onChange={handleChange("phoneNumber")}
                        value={phoneNumber}
                      />
                    </div>
                  </div>
                </div>

                <div class="separator separator-dashed my-10"></div>

                <div class="row">
                  <label class="col-lg-3 col-form-label"></label>
                  <div class="col-lg-9">
                    <button
                      type="submit"
                      class="btn btn-primary fw-bolder px-6 py-3 me-3"
                    >
                      {textChange}
                    </button>
                    <button
                      type="button"
                      data-bs-dismiss="modal"
                      class="btn btn-color-gray-600 btn-active-light-primary fw-bolder px-6 py-3"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;

import React, { useState } from "react";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import { getCookie, updateUser, isAuth } from "../../helpers/auth";
import { toast } from "react-toastify";
import axios from "axios";
import DeleteModal from "./DeleteModal";

const Settings = ({ setSection, section, user }) => {
  const previous = localStorage.getItem("previousSection");
  const [visible, setVisibilty] = useState(false);
  const [formData, setFormData] = useState({
    firstname: user.firstname,
    lastname: user.lastname,
    gender: user.gender,
    phoneNumber: user.phoneNumber,
    textChange: "Save Changes",
  });

  const { firstname, lastname, gender, phoneNumber, textChange } = formData;

  //Handle change from inputs
  const handleChange = (text) => (e) => {
    setFormData({
      ...formData,
      [text]: e.target.value,
    });
  };

  //Phone Number visibility
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
    const authToken = getCookie("token");
    setFormData({ ...formData, textChange: "Submitting..." });

    axios
      .put(
        `${process.env.REACT_APP_API_URL}/user/update/${isAuth()._id}`,
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
        updateUser(res, () => {
          toast.success("Profile Updated Successfully");
          setFormData({ ...formData, textChange: "Save Changes" });
        });
        window.location.reload();
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
  };

  return (
    <div className="col-xl-8">
      <div className="card card-stretch mb-5 mb-xxl-8">
        <div className="card-body">
          <div className="card-header align-items-center border-0 mt-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="fw-bolder text-dark fs-3">Account Settings</span>
            </h3>
            <div className="card-toolbar">
              <button
                type="button"
                className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-end"
              >
                <span
                  className="svg-icon svg-icon-1"
                  onClick={(e) => {
                    setSection(previous, section);
                  }}
                >
                  <ArrowBackTwoToneIcon />
                </span>
              </button>
            </div>
          </div>

          <div>
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
                    <div class="form-text">
                      Email will not be publicly displayed.
                      <a href="/" class="fw-bold">
                        Learn more
                      </a>
                      .
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

                <div class="row align-items-center mb-8">
                  <label class="col-lg-3 col-form-label">Communication</label>
                  <div class="col-lg-9">
                    <div class="d-flex align-items-center">
                      <div class="form-check form-check-custom form-check-solid me-5">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          checked="checked"
                          id="inlineCheckbox1"
                          value="option1"
                        />
                        <label
                          class="form-check-label fw-bold"
                          for="inlineCheckbox1"
                        >
                          Email
                        </label>
                      </div>

                      <div class="form-check form-check-custom form-check-solid">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          checked={!visible ? "" : "checked"}
                          id="inlineCheckbox3"
                          value="option3"
                          onClick={handleToogle}
                        />
                        <label
                          class="form-check-label fw-bold"
                          for="inlineCheckbox3"
                        >
                          Phone
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {visible ? (
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
                      <div class="form-text">
                        Phone number will not be publicly displayed.
                        <a href="/" class="fw-bold">
                          Learn more
                        </a>
                        .
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}

                <div class="separator separator-dashed my-10"></div>

                <div class="row mb-8">
                  <label class="col-lg-3 col-form-label">
                    Login verification
                  </label>
                  <div class="col-lg-9">
                    <button
                      type="button"
                      class="btn btn-light-primary fw-bold btn-sm"
                    >
                      Setup login verification
                    </button>
                    <div class="form-text">
                      After you log in, you will be asked for additional
                      information to confirm your identity and protect your
                      account from being compromised.
                      <a href="/" class="fw-bold">
                        Learn more
                      </a>
                      .
                    </div>
                  </div>
                </div>

                <div class="row mb-13">
                  <label class="col-lg-3 col-form-label">
                    Password reset verification
                  </label>
                  <div class="col-lg-9">
                    <div class="form-check form-check-custom form-check-solid me-5">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="customCheck5"
                        value="option1"
                      />
                      <label
                        class="form-check-label fw-bold"
                        for="customCheck5"
                      >
                        Require personal information to reset your password.
                      </label>
                    </div>
                    <div class="form-text py-2">
                      For extra security, this requires you to confirm your
                      email or phone number when you reset your password.
                      <a href="/" class="fw-boldk">
                        Learn more
                      </a>
                      .
                    </div>
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target={`#kt_modal_delete_${user._id}`}
                      class="btn btn-light-danger fw-bold btn-sm"
                    >
                      Deactivate your account ?
                    </button>
                    <DeleteModal user={user} />
                  </div>
                </div>

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
                      onClick={(e) => {
                        setSection(previous, section);
                      }}
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

export default Settings;

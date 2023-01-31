import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
// import { updateUser } from "../../helpers/auth";

const AffilateModal = ({ user }) => {
  const [filters, setFilters] = useState([]);
  const [platforms, setPlatfroms] = useState([{}]);
  const [formData, setFormData] = useState({
    experience: "",
  });
  const { experience } = formData;

  const handleFilters = (e) => {
    const value = e.target.value;

    if (!filters.includes(value)) {
      setFilters((oldfilters) => [...oldfilters, value]);
    } else {
      const newVal = filters.filter(function (item) {
        return item !== e.target.value;
      });
      setFilters(newVal);
    }
  };

  //Handle change from inputs
  const handleChange = (e) => {
    // setPlatfroms({ ...platforms, name: e.target.name, link: e.target.value });
    setPlatfroms((oldfilters) => [
      ...oldfilters,
      { name: e.target.name, link: e.target.value },
    ]);
  };

  //Handle select
  const handleSelect = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  //Submit data to API
  const handleSubmit = (e) => {
    e.preventDefault();
    if (platforms && experience) {
      console.log(platforms);
      console.log(experience);
      axios
        .post(`${process.env.REACT_APP_API_URL}/user/affilate/apply`, {
          userId: user._id,
          exp: experience,
          platforms: platforms,
        })
        .then((res) => {
          setFormData({
            ...formData,
            experience: "",
          });
          setPlatfroms([{}]);
          localStorage.setItem("user", JSON.stringify(res.data.others));
          toast.success(res.data.message);

          window.location.reload();
        })
        .catch((err) => {
          toast.error(err.response.data.error);
        });
    } else {
      toast.error("Please fill all fields");
    }
  };

  return (
    <div
      class="modal fade"
      id="kt_modal_affilate"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered mw-900px">
        <div class="modal-content">
          <div class="modal-header">
            <h2>GG Affilate Application</h2>

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
            <div class="text-muted fw-bold fs-3">
              Fill in your details to be reviewed and verified as a qualified
              affiliate for Project G1000.
            </div>
            <div className="mt-8">
              <form
                className="form w-100"
                id="kt_login_signup_form"
                onSubmit={handleSubmit}
              >
                <div className="fv-row mb-10">
                  <label className="d-flex align-items-center fs-5 fw-bold mb-2">
                    <span>Full Name</span>
                  </label>

                  <input
                    type="text"
                    className="form-control form-control-lg form-control-solid"
                    name="name"
                    value={user.firstname + " " + user.lastname}
                    readOnly
                    //   onChange={handleChange("fullname")}
                  />
                </div>

                <div className="fv-row mb-10">
                  <label className="d-flex align-items-center fs-5 fw-bold mb-4">
                    <span className="">
                      Do you have an experience in affiliating or refferals?
                    </span>
                  </label>

                  <div className="fv-row">
                    <label className=" d-flex mb-5 cursor-pointer">
                      <span className="form-check form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="experience"
                          value="Yes"
                          onChange={handleSelect("experience")}
                        />

                        <span className="px-3 align-items-center me-2">
                          <span className="">
                            <span className="fw-bolder fs-6">Yes</span>
                          </span>
                        </span>
                      </span>
                    </label>
                    <label className=" d-flex mb-5 cursor-pointer">
                      <span className="form-check form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="experience"
                          value="No"
                          onChange={handleSelect("experience")}
                        />

                        <span className="px-3 align-items-center me-2">
                          <span className="">
                            <span className="fw-bolder fs-6">No</span>
                          </span>
                        </span>
                      </span>
                    </label>
                    <label className="d-flex  mb-5 cursor-pointer">
                      <span className="form-check form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="experience"
                          value="Maybe"
                          onChange={handleSelect("experience")}
                        />

                        <span className="px-3 align-items-center me-2">
                          <span className="">
                            <span className="fw-bolder fs-6">Maybe</span>
                          </span>
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
                <div className="fv-row mb-10">
                  <label className="d-flex align-items-center fs-5 fw-bold mb-4">
                    <span className="">
                      What platform are you planning to use to get more people
                      through you?
                    </span>
                  </label>

                  <div className="fv-row">
                    <label className=" d-flex mb-5 cursor-pointer">
                      <span className="form-check form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="platform"
                          value="whatsapp"
                          onChange={handleFilters}
                        />

                        <span className="px-3 align-items-center me-2">
                          <span className="">
                            <span className="fw-bolder fs-6">Whatsapp</span>
                          </span>
                        </span>
                      </span>
                    </label>
                    <label className=" d-flex mb-5 cursor-pointer">
                      <span className="form-check form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="platform"
                          value="facebook"
                          onChange={handleFilters}
                        />

                        <span className="px-3 align-items-center me-2">
                          <span className="">
                            <span className="fw-bolder fs-6">Facebook</span>
                          </span>
                        </span>
                      </span>
                    </label>
                    <label className=" d-flex mb-5 cursor-pointer">
                      <span className="form-check form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="platform"
                          value="instagram"
                          onChange={handleFilters}
                        />

                        <span className="px-3 align-items-center me-2">
                          <span className="">
                            <span className="fw-bolder fs-6">Instagram</span>
                          </span>
                        </span>
                      </span>
                    </label>
                    <label className=" d-flex mb-5 cursor-pointer">
                      <span className="form-check form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="platform"
                          value="twitter"
                          onChange={handleFilters}
                        />

                        <span className="px-3 align-items-center me-2">
                          <span className="">
                            <span className="fw-bolder fs-6">Twitter</span>
                          </span>
                        </span>
                      </span>
                    </label>
                  </div>
                </div>

                <div className="fv-row mb-10">
                  <label className="d-flex align-items-center fs-5 fw-bold mb-2">
                    <span>
                      Provide your profile link to the selected platform(s)
                    </span>
                  </label>

                  <div className="fv-row">
                    {filters.includes("whatsapp") && (
                      <input
                        type="text"
                        className="form-control mb-5 form-control-lg form-control-solid"
                        name="whatsapp"
                        placeholder="WhatsApp"
                        onChange={handleChange}
                      />
                    )}
                    {filters.includes("instagram") && (
                      <input
                        type="text"
                        className="form-control mb-5 form-control-lg form-control-solid"
                        name="instagram"
                        placeholder="Instagram"
                        onChange={handleChange}
                      />
                    )}
                    {filters.includes("facebook") && (
                      <input
                        type="text"
                        className="form-control mb-5 form-control-lg form-control-solid"
                        name="facebook"
                        placeholder="Facebook"
                        onChange={handleChange}
                      />
                    )}
                    {filters.includes("twitter") && (
                      <input
                        type="text"
                        className="form-control mb-5 form-control-lg form-control-solid"
                        name="twitter"
                        placeholder="Twitter"
                        onChange={handleChange}
                      />
                    )}
                  </div>
                </div>
                <div className="d-flex flex-stack pt-10">
                  <div className="me-2">
                    <button
                      type="button"
                      className="btn btn-lg btn-light-primary me-3"
                      data-bs-dismiss="modal"
                    >
                      <span className="svg-icon svg-icon-3 me-1">
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
                      Cancel
                    </button>
                  </div>

                  <div>
                    <button type="submit" className="btn btn-lg btn-primary">
                      Submit
                      <span className="svg-icon svg-icon-3 ms-1 me-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <rect
                            opacity="0.5"
                            x="18"
                            y="13"
                            width="13"
                            height="2"
                            rx="1"
                            transform="rotate(-180 18 13)"
                            fill="black"
                          />
                          <path
                            d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffilateModal;

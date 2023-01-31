import axios from "axios";

import React from "react";
import { toast } from "react-toastify";
import { getCookie, signout } from "../../helpers/auth";

const DeleteModal = ({ user }) => {
  const authToken = getCookie("token");

  const handleDelete = () => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/user/delete/${user._id}`,

        {
          headers: {
            token: authToken,
          },
        }
      )
      .then((res) => {
        console.log(res);
        toast.info("Account deleted!");
        signout();
        window.location.reload();
      })
      .catch((err) => {
        if (err.response === undefined) {
          toast.error("Something went wrong, please try again later");
        } else {
          toast.error(err.response.data.errors);
        }
      });
  };

  return (
    <div
      class="modal fade"
      id={`kt_modal_delete_${user._id}`}
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered mw-900px">
        <div class="modal-content">
          <div class="modal-header">
            <h2>Delete Account</h2>

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
            <div class="w-100 text-center">
              <div class="text-center px-4 py-6">
                {/* <img src={svg1} alt="" class=" mh-200px" /> */}
              </div>
              <h1 class="fw-bolder text-dark mb-3">Delete your account?</h1>

              <div class="text-muted fw-bold fs-3">
                We are sorry to see you go, if you have a compliant or issue,
                chat with us through the live chat on the webiste or send a mail
                to info@ggconcept.org
              </div>
              <div className=" mt-10">
                <button
                  type="button"
                  className="btn btn-lg btn-danger"
                  style={{ marginRight: "8px" }}
                  onClick={handleDelete}
                >
                  Yes, I'm sure
                </button>
                <button
                  data-bs-dismiss="modal"
                  className="btn btn-lg btn-primary"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

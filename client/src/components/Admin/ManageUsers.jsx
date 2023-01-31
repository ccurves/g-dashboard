import axios from "axios";
import React, { useEffect, useState } from "react";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import { getCookie } from "../../helpers/auth";
import DeleteModal from "./DeleteModal";
import UserModal from "./UserModal";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchBar from "./SearchBar";

const ManageUsers = ({ setSection, section, previous }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const authToken = getCookie("token");
    const getUsers = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/admin/users`,
          {
            headers: {
              token: authToken,
            },
          }
        );

        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="col-xl-12">
      <div className="card card-stretch mb-5 mb-xxl-8">
        <div class="card-header border-0 pt-5">
          <h3 class="card-title align-items-start flex-column">
            <span class="card-label fw-bolder text-dark fs-3">
              Manage Users
            </span>
          </h3>
          <div className="card-toolbar d-flex">
            <SearchBar data={users} setUsers={setUsers} />
            <button
              type="button"
              className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary mx-3"
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
        <div className="card-body">
          <div class="table-responsive">
            <table class="table table-borderless align-middle">
              <thead>
                <tr>
                  <th class="p-0 w-50px"></th>
                  <th class="p-0 min-w-200px"></th>
                  <th class="p-0 min-w-100px"></th>
                  <th class="p-0 min-w-40px"></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <th class="px-0 py-3">
                      <div class="symbol symbol-25px me-5">
                        <span class="symbol-label bg-light-primary">
                          <span class="svg-icon svg-icon-1 svg-icon-primary"></span>
                        </span>
                      </div>
                    </th>
                    <td class="ps-0">
                      <a
                        href="/"
                        class="text-gray-800 fw-bolder text-hover-primary fs-6"
                      >
                        {user.firstname + " " + user.lastname}
                      </a>
                    </td>
                    <td class="ps-0">
                      <a
                        href="/"
                        class="text-gray-800 fw-bolder text-hover-primary fs-6"
                      >
                        {user.gender.charAt(0).toUpperCase() +
                          user.gender.slice(1)}
                      </a>
                    </td>
                    <td class="ps-0">
                      <a
                        href="/"
                        class="text-gray-800 fw-bolder text-hover-primary fs-6"
                      >
                        {user.email}
                      </a>
                    </td>

                    <td class="text-end pe-0">
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-icon btn-sm btn-active-bg-accent ms-1 ms-lg-6"
                          data-bs-toggle="modal"
                          data-bs-target={`#kt_modal_user_${user._id}`}
                        >
                          <span className="svg-icon svg-icon-1 svg-icon-dark">
                            <EditIcon />
                          </span>
                        </button>
                        <button
                          className="btn btn-icon btn-sm btn-active-bg-accent ms-1 ms-lg-6"
                          data-bs-toggle="modal"
                          data-bs-target={`#kt_modal_delete_${user._id}`}
                        >
                          <span className="svg-icon svg-icon-1 svg-icon-dark">
                            <DeleteIcon />
                          </span>
                        </button>
                      </div>
                      <DeleteModal user={user} />
                      <UserModal user={user} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;

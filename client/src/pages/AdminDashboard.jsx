import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import AdminPanel from "../components/Admin/AdminPanel";
import Header from "../components/Admin/Header";
import KycReq from "../components/Admin/KycReq";
import ManageAffilate from "../components/Admin/ManageAffilate";
import ManageShares from "../components/Admin/ManageShares";
import ManageUsers from "../components/Admin/ManageUsers";
import WithdrawalReq from "../components/Admin/WithdrawalReq";

const AdminDashboard = () => {
  const section = localStorage.getItem("currentSection");
  const user = JSON.parse(localStorage.getItem("user"));

  const previous = localStorage.getItem("previousSection");
  const [stateSection, setStateSection] = useState(section);

  const setSection = (value, value2) => {
    localStorage.setItem("currentSection", value);
    localStorage.setItem("previousSection", value2);
    setStateSection(value);
  };

  useEffect((section) => {
    if (!stateSection) {
      localStorage.setItem("currentSection", "Quickview");
      window.location.reload();
    }
  });
  return (
    <div>
      <div className="d-flex flex-column flex-root">
        <div className="page d-flex flex-row flex-column-fluid">
          <div
            className="wrapper d-flex flex-column flex-row-fluid"
            id="kt_wrapper"
          >
            <Header
              setSection={setSection}
              section={stateSection}
              previous={previous}
              user={user}
            />
            <ToastContainer />
            <div className="d-flex flex-column flex-column-fluid">
              <div
                className="content fs-6 d-flex flex-column-fluid"
                id="kt_content"
              >
                <div className="container-xxl">
                  <div className="row g-0 g-xl-5 g-xxl-5">
                    {stateSection === "Quickview" && (
                      <AdminPanel
                        setSection={setSection}
                        section={stateSection}
                        user={user}
                      />
                    )}
                    {stateSection === "KycReq" && (
                      <KycReq
                        setSection={setSection}
                        section={stateSection}
                        user={user}
                        previous={previous}
                      />
                    )}
                    {stateSection === "WithdrawalReq" && (
                      <WithdrawalReq
                        setSection={setSection}
                        section={stateSection}
                        user={user}
                        previous={previous}
                      />
                    )}
                    {stateSection === "ManageUsers" && (
                      <ManageUsers
                        setSection={setSection}
                        section={stateSection}
                        user={user}
                        previous={previous}
                      />
                    )}
                    {stateSection === "ManageShares" && (
                      <ManageShares
                        setSection={setSection}
                        section={stateSection}
                        user={user}
                        previous={previous}
                      />
                    )}
                    {stateSection === "ManageAffilates" && (
                      <ManageAffilate
                        setSection={setSection}
                        section={stateSection}
                        user={user}
                        previous={previous}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
